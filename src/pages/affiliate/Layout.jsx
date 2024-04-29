import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo1.png";
import { AiOutlineEye } from "react-icons/ai";

export default function Layout({ children }) {
  const links = [
    { path: "/a", text: "Overview", icon: <AiOutlineEye /> },
    { path: "/a/products", text: "Products", icon: <AiOutlineEye /> },
    { path: "/a/links", text: "Links", icon: <AiOutlineEye /> },
    { path: "/a/finance", text: "Finance", icon: <AiOutlineEye /> },
    { path: "/a/account", text: "Account", icon: <AiOutlineEye /> },
  ];

  return (
    <>
      <div className="flex items-start bg-light-grey-clr min-h-screen">
        <aside className="hidden md:block md:basis-1/4 lg:basis-1/6 bg-white h-screen">
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
            <h3 className="text-2xl font-semibold">Overview</h3>
            <div className="flex items-center gap-3">
              <div className="avatar">
                <div className="w-10 md:w-12 rounded-full">
                  <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
              <span className="hidden md:block">
                <p className="text-sm font-semibold uppercase">
                  ALVAN MARGERINE
                </p>
                <p className="text-sm ">Affiliate Marketer</p>
              </span>
            </div>
          </nav>
          <main className="px-[4vw] md:px-3 xl:pr-[4vw]">{children}</main>
        </div>
      </div>
    </>
  );
}
