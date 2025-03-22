import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo1.png";
import "./navbar.css";

import { IoCartOutline, IoClose } from "react-icons/io5";
import { AiOutlineUser, AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";
import { HiBars3 } from "react-icons/hi2";
import { useContext, useEffect, useState } from "react";
import { LiaDoorOpenSolid } from "react-icons/lia";
import { useGetUser } from "../../api/user";
import noAvatar from "../../assets/images/noAvatar.jpeg";
import { CartContext } from "../../utils/cartContext";
import toast from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";

export default function Navbar() {
  const queryClient = useQueryClient();
  const [navOpen, setNavOpen] = useState(false);
  const userId = localStorage.getItem("userId");
  const { isFetching, data: user } = useGetUser(userId);

  const { cart, refetch } = useContext(CartContext);

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
      path: "/be-a-seller",
      title: "Become a Seller",
    },
  ];

  const handleLogout = () => {
    queryClient.resetQueries();
    localStorage.removeItem("userId");
    localStorage.removeItem("token");
    toast.success("User logged out successfully");
  };

  useEffect(() => {
    refetch();
  }, []);

  return (
    <>
      <header className="w-full h-[50px] px-[4vw] lg:h-[70px] flex items-center shadow-md fixed bg-white z-50">
        <div className="contEl flex justify-between items-center w-full">
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
              <div className="relative">
                <IoCartOutline className="text-xl" />
                {cart?.length > 0 && (
                  <div className="w-3 h-3 bg-dark-green-clr flex items-center justify-center rounded-full overflow-hidden absolute text-white -top-1 -right-1 border-[1px] border-white">
                    <small className="text-[10px]">{cart?.length}</small>
                  </div>
                )}
              </div>
            </NavLink>

            {isFetching ? (
              <div className="flex items-center gap-2">
                <span className="loading loading-dots loading-md" />
                <AiOutlineUser className="text-xl" />
              </div>
            ) : user ? (
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button">
                  <div className="flex items-center gap-3">
                    <p className="hidden md:block">{user.name.split(" ")[0]}</p>
                    <div className="w-5 h-5 rounded-full overflow-hidden">
                      <img
                        src={user.avatar || noAvatar}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-base-100 rounded-box z-[1] w-max p-2 shadow justify-start"
                >
                  <li className="flex items-center gap-3 w-full">
                    <Link to="/user/account" className="w-full">
                      <div className="w-5 h-5 rounded-full overflow-hidden">
                        <img
                          src={user.avatar || noAvatar}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      View Profile
                    </Link>
                  </li>
                  <li className="flex items-center gap-3 w-full">
                    <Link to="#" className="w-full" onClick={handleLogout}>
                      <LiaDoorOpenSolid className="text-xl" />
                      Logout
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/user/account" className="flex items-center gap-3">
                <p className="hidden md:block">User</p>
                <AiOutlineUser className="text-xl" />
              </Link>
            )}

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
