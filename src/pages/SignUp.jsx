import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import train from "../assets/train.png";
import SignupForm from "../components/SignupForm";

export default function Signup() {
  const notify = (msg) => {
    if (msg === "Firebase: Error (auth/email-already-in-use).")
      msg = "Email already in use. Try another email.";
    toast.error(msg);
  };

  return (
    <div className="bg-primary">
      <div className="max-w-screen-2xl mx-auto px-2 md:px-0 md:flex justify-center items-center min-h-[87vh] md:py-0 py-10">
        <img className="hidden lg:block -ml-72 w-3/4" src={train} alt="train" />
        <div className="mt-[5%] md:mt-0">
          <SignupForm notify={notify} />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
