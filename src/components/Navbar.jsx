import { useState } from "react";
import logo from "../assets/star_1.png";
import { SlClose, SlMenu } from "react-icons/sl";
import { NavLink } from "react-router-dom";
import PrimaryButton from "./PrimaryButton";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "All Toys",
      path: "/alltoys",
    },
    {
      name: "My Toys",
      path: "/mytoys",
    },
    {
      name: "Add A Toy",
      path: "/addtoy",
    },
    {
      name: "Blogs",
      path: "/blogs",
    },
  ];

  return (
    <div className="">
      <div className="max-w-7xl mx-auto flex text-white items-center p-5 md:p-10 justify-between">
        <img className="w-12" src={logo} alt="Brand" />
        {/* <SearchField style={"hidden md:block"} /> */}
        <nav
          className={`flex flex-col md:flex-row md:relative bg-primary2 bg-opacity-90 md:bg-transparent absolute ${
            open ? "top-0" : "-top-full"
          } right-0 md:w-fit w-full gap-5 transition-all duration-300 md:h-fit h-[60vh] md:gap-10 md:p-0 rounded-b-xl text-black md:text-white p-20 text-lg items-center`}
        >
          {navItems.map((item, index) => (
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-secondary"
                  : "hover:text-secondary font-normal transition-all duration-300"
              }
              key={index}
              to={item.path}
            >
              {item.name}
            </NavLink>
          ))}
          <PrimaryButton
            text={"LOGIN"}
            style={"text-lg"}
            onClickHandler={() => navigate("/login")}
          />
        </nav>
        <div onClick={() => setOpen(!open)} className="md:hidden text-2xl">
          {open ? (
            <SlClose className="text-black absolute right-5 top-5 text-3xl" />
          ) : (
            <SlMenu className="text-teal-300 text-4xl" />
          )}
        </div>
      </div>
    </div>
  );
}

// **Website logo, Website name, Home, All Toys, My Toys, Add A Toy, Blogs,** and **User profile picture**.
