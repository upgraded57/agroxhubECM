import React, { lazy, Suspense } from "react";
import Loader from "../components/loader/Loader";
import UserLayout from "../pages/user/UserLayout";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";

const Home = lazy(() => import("./../pages/home/Home"));
const Products = lazy(() => import("../pages/products/Products"));
const SearchPage = lazy(() => import("../pages/search/Search"));
const Product = lazy(() => import("../pages/product/Product"));
const Account = lazy(() => import("./../pages/user/Account"));
const Orders = lazy(() => import("../pages/user/Orders"));
const Saved = lazy(() => import("../pages/user/Saved"));
const Recent = lazy(() => import("./../pages/user/Recent"));
const Payment = lazy(() => import("../pages/user/Payment"));
const Notifications = lazy(() => import("../pages/user/Notifications"));
const Help = lazy(() => import("../pages/user/Help"));
const Report = lazy(() => import("../pages/user/Report"));
const Review = lazy(() => import("./../pages/user/Review"));
const Analytics = lazy(() => import("../pages/user/Analytics"));
const SellerProducts = lazy(() => import("../pages/user/Products"));
const Finance = lazy(() => import("../pages/user/Finance"));
const Followers = lazy(() => import("../pages/user/Followers"));
const Promotions = lazy(() => import("../pages/user/Promotions"));
const EditProfile = lazy(() => import("../pages/user/EditProfile"));
const ProductAnalytics = lazy(() => import("../pages/user/ProductAnalytics"));
const CreateProduct = lazy(() => import("../pages/user/CreateProduct"));
const Cart = lazy(() => import("../pages/cart/Cart"));
const ProductReview = lazy(() => import("../pages/user/ProductReview"));
const PromoteProduct = lazy(() => import("../pages/user/PromoteProduct"));
const Seller = lazy(() => import("../pages/seller/Seller"));
const AddPaymentCard = lazy(() => import("../pages/user/AddPaymentCard"));
const About = lazy(() => import("../pages/about/About"));
const Layout = lazy(() => import("./../pages/affiliate/Layout"));
const Auth = lazy(() => import("../pages/auth/Auth"));
const AffiliateFinance = lazy(() =>
  import("./../pages/affiliate/Finance_Affiliate")
);
const AffiliateAccount = lazy(() =>
  import("./../pages/affiliate/Account_Affiliate")
);
const AffiliateLinks = lazy(() =>
  import("./../pages/affiliate/Links_Affiliate")
);
const AffiliateProducts = lazy(() =>
  import("./../pages/affiliate/Products_Affiliate")
);
const AffiliateOverView = lazy(() =>
  import("./../pages/affiliate/Overview_Affiliate")
);
import RecentComponent from "./../components/recent/Recent";
import Footer from "../components/footer/Footer";

export const routes = [
  {
    path: "/auth",
    element: (
      <Suspense fallback={<Loader />}>
        <Auth />
      </Suspense>
    ),
  },

  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
        <RecentComponent />
        <Footer />
      </>
    ),
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "products",
        element: <Products />,
      },

      {
        path: "about",
        element: <About />,
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
        path: "cart",
        element: <Cart />,
      },

      {
        path: "seller/:seller_id",
        element: <Seller />,
      },
    ],
  },

  {
    path: "/user",
    element: (
      <UserLayout>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </UserLayout>
    ),
    action: ({ request }) => {
      // Call API to edit form here
      return null;
    },
    children: [
      {
        path: "account",
        element: <Account />,
      },
      {
        path: "account/edit",
        element: <EditProfile />,
      },

      {
        path: "orders",
        element: <Orders />,
      },

      {
        path: "saved",
        element: <Saved />,
      },

      {
        path: "recent",
        element: <Recent />,
      },

      {
        path: "payment",
        element: <Payment />,
        action: () => {
          // call API to add new payment card here
          return null;
        },
      },
      {
        path: "payment/new",
        element: <AddPaymentCard />,
      },

      {
        path: "notifications",
        element: <Notifications />,
      },

      {
        path: "help",
        element: <Help />,
      },

      {
        path: "report",
        element: <Report />,
      },

      {
        path: "review",
        element: <Review />,
      },

      {
        path: "orders/product/:product_id/review",
        element: <ProductReview />,
      },
    ],
  },

  {
    path: "seller",
    element: (
      <Suspense fallback={<Loader />}>
        <UserLayout>
          <Outlet />
        </UserLayout>
      </Suspense>
    ),
    children: [
      {
        path: "analytics",
        element: <Analytics />,
      },
      {
        path: "products",
        element: <SellerProducts />,
      },

      {
        path: "products/create",
        element: <CreateProduct />,
      },

      {
        path: "finance",
        element: <Finance />,
      },

      {
        path: "followers",
        element: <Followers />,
      },

      {
        path: "promotions",
        element: <Promotions />,
      },

      {
        path: "products/:product_id/analytics",
        element: <ProductAnalytics />,
      },

      {
        path: "products/:product_id/promote",
        element: <PromoteProduct />,
      },
    ],
  },

  // Affiliate
  {
    path: "a",
    element: (
      <Suspense>
        <Layout>
          <Outlet />
        </Layout>
      </Suspense>
    ),
    children: [
      {
        path: "",
        element: <AffiliateOverView />,
      },
      {
        path: "products",
        element: <AffiliateProducts />,
      },
      {
        path: "links",
        element: <AffiliateLinks />,
      },
      {
        path: "finance",
        element: <AffiliateFinance />,
      },
      {
        path: "a/account",
        element: <AffiliateAccount />,
      },
    ],
  },
];
