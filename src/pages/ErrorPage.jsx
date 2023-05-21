import { useNavigate } from "react-router-dom";
import errorImage from "../assets/404.jpg";
import PrimaryButton from "../components/PrimaryButton";

export default function ErrorPage() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="max-w-7xl mx-auto p-10">
        <img className="md:w-3/4 mx-auto" src={errorImage} alt="error" />
        <div className="text-center md:absolute md:top-40 md:left-1/2 md:transform md:-translate-x-1/2">
          <h1 className="text-8xl md:text-9xl font-bold text-blue-200">404</h1>
          <h1 className="my-2 text-gray-800 font-bold text-3xl md:text-5xl">
            Page not found!
          </h1>
          <p className="my-2 text-gray-800">
            Sorry about that! Please visit hompage to get where you need to go.
          </p>
        </div>
        <PrimaryButton
          text={"Take me to Home Page!"}
          style={
            "md:w-1/3 w-3/4 mx-auto md:absolute md:bottom-20 md:left-1/2 md:transform md:-translate-x-1/2"
          }
          onClickHandler={() => navigate("/")}
        />
      </div>
    </div>
  );
}
