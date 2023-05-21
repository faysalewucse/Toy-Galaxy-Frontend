import { ImFacebook2, ImWhatsapp, ImTwitter } from "react-icons/im";
import { Link } from "react-router-dom";
import brand from "../assets/brand.png";
import { useAuth } from "../contexts/AuthContext";

export default function Footer() {
  const { currentUser } = useAuth();
  return (
    <footer className="bg-slate-900 text-white p-5 md:p-24 md:text-left text-center">
      <div className="md:flex gap-10 max-w-7xl mx-auto">
        <div className="basis-1/2 md:text-justify text-center">
          <img
            onClick={() => navigate("/")}
            className="w-1/3 mx-auto md:mx-0 md:w-1/3 cursor-pointer"
            src={brand}
            alt="brand"
          />
          <p className="text-secondary2 my-5">
            Explore our collection and find the perfect companions for endless
            fun and memorable adventures. Shop now and unlock a world of
            limitless possibilities!
          </p>
          <div className="flex items-center justify-center md:justify-start text-2xl gap-3 cursor-pointer">
            <ImFacebook2 />
            <ImWhatsapp />
            <ImTwitter />
          </div>
        </div>
        <div className="basis-1/4 mt-5 md:mt-0">
          <h1 className="font-bold text-2xl font-display mb-2 md:mb-8">
            Usefull Link
          </h1>
          <ul className="flex flex-col gap-3">
            <Link className="hover:text-secondary" to="/">
              Home
            </Link>
            <Link className="hover:text-secondary" to="/blog">
              Blog
            </Link>
            <Link className="hover:text-secondary" to="/alltoys">
              All Toys
            </Link>
            {currentUser && (
              <Link className="hover:text-secondary" to="/mytoys">
                My Toys
              </Link>
            )}
            {currentUser && (
              <Link className="hover:text-secondary" to="/addtoy">
                Add Toy
              </Link>
            )}
          </ul>
        </div>
        <div className="basis-1/3 mt-5 md:mt-0">
          <h1 className="font-bold text-2xl font-display mb-8">Contact Now</h1>
          <p className="text-secondary">
            555 4th 5t NW, Washington DC 20530, United States
          </p>
          <p className="mt-5">+88 01750 000 000</p>
          <p className="text-secondary">+88 01750 000 000</p>
          <p className="mt-5">faysal.ewucse@gmail.com</p>
          <p className="text-secondary">faysal65438@gmail.com</p>
        </div>
        <div className="grow mt-5 md:mt-0">
          <h1 className="font-bold text-2xl font-display mb-8">Subscribe</h1>
          <p className="my-5">
            Subscribe for our latest & Articles. We Won’t Give You Spam Mails
          </p>
          <form>
            <input
              className="w-full border-0 rounded py-2 px-4 focus:outline-none font-bold"
              type="text"
              placeholder="Email Address"
            />

            <input
              className="bg-secondary hover:bg-yellow-400 transition-all duration-300 text-black py-2 px-6 rounded mt-5"
              type="submit"
              value="Send"
            />
          </form>
        </div>
      </div>
      <hr className="border border-gray-800 my-5" />
      <div className="flex justify-between">
        <h1 className="text-secondary">
          &copy; 2023 ToyGalaxy. All Rights Reserved
        </h1>
        <h1 className="text-secondary">
          Powered by <b>ToyGalaxy</b>
        </h1>
      </div>
    </footer>
  );
}
