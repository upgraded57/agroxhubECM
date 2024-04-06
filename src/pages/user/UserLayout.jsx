import "./user.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { MdFilterList } from "react-icons/md";
import { Link, NavLink, useLocation } from "react-router-dom";

export default function UserLayout({ children }) {
  const location = useLocation();

  const resolveLocation = () => {
    if (location.pathname.includes("account")) return "My Account";
    if (location.pathname.includes("orders")) return "Orders";
    if (location.pathname.includes("saved")) return "Saved Items";
    if (location.pathname.includes("recent")) return "Recent Items";
    if (location.pathname.includes("payment")) return "Payment Methods";
    if (location.pathname.includes("notifications")) return "Notifications";
    if (location.pathname.includes("help")) return "Help Center";
    if (location.pathname.includes("review")) return "Review / Suggestion";
    if (location.pathname.includes("report")) return "Report a Problem";
  };
  const currentPage = resolveLocation();

  return (
    <>
      <Navbar />
      {/* Mobile Nav */}
      <div className="flex justify-between items-center p-4 bg-light-grey-clr md:hidden">
        <h3 className="text-lg font-semibold">{currentPage}</h3>

        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="m-1">
            <MdFilterList className="text-2xl" />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/user/account">My Account</Link>
            </li>
            <li>
              <Link to="/user/orders">Orders</Link>
            </li>
            <li>
              <Link to="/user/saved">Saved Items</Link>
            </li>
            <li>
              <Link to="/user/recent">Recent Items</Link>
            </li>
            <li>
              <Link to="/user/payment">Payment Methods</Link>
            </li>
            <li>
              <Link to="/user/notifications">Notifications</Link>
            </li>
            <li>
              <Link to="/user/help">Help Center</Link>
            </li>
            <li>
              <Link to="/user/review">Review / Suggestion</Link>
            </li>
            <li>
              <Link to="/user/report">Report a Problem</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="contEl md:mt-12">
        <div className="flex gap-4 items-start">
          {/* Large screen nav */}
          <div className="nav-lg basis-1/4 hidden md:block bg-light-grey-clr rounded-lg w-full overflow-hidden">
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

          {/* Content */}
          <div className="basis-full md:basis-3/4 md:border md:rounded-lg md:px-4 md:py-2">
            {children}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
