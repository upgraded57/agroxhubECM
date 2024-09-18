import React, { Suspense } from "react";
import Loader from "../components/loader/Loader";

const HomeIndex = React.lazy(() => import("./../pages/home/Index"));
const Home = React.lazy(() => import("./../pages/home/Home"));
const Products = React.lazy(() => import("../pages/products/Products"));
const SearchPage = React.lazy(() => import("../pages/search/Search"));
const Product = React.lazy(() => import("../pages/product/Product"));
const UserIndex = React.lazy(() => import("./../pages/user/Index"));
const Account = React.lazy(() => import("./../pages/user/Account"));
const UserLayout = React.lazy(() => import("../pages/user/UserLayout"));
const Orders = React.lazy(() => import("../pages/user/Orders"));
const Saved = React.lazy(() => import("../pages/user/Saved"));
const Recent = React.lazy(() => import("./../pages/user/Recent"));
const Payment = React.lazy(() => import("../pages/user/Payment"));
const Notifications = React.lazy(() => import("../pages/user/Notifications"));
const Help = React.lazy(() => import("../pages/user/Help"));
const Report = React.lazy(() => import("../pages/user/Report"));
const Review = React.lazy(() => import("./../pages/user/Review"));
const Analytics = React.lazy(() => import("../pages/user/Analytics"));
const SellerProducts = React.lazy(() => import("../pages/user/Products"));
const Finance = React.lazy(() => import("../pages/user/Finance"));
const Followers = React.lazy(() => import("../pages/user/Followers"));
const Promotions = React.lazy(() => import("../pages/user/Promotions"));
const EditProfile = React.lazy(() => import("../pages/user/EditProfile"));
const ProductAnalytics = React.lazy(() =>
  import("../pages/user/ProductAnalytics")
);
const CreateProduct = React.lazy(() => import("../pages/user/CreateProduct"));
const Cart = React.lazy(() => import("../pages/cart/Cart"));
const ProductReview = React.lazy(() => import("../pages/user/ProductReview"));
const PromoteProduct = React.lazy(() => import("../pages/user/PromoteProduct"));
const Seller = React.lazy(() => import("../pages/seller/Seller"));
const AddPaymentCard = React.lazy(() => import("../pages/user/AddPaymentCard"));
const About = React.lazy(() => import("../pages/about/About"));
const Layout = React.lazy(() => import("./../pages/affiliate/Layout"));
const Auth = React.lazy(() => import("../pages/auth/Auth"));
const AffiliateFinance = React.lazy(() =>
  import("./../pages/affiliate/Finance_Affiliate")
);
const AffiliateIndex = React.lazy(() => import("./../pages/affiliate/Index"));
const AffiliateAccount = React.lazy(() =>
  import("./../pages/affiliate/Account_Affiliate")
);
const AffiliateLinks = React.lazy(() =>
  import("./../pages/affiliate/Links_Affiliate")
);
const AffiliateProducts = React.lazy(() =>
  import("./../pages/affiliate/Products_Affiliate")
);
const AffiliateOverView = React.lazy(() =>
  import("./../pages/affiliate/Overview_Affiliate")
);

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
      <Suspense fallback={<Loader />}>
        <HomeIndex />
      </Suspense>
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
    ],
  },

  {
    path: "/user",
    element: (
      <Suspense fallback={<Loader />}>
        <UserLayout>
          <UserIndex />
        </UserLayout>
      </Suspense>
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
          <UserIndex />
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

  {
    path: "cart",
    element: (
      <Suspense fallback={<Loader />}>
        <Cart />
      </Suspense>
    ),
  },

  {
    path: "seller/:seller_id",
    element: (
      <Suspense fallback={<Loader />}>
        <Seller />
      </Suspense>
    ),
  },

  // Affiliate
  {
    path: "a",
    element: (
      <Suspense>
        <Layout>
          <AffiliateIndex />
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
