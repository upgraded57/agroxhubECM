import React, { lazy, Suspense } from "react";
import Loader from "../components/loader/Loader";
import UserLayout from "../pages/user/UserLayout";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";

const Home = lazy(() => import("./../pages/home/Home"));
const Products = lazy(() => import("../pages/products/Products"));
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
const SellerProducts = lazy(() => import("../pages/user/SellerProducts"));
const Finance = lazy(() => import("../pages/user/Finance"));
const Followers = lazy(() => import("../pages/user/Followers"));
const Promotions = lazy(() => import("../pages/user/Promotions"));
const EditProfile = lazy(() => import("../pages/user/EditProfile"));
const EditProduct = lazy(() => import("../pages/user/EditProduct"));
const ProductAnalytics = lazy(() => import("../pages/user/ProductAnalytics"));
const CreateProduct = lazy(() => import("../pages/user/CreateProduct"));
const Cart = lazy(() => import("../pages/cart/Cart"));
const ProductReview = lazy(() => import("../pages/user/ProductReview"));
const PromoteProduct = lazy(() => import("../pages/user/PromoteProduct"));
const SellerPage = lazy(() => import("../pages/seller/SellerPage"));
const SellerProductsListing = lazy(() =>
  import("../pages/sellerProducts/SellerProductsListing")
);
const AddPaymentCard = lazy(() => import("../pages/user/AddPaymentCard"));
const About = lazy(() => import("../pages/about/About"));
const Layout = lazy(() => import("./../pages/affiliate/Layout"));
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
import AuthLayout from "../pages/auth/AuthLayout";
import { UserProvider } from "./userContext";
import NotFound from "../components/notFound/NotFound";
import ResetScroll from "../components/resetScroll/ResetScroll";
import SellerContext from "./sellerContext";
const OrderSummary = lazy(() => import("../pages/orderSummary/OrderSummary"));
const Login = lazy(() => import("./../pages/auth/Login"));
const Signup = lazy(() => import("./../pages/auth/Signup"));
const VerifyOtp = lazy(() => import("./../pages/auth/VerifyOtp"));

export const routes = [
  // Auth
  {
    path: "/auth",
    element: (
      <AuthLayout>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </AuthLayout>
    ),
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "verify-otp",
        element: <VerifyOtp />,
      },
    ],
  },

  // Main
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Suspense fallback={<Loader />}>
          <ResetScroll />
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
        path: "products/:slug",
        element: <Product />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "checkout",
        element: <OrderSummary />,
      },
      {
        path: "seller/:sellerId",
        element: <SellerPage />,
      },
      {
        path: "seller/:sellerId/products",
        element: <SellerProductsListing />,
      },
    ],
    errorElement: <div>Something has gone wrong!</div>,
  },

  // User
  {
    path: "/user",
    element: (
      <UserProvider>
        <UserLayout>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </UserLayout>
      </UserProvider>
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

  // Seller
  {
    path: "seller",
    element: (
      <Suspense fallback={<Loader />}>
        <UserProvider>
          <SellerContext>
            <UserLayout>
              <Outlet />
            </UserLayout>
          </SellerContext>
        </UserProvider>
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
        path: ":sellerId/followers",
        element: <Followers />,
      },

      {
        path: "promotions",
        element: <Promotions />,
      },

      {
        path: "products/:slug/analytics",
        element: <ProductAnalytics />,
      },

      {
        path: "products/:slug/edit",
        element: <EditProduct />,
      },

      {
        path: "products/:slug/promote",
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

  {
    path: "*",
    element: <NotFound />,
  },
];
