import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import LoadingButton from "./LoadingButton";
import { FcGoogle } from "react-icons/fc";

export default function LoginForm({ notify, forgotPassword }) {
  //styles
  const inputStyle = "p-2 md:text-xl focus:outline-none rounded-lg";

  //Initialize Variables
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { login, googleSignIn } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);
    login(email, password)
      .then((result) => {
        if (result.user) {
          setLoading(false);
        }
      })
      .catch((e) => {
        setLoading(false);
        notify(e);
      });
  }

  return (
    <form
      className="flex flex-col gap-3 bg-[#4E86DC] shadow-2xl shadow-sky-700 md:p-10 p-5 rounded-xl"
      onSubmit={handleSubmit}
    >
      <h1 className="text-center text-4xl mb-14 text-white font-bold">Login</h1>
      <input
        type="email"
        placeholder="Enter E-mail"
        required
        value={email}
        className={inputStyle}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        required
        placeholder="Enter password"
        value={password}
        className={inputStyle}
        onChange={(e) => setPassword(e.target.value)}
      />

      <h1
        onClick={forgotPassword}
        className="text-white text-right cursor-pointer"
      >
        <u>Forgot Password?</u>
      </h1>

      <LoadingButton loading={loading} text="Login" />

      <div className="md:text-lg text-white md:mt-10 mt-5 text-center">
        Don't have an account?{" "}
        <Link
          to="/register"
          className="text-secondary hover:text-yellow-500 transition-all duration-300"
        >
          Sign Up
        </Link>{" "}
        here.
      </div>
      <div className="text-center text-white">
        <h1 className="font-bold">
          Or {" , "}
          <span className="font-semibold text-lg text-secondary">
            Continue with
          </span>
        </h1>

        <div className="flex items-center justify-center gap-3 mt-3">
          <FcGoogle
            onClick={() => googleSignIn()}
            className="hover:scale-105 transition-all duration-200 w-1/2 h-12 rounded bg-white p-2 cursor-pointer"
          />
        </div>
      </div>
    </form>
  );
}
