import "./user.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { MdFilterList } from "react-icons/md";
import { Link, NavLink, useLocation } from "react-router-dom";
import { resolveLocation } from "../../utils/ResolveLocation";

export default function UserLayout({ children }) {
  const location = useLocation();

  const currentPage = resolveLocation(location);

  const userLinks = [
    {
      path: "/user/account",
      title: "My Account",
    },
    {
      path: "/user/orders",
      title: "Orders",
    },
    {
      path: "/user/saved",
      title: "Saved Items",
    },
    {
      path: "/user/recent",
      title: "Recent Items",
    },
    {
      path: "/user/payment",
      title: "Payment Methods",
    },
    {
      path: "/user/notifications",
      title: "Notifications",
    },
    {
      path: "/user/help",
      title: "Help Center",
    },
    {
      path: "/user/review",
      title: "Review / Suggestion",
    },
  ];

  const sellerLinks = [
    {
      path: "/seller/analytics",
      title: "Analytics",
    },
    {
      path: "/seller/products",
      title: "Products",
    },
    {
      path: "/seller/finance",
      title: "Finance",
    },
    {
      path: "/seller/followers",
      title: "Followers",
    },
    {
      path: "/seller/promotions",
      title: "Promotions",
    },
  ];

  return (
    <>
      <Navbar />
      {/* Mobile Nav */}
      <div className="flex justify-between items-center p-4 bg-light-grey-clr md:hidden">
        <h3 className="text-lg font-semibold uppercase">{currentPage}</h3>

        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="m-1">
            <MdFilterList className="text-2xl" />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            {userLinks.map((link, idx) => (
              <li>
                <NavLink key={idx} to={link.path}>
                  {link.title}
                </NavLink>
              </li>
            ))}
            <p className="text-sm font-semibold uppercase mt-5 mb-2 border-b">
              sellers
            </p>
            {sellerLinks.map((link, idx) => (
              <li>
                <NavLink key={idx} to={link.path}>
                  {link.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="contEl md:mt-12">
        <div className="flex gap-4 items-start">
          {/* Large screen nav */}
          <div className="nav-lg basis-1/4 hidden md:block uppercase text-sm">
            <div className="bg-light-grey-clr rounded-lg w-full overflow-hidden mb-5">
              <NavLink
                to="/user/account"
                className="block py-2 px-4 border-b hover:bg-gray-200"
              >
                My Account
              </NavLink>
              <NavLink
                to="/user/orders"
                className="block py-2 px-4 border-b hover:bg-gray-200"
              >
                Orders
              </NavLink>
              <NavLink
                to="/user/saved"
                className="block py-2 px-4 border-b hover:bg-gray-200"
              >
                Saved Items
              </NavLink>
              <NavLink
                to="/user/recent"
                className="block py-2 px-4 border-b hover:bg-gray-200"
              >
                Recent Items
              </NavLink>
              <NavLink
                to="/user/payment"
                className="block py-2 px-4 border-b hover:bg-gray-200"
              >
                Payment Methods
              </NavLink>
              <NavLink
                to="/user/notifications"
                className="block py-2 px-4 border-b hover:bg-gray-200"
              >
                Notifications
              </NavLink>
              <NavLink
                to="/user/help"
                className="block py-2 px-4 border-b hover:bg-gray-200"
              >
                Help Center
              </NavLink>
              <NavLink
                to="/user/review"
                className="block py-2 px-4 border-b hover:bg-gray-200"
              >
                Reviews / Suggestion
              </NavLink>
              <NavLink
                to="/user/report"
                className="block py-2 px-4 hover:bg-gray-200"
              >
                Report a Problem
              </NavLink>
            </div>

            <p className="text-sm font-bold uppercase mb-2">sellers</p>
            <div className="bg-light-grey-clr rounded-lg w-full overflow-hidden">
              <NavLink
                to="/seller/analytics"
                className="block py-2 px-4 border-b hover:bg-gray-200"
              >
                Analytics
              </NavLink>
              <NavLink
                to="/seller/products"
                className="block py-2 px-4 border-b hover:bg-gray-200"
              >
                Products
              </NavLink>
              <NavLink
                to="/seller/finance"
                className="block py-2 px-4 border-b hover:bg-gray-200"
              >
                Finance
              </NavLink>
              <NavLink
                to="/seller/followers"
                className="block py-2 px-4 border-b hover:bg-gray-200"
              >
                Followers
              </NavLink>
              <NavLink
                to="/seller/promotions"
                className="block py-2 px-4 hover:bg-gray-200"
              >
                Promotions
              </NavLink>
            </div>
          </div>

          {/* Content */}
          <div className="basis-full md:basis-3/4 md:border md:rounded-lg md:px-4 md:py-2 overflow-x-hidden">
            {children}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
