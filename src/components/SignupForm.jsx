import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import LoadingButton from "../components/LoadingButton";

export default function SignupForm({ notify }) {
  //styles
  const inputStyle = "p-2 md:text-xl focus:outline-none rounded-lg";

  //Initialize Variables
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [photoUrl, setPhotoUrl] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState();

  const { signup } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    // do validation
    if (password.length < 6) {
      return notify("Password should be at least 6 characters.");
    }

    try {
      setLoading(true);
      await signup(email, password, username, photoUrl);
      navigate("/");
    } catch (err) {
      setLoading(false);
      notify(err.message);
    }
  }

  const emailHandler = (e) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value))
      setValidEmail(true);
    else setValidEmail(false);

    setEmail(e.target.value);
  };
  return (
    <form
      className="flex flex-col gap-3 bg-[#4E86DC] shadow-2xl shadow-sky-700 md:p-10 p-5 rounded-xl"
      onSubmit={handleSubmit}
    >
      <h1 className="text-center text-4xl mb-14 text-white font-bold">
        Registration
      </h1>
      <input
        type="text"
        placeholder="Enter name"
        required
        value={username}
        className={inputStyle}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="text"
        required
        placeholder="Enter email"
        value={email}
        className={inputStyle}
        onChange={emailHandler}
      />

      {email && !validEmail && (
        <p className="text-red-500">Not a Valid Email</p>
      )}

      <input
        type="password"
        required
        placeholder="Enter password"
        value={password}
        className={inputStyle}
        onChange={(e) => setPassword(e.target.value)}
      />

      <input
        required
        placeholder="Enter Photo URL"
        value={photoUrl}
        className={inputStyle}
        onChange={(e) => setPhotoUrl(e.target.value)}
      />
      <LoadingButton loading={loading} text="Register" />

      <div className="md:text-lg text-white mt-10">
        Already have an account?{" "}
        <Link
          to="/login"
          className="text-secondary hover:text-yellow-500 transition-all duration-300"
        >
          Login
        </Link>{" "}
        instead.
      </div>
    </form>
  );
}
