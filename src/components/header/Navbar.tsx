import React from "react";
import Logo from "../../assets/rebelmma-logo.png";

const Navbar = () => {
  return (
    <nav className="bg-transparent flex items-center justify-between px-10 py-2 z-50 w-full fixed">
      <div>
        <a href="/">
          <img className="w-[200px]" src={Logo} alt="RebelMMA Logo" />
        </a>
      </div>

      <ul className="flex gap-10 text-white">
        <li>
          <a className="hover:text-seaserpent duration-300" href="/programs">
            PROGRAMS
          </a>
        </li>
        <li>
          <a className="hover:text-seaserpent duration-300" href="/schedule">
            SCHEDULE
          </a>
        </li>
        <li>
          <a className="hover:text-seaserpent duration-300" href="/about">
            ABOUT
          </a>
        </li>
        <li>
          <a
            className="bg-seaserpent px-3 py-2 text-black rounded-xl brightness-75 hover:brightness-100 duration-300"
            href="/signup"
          >
            SIGN UP
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
