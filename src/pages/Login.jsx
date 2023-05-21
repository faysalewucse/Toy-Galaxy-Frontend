import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "../contexts/AuthContext";
import LoginForm from "../components/LoginForm";
import truck from "../assets/truck.png";

export default function Login() {
  const { resetPassword } = useAuth();

  const notify = ({ message }) => {
    if (message === "Firebase: Error (auth/wrong-password).")
      message = "Wrong password";
    else if (message === "Firebase: Error (auth/user-not-found).")
      message = "User not found";
    toast.error(message);
  };

  const [modal, setModal] = useState(false);
  const [email, setEmail] = useState("");

  const forgotPassword = () => {
    setModal(true);
  };

  const sendPasswordResetEmail = (e) => {
    e.preventDefault();
    try {
      resetPassword(email);

      setModal(false);
      toast.success(
        "Password reset email sent to your email. Check the email."
      );
    } catch (error) {
      notify(error.message);
    }
  };

  return (
    <div className="bg-primary">
      <div className="max-w-7xl mx-auto md:pt-10 md:pb-24 py-10 px-5 md:flex gap-20 justify-between items-center">
        <img className="hidden lg:block w-1/2" src={truck} alt="truck" />
        <div className="">
          <LoginForm notify={notify} forgotPassword={forgotPassword} />
        </div>
      </div>
      {modal && (
        <div className="">
          <div
            onClick={() => setModal(false)}
            className="fixed w-full h-full inset-0 z-10 bg-black/50 cursor-pointer"
          ></div>
          <div className="rounded w-3/4 overflow-auto lg:w-2/5 bg-white p-2 md:p-10 absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
            <form
              onSubmit={sendPasswordResetEmail}
              className="text-left p-5 md:p-10"
            >
              <label
                className="font-bold text-secondary2"
                htmlFor="displayName"
              >
                Email
              </label>
              <br />
              <input
                id="displayName"
                type="email"
                placeholder="Enter your email address"
                className="p-3 bg-blue-50 rounded focus:outline-none font-bold mb-2 w-full"
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                className="bg-primary text-white w-full p-2 mt-5 rounded hover:bg-primaryHover cursor-pointer"
                type="submit"
                value="Sent"
              />
            </form>
          </div>
        </div>
      )}
      <ToastContainer />
    </div>
  );
}
