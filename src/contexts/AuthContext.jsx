import React, { useContext, useEffect } from "react";
import { useState } from "react";
import "../firebase";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
} from "firebase/auth";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentUser, setCurrentUser] = useState();
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  //signup function
  async function signup(email, password, username, photoURL) {
    const auth = getAuth();
    await createUserWithEmailAndPassword(auth, email, password);

    // updateProfile
    await updateUserProfile(username, photoURL);

    const user = auth.currentUser;
    setCurrentUser({ ...user });
  }

  async function updateUserProfile(username, photoURL) {
    await updateProfile(auth.currentUser, {
      displayName: username,
      photoURL: photoURL,
    });
  }

  //login function
  function login(email, password) {
    const auth = getAuth();
    return signInWithEmailAndPassword(auth, email, password);
  }

  // signin with google
  async function googleSignIn() {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider)
      .then((result) => {
        const user = result.user;
        setCurrentUser({ ...user });
      })
      .catch((error) => {
        setError(error.message);
      });
  }

  //logout function
  function logout() {
    const auth = getAuth();
    return signOut(auth);
  }

  function resetPassword(email, notify) {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        notify("Password reset email sent successfully!");
      })
      .catch((error) => {
        notify(error.message);
      });
  }

  const value = {
    currentUser,
    error,
    signup,
    login,
    logout,
    googleSignIn,
    updateUserProfile,
    resetPassword,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
