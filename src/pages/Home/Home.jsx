import babyImage from "../../assets/baby.png";
import circle from "../../assets/circle.png";
import Navbar from "../../components/Navbar";
import PrimaryButton from "../../components/PrimaryButton";

export default function Home() {
  return (
    <div className="bg-primary relative">
      <Navbar />
      <div className="max-w-screen-2xl mx-auto p-10 md:px-20 flex flex-col md:flex-row-reverse items-center">
        {/* <img
          src={circle}
          alt="circle"
          className="absolute w-1/3 md:w-1/6 -top-10 -left-10"
        />
        <img
          src={circle}
          alt="circle"
          className="absolute w-1/3 md:w-1/6 -bottom-14 -right-14"
        /> */}
        <div className="md:w-1/2">
          <img
            className="md:ml-auto md:mx-0 w-2/3 mx-auto mb-10 md:mb-0"
            src={babyImage}
            alt="baby"
          />
        </div>
        <div className="md:w-1/2 text-white z-10 text-center md:text-left">
          <span className="text-4xl md:text-6xl text-white">Welcome to</span>
          <h1 className="bg-clip-text text-transparent bg-gradient-to-l from-pink-400 to-pink-600 font-bold text-5xl md:text-8xl text-pink-400">
            ToyGalaxy
          </h1>
          <h3 className="my-5 text-xl md:text-3xl">
            Explore the Wonder of Play!"
          </h3>
          <p className="text-pink-300 md:text-justify my-5">
            Discover a wide range of high-quality toys, games, and educational
            playthings that will delight and inspire children of all ages.
          </p>
          <PrimaryButton
            text={"Learn More"}
            style={"md:w-1/2 md:mx-0 mx-auto text-black"}
          />
        </div>
      </div>
    </div>
  );
}
