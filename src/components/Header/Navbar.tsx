import { useState } from "react";
import logo from "../../assets/rebelmma-logo.png";
import closeMenu from "../../assets/hamburger-menu/close-menu-icon.svg";
import hamburgerMenu from "../../assets/hamburger-menu/menu-icon.svg";

const Navbar = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [navbar, setNavbar] = useState<boolean>(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <nav
      className={`flex items-center justify-between min-[480px]:px-10 px-5 py-2 z-50 w-full fixed duration-300 ${
        navbar ? "bg-black bg-opacity-80" : "bg-transparent"
      }`}
    >
      <div>
        <a href="/">
          <img
            className="min-[480px]:w-[200px] w-[175px]"
            src={logo}
            alt="RebelMMA Logo"
          />
        </a>
      </div>

      <ul className="flex gap-10 text-white max-[800px]:hidden">
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
            className="bg-seaserpent brightness-110 px-5 py-2.5 text-black hover:bg-white duration-500"
            href="/signup"
          >
            SIGN UP
          </a>
        </li>
      </ul>

      {/* Menu */}
      <img
        className={`min-[800px]:hidden w-8 cursor-pointer ${
          toggle ? "hidden" : null
        }`}
        src={hamburgerMenu}
        alt="Mobile menu"
        onClick={() => setToggle((toggle) => !toggle)}
      />

      {/* Menu modal */}
      <div
        className={`fixed right-0 bottom-0 z-40 h-full w-[300px] min-[1150px]:hidden opacity-95 backdrop-blur-md bg-secondary/90 text-lg ${
          toggle ? "flex-col" : "hidden"
        } `}
      >
        <div className="flex justify-end pr-10 pt-8 mb-10">
          <img
            className="w-8 cursor-pointer"
            src={closeMenu}
            alt="close menu"
            onClick={() => {
              setToggle((toggle) => !toggle);
            }}
          />
        </div>

        <ul className="text-white flex flex-col items-center gap-8 mb-16">
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
            <a className="bg-primary px-5 py-2.5 rounded-xl" href="/signup">
              SIGN UP
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
