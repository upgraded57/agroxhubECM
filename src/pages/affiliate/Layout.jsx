import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/images/logo1.png";
import { AiOutlineEye, AiOutlineUser } from "react-icons/ai";
import { GoDatabase } from "react-icons/go";
import { IoIosLink } from "react-icons/io";
import { PiCurrencyNgn } from "react-icons/pi";
import { HiBars3 } from "react-icons/hi2";

export default function Layout({ children }) {
  const links = [
    { path: "/a", text: "Overview", icon: <AiOutlineEye /> },
    { path: "/a/products", text: "All Products", icon: <GoDatabase /> },
    { path: "/a/links", text: "Links", icon: <IoIosLink /> },
    { path: "/a/finance", text: "Finance", icon: <PiCurrencyNgn /> },
    { path: "/a/account", text: "Account", icon: <AiOutlineUser /> },
  ];

  const location = useLocation();

  const resolvePathName = () => {
    let linkName;
    links.map((link) => {
      if (link.path === location.pathname) return (linkName = link.text);
    });
    return linkName;
  };

  const pathName = resolvePathName();

  return (
    <>
      <div className="flex items-start bg-light-grey-clr min-h-screen">
        <aside className="hidden sticky top-0 md:block md:basis-1/4 lg:basis-1/6 bg-white h-screen">
          <div
            to="/"
            className="w-[140px] h-[70px] flex items-center justify-center mx-auto"
          >
            <Link to="/a">
              <img src={logo} alt="Logo" />
            </Link>
          </div>
          <ul className="p-6">
            {links.map((link) => (
              <li className="w-full mb-4" key={link.path}>
                <NavLink
                  to={link.path}
                  end
                  className="afflilate-links w-full nav-btn btn btn-ghost font-medium justify-start"
                >
                  {link.icon}
                  <p className="text-sm">{link.text}</p>
                </NavLink>
              </li>
            ))}
          </ul>
        </aside>
        <div className="basis-1/1 w-full md:basis-3/4 lg:basis-5/6 overflow-hidden">
          <nav className="h-[50px] md:h-[70px] flex items-center justify-between w-full px-[4vw] md:px-3 bg-white">
            <Link to="/a" className="md:hidden">
              <img src={logo} alt="Logo" className="h-[30px]" />
            </Link>
            <h3 className="hidden md:block text-2xl font-semibold">
              {pathName}
            </h3>
            <div className="flex items-center gap-3">
              <div className="avatar">
                <div className="w-10 md:w-12 rounded-full">
                  <img src="https://images.unsplash.com/photo-1569880153113-76e33fc52d5f?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFybWVyfGVufDB8fDB8fHww" />
                </div>
              </div>
              <span className="hidden md:block">
                <p className="text-sm font-semibold uppercase">
                  ALVAN MARGERINE
                </p>
                <p className="text-sm ">Affiliate Marketer</p>
              </span>

              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost p-1 h-max min-h-max md:hidden"
                >
                  <HiBars3 className="text-2xl" />
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  {links.map((link) => (
                    <li className="w-full my-1" key={link.path}>
                      <NavLink
                        to={link.path}
                        end
                        className="flex items-center gap-2"
                      >
                        {link.icon}
                        <p className="text-sm">{link.text}</p>
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </nav>
          <main className="px-[4vw] md:px-3">
            <h3 className="md:hidden text-2xl font-semibold mt-[4vw]">
              {pathName}
            </h3>
            {children}
          </main>
        </div>
      </div>
    </>
  );
}
