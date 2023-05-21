import babyImage from "../../assets/baby.png";
import star1 from "../../assets/star_1.png";
import star2 from "../../assets/star_2.png";
import star3 from "../../assets/star_3.png";
import star4 from "../../assets/star_4.png";
import star5 from "../../assets/star_5.png";
import star6 from "../../assets/star_6.png";
import PrimaryButton from "../../components/PrimaryButton";

export default function Banner() {
  return (
    <div className="bg-primary relative">
      <div className="max-w-screen-2xl mx-auto p-10 md:p-16 flex flex-col md:flex-row-reverse items-center">
        <img
          className="hidden md:block absolute top-40 left-40 animate-spin w-12 h-12"
          src={star2}
          alt="star2"
        />
        <img
          className="hidden md:block absolute bottom-40 left-80 w-12 h-12"
          src={star3}
          alt="star3"
        />
        <img
          className="hidden md:block absolute top-10 left-1/2 w-12 h-12"
          src={star1}
          alt="star1"
        />
        <img
          className="hidden md:block absolute bottom-40 animate-spin right-1/2 w-12 h-12"
          src={star4}
          alt="star4"
        />
        <img
          className="hidden md:block absolute top-40 animate-spin right-10 w-12 h-12"
          src={star5}
          alt="star5"
        />
        <img
          className="hidden md:block absolute bottom-40 right-24 w-12 h-12"
          src={star6}
          alt="star6"
        />
        <img
          className="md:ml-auto md:w-1/2 md:mx-0 mx-auto mb-10 md:mb-0 z-10"
          src={babyImage}
          alt="baby"
        />
        <div className="md:w-1/2 text-white z-10 text-center md:text-left">
          <span className="text-4xl md:text-6xl text-white">Welcome to</span>
          <h1 className="bg-clip-text text-transparent bg-gradient-to-l from-pink-300 to-pink-500 font-bold text-5xl md:text-8xl text-pink-400">
            ToyGalaxy
          </h1>
          <h3 className="my-5 text-xl md:text-3xl">
            Explore the Wonder of Play!
          </h3>
          <p className="text-pink-300 md:text-justify my-5">
            Discover a wide range of high-quality toys, games, and educational
            playthings that will delight and inspire children of all ages.
          </p>
          <PrimaryButton
            text={"Learn More"}
            style={"md:w-1/3 py-3 md:mx-0 mx-auto text-black"}
          />
        </div>
      </div>
    </div>
  );
}
