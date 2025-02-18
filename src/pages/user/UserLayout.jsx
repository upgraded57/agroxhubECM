import "./user.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { useLocation } from "react-router-dom";
import { resolveLocation } from "../../utils/ResolveLocation";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";
import { useContext } from "react";
import { UserContext } from "../../utils/userContext";

export default function UserLayout({ children }) {
  // Check if user exists in store
  const location = useLocation();
  const user = useContext(UserContext).user;

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
      path: `/seller/${user?.id}/followers`,
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
      <MobileNav
        currentPage={currentPage}
        sellerLinks={sellerLinks}
        userLinks={userLinks}
        user={user}
      />
      <div className="contEl md:mt-12">
        <div className="flex gap-4 items-start">
          <DesktopNav
            userLinks={userLinks}
            sellerLinks={sellerLinks}
            user={user}
          />
          <div className="basis-full md:basis-3/4 md:border md:rounded-lg md:px-4 md:py-2 overflow-x-hidden">
            {children}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
