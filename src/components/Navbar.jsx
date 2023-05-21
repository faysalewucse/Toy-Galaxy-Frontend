import { useState } from "react";
import logo from "../assets/brand.png";
import { SlClose, SlMenu } from "react-icons/sl";
import { TbTriangleFilled } from "react-icons/tb";
import { NavLink, useNavigate } from "react-router-dom";
import PrimaryButton from "./PrimaryButton";
import { useAuth } from "../contexts/AuthContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const navItems = [
    {
      name: "HOME",
      path: "/",
      render: true,
    },
    {
      name: "ALL TOYS",
      path: "/alltoys",
      render: true,
    },
    {
      name: "MY TOYS",
      path: "/mytoys",
      render: currentUser ? true : false,
    },
    {
      name: "ADD A TOY",
      path: "/addtoy",
      render: currentUser ? true : false,
    },
    {
      name: "BLOGS",
      path: "/blogs",
      render: true,
    },
  ];

  return (
    <div className="bg-primary p-5 md:p-0">
      <div className="max-w-screen-2xl mx-auto flex text-white items-center justify-between">
        <img className="w-30 h-24" src={logo} alt="Brand" />
        {/* <SearchField style={"hidden md:block"} /> */}
        <nav
          className={`flex flex-col md:flex-row md:relative bg-blue-900 bg-opacity-95 md:bg-transparent absolute ${
            open ? "top-0" : "-top-full"
          } right-0 md:w-fit w-full gap-5 transition-all duration-300 md:h-fit ${
            currentUser ? "h-[70vh]" : "h-[60vh]"
          } md:gap-10 md:py-10 rounded-b-xl md:text-white p-20 text-lg items-center z-20`}
        >
          {navItems.map((item, index) => {
            return (
              item.render && (
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
              )
            );
          })}
          {currentUser && (
            <div className="group">
              <img
                onClick={() => navigate("/profile")}
                className="h-12 w-12 rounded-full md:ml-10 border-2 border-secondary object-cover"
                src={currentUser?.photoURL}
                alt="pro-pic"
              />
              <div className="hidden group-hover:block group-hover:absolute md:right-56 md:top-24">
                <p className="bg-secondary text-primary px-4 py-1 rounded">
                  {currentUser.displayName}
                </p>
              </div>
            </div>
          )}

          {!currentUser ? (
            <PrimaryButton
              onClickHandler={() => navigate("/login")}
              text={"Login"}
              style={"ml-10"}
            />
          ) : (
            <span
              onClick={() => logout()}
              className="md:ml-5 font-bold text-secondary2 border px-3 py-1 hover:border-secondary hover:text-secondary cursor-pointer rounded transition-all duration-300"
            >
              LogOut
            </span>
          )}
        </nav>
        <div onClick={() => setOpen(!open)} className="md:hidden text-2xl">
          {open ? (
            <SlClose className="absolute right-6 top-9 text-3xl z-20" />
          ) : (
            <SlMenu className="text-teal-300 text-4xl -mt-8" />
          )}
        </div>
      </div>
    </div>
  );
}
