import Product from "../pages/product/Product";
import Products from "../pages/products/Products";
import SearchPage from "../pages/search/Search";
import Home from "./../pages/home/Home";
import Account from "./../pages/user/Account";
import UserLayout from "../pages/user/UserLayout";
import Orders from "../pages/user/Orders";
import Saved from "../pages/user/Saved";
import Recent from "./../pages/user/Recent";
import Payment from "../pages/user/Payment";
import Notifications from "../pages/user/Notifications";
import Help from "../pages/user/Help";
import Report from "../pages/user/Report";
import Review from "./../pages/user/Review";

export const routes = [
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "products",
    element: <Products />,
  },

  {
    path: "products/:product_id",
    element: <Product />,
  },

  {
    path: "search",
    element: <SearchPage />,
    loader: async ({ request }) => {
      let url = new URL(request.url);
      let searchTerm = url.searchParams.get("q");
      return searchTerm;
    },
  },

  {
    path: "user/account",
    element: (
      <UserLayout>
        <Account />
      </UserLayout>
    ),
  },

  {
    path: "user/orders",
    element: (
      <UserLayout>
        <Orders />
      </UserLayout>
    ),
  },

  {
    path: "user/saved",
    element: (
      <UserLayout>
        <Saved />
      </UserLayout>
    ),
  },

  {
    path: "user/recent",
    element: (
      <UserLayout>
        <Recent />
      </UserLayout>
    ),
  },

  {
    path: "user/payment",
    element: (
      <UserLayout>
        <Payment />
      </UserLayout>
    ),
  },

  {
    path: "user/notifications",
    element: (
      <UserLayout>
        <Notifications />
      </UserLayout>
    ),
  },

  {
    path: "user/help",
    element: (
      <UserLayout>
        <Help />
      </UserLayout>
    ),
  },

  {
    path: "user/report",
    element: (
      <UserLayout>
        <Report />
      </UserLayout>
    ),
  },
  {
    path: "user/review",
    element: (
      <UserLayout>
        <Review />
      </UserLayout>
    ),
  },
];
