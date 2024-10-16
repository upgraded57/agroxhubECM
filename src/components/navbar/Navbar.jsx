import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo1.png";
import "./navbar.css";

import { IoCartOutline, IoClose } from "react-icons/io5";
import { AiOutlineUser, AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";
import { HiBars3 } from "react-icons/hi2";
import { useState } from "react";

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  window.onresize = () => {
    if (window.innerWidth >= 900) setNavOpen(false);
  };

  const navLinks = [
    {
      path: "/",
      title: "Home",
    },
    {
      path: "/products",
      title: "Products",
    },
    {
      path: "/about",
      title: "About",
    },
    {
      path: "/contact",
      title: "Contact",
    },
    {
      path: "/seller",
      title: "Become a Seller",
    },
  ];

  return (
    <>
      <header className="w-full h-[50px] px-[4vw] lg:h-[70px] flex items-center shadow-md fixed bg-white z-50">
        <div className="max-w-screen-2xl mx-auto flex justify-between items-center w-full">
          <NavLink to="/" className="md:basis-1/4">
            <img src={logo} alt="logo" className="w-[150px]" />
          </NavLink>

          <nav
            id="headerNav"
            className={navOpen ? "basis-2/4 active" : "basis-2/4"}
          >
            <ul className="flex items-center justify-between text-sm">
              {navLinks.map((navLink, idx) => (
                <li key={idx} onClick={() => setNavOpen(false)}>
                  <NavLink to={navLink.path}>{navLink.title}</NavLink>
                </li>
              ))}
            </ul>

            <div className="flex md:hidden absolute bottom-5 w-[100%] flex-col items-center gap-4 border-t-[1px] pt-4">
              <div>
                <img src={logo} alt="logo" className="w-[150px]" />
              </div>
              <div className="flex items-center gap-4">
                <FaFacebook />
                <FaInstagram />
                <FaLinkedin />
                <AiFillTwitterCircle />
                <FaYoutube />
              </div>
            </div>
          </nav>

          <div className="sidenav flex items-center basis-1/4 justify-end gap-8 text-sm">
            <NavLink
              to="/cart"
              className="btn btn-ghost mx-0 p-0 hover:bg-transparent font-normal"
            >
              <p className="hidden md:block">Cart</p>
              <IoCartOutline className="text-xl" />
            </NavLink>
            <NavLink
              to="/user/account"
              className="btn btn-ghost mx-0 p-0 hover:bg-transparent font-normal"
            >
              <p className="hidden md:block">User</p>
              <AiOutlineUser className="text-xl" />
            </NavLink>

            <label className="swap swap-flip text-xl lg:hidden">
              {/* this hidden checkbox controls the state */}
              <input
                type="checkbox"
                checked={navOpen}
                onChange={() => setNavOpen(!navOpen)}
              />

              {/* hamburger icon */}
              <div className="swap-off">
                <HiBars3 />
              </div>

              {/* close icon */}
              <div className="swap-on">
                <IoClose />
              </div>
            </label>
          </div>
        </div>
      </header>
      <div className="h-[50px] lg:h-[70px]"></div>
    </>
  );
}
