import { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const Link = (
    <>
      <li className=" mb-3 lg:mb-0">
        <NavLink className="text-lg hover:underline text-dark-1" to="/">
          Home
        </NavLink>
      </li>
      <li className=" mb-3 lg:mb-0">
        <NavLink className="text-lg hover:underline text-dark-1" to="/donation">
          Donation
        </NavLink>
      </li>
      <li className=" mb-3 lg:mb-0">
        <NavLink
          className="text-lg hover:underline text-dark-1"
          to="/statistics"
        >
          Statistics
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-transparent absolute top-0 left-0 w-full">
      <nav className="navbar max-w-[1320px] mx-auto pt-5 px-4">
        <div className="navbar-start">
          <a href="/">
            <img
              className="w-52 md:w-[250px]"
              src="https://i.ibb.co/517dxQV/Logo.png"
              alt=""
            />
          </a>
        </div>
        <div className="navbar-end">
          <ul className="hidden lg:flex gap-5">{Link}</ul>
          <div className="relative">
            <div className="w-16">
              {!open ? (
                <RiMenu3Fill
                  onClick={() => setOpen(!open)}
                  className="block lg:hidden btn btn-ghost btn-circle p-2 ml-4"
                />
              ) : (
                <AiOutlineClose
                  onClick={() => setOpen(!open)}
                  className="block lg:hidden btn btn-ghost btn-circle p-2 ml-3"
                />
              )}
            </div>
            <ul
              className={`lg:hidden absolute right-1 dropdown-content mt-3 z-[1] p-5 bg-base-100 rounded-box w-52 duration-700 shadow-md ${
                open ? "visible opacity-100" : "invisible opacity-0"
              }`}
            >
              {Link}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
