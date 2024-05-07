import React, { Suspense } from "react";
import Loader from "../components/loader/Loader";

const Home = React.lazy(() => import("./../pages/home/Home"));
const Products = React.lazy(() => import("../pages/products/Products"));
const SearchPage = React.lazy(() => import("../pages/search/Search"));
const Product = React.lazy(() => import("../pages/product/Product"));
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
import Layout from "./../pages/affiliate/Layout";
import AffiliateOverView from "./../pages/affiliate/Overview.affiliate";
import AffiliateProducts from "./../pages/affiliate/Products.affiliate";
import AffiliateLinks from "../pages/affiliate/Links.affiliate";
import AffiliateFinance from "../pages/affiliate/Finance.affiliate";
import AffiliateAccount from "../pages/affiliate/Account.affiliate";
import Auth from "../pages/auth/Auth";

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
        <Home />
      </Suspense>
    ),
  },

  {
    path: "products",
    element: (
      <Suspense fallback={<Loader />}>
        <Products />
      </Suspense>
    ),
  },

  {
    path: "about",
    element: (
      <Suspense fallback={<Loader />}>
        <About />
      </Suspense>
    ),
  },

  {
    path: "products/:product_id",
    element: (
      <Suspense fallback={<Loader />}>
        <Product />
      </Suspense>
    ),
  },

  {
    path: "search",
    element: (
      <Suspense fallback={<Loader />}>
        <SearchPage />
      </Suspense>
    ),
    loader: async ({ request }) => {
      let url = new URL(request.url);
      let searchTerm = url.searchParams.get("q");
      return searchTerm;
    },
  },

  {
    path: "user/account",
    element: (
      <Suspense fallback={<Loader />}>
        <UserLayout>
          <Account />
        </UserLayout>
      </Suspense>
    ),
    action: ({ request }) => {
      // Call API to edit form here
      return null;
    },
  },

  {
    path: "user/account/edit",
    element: (
      <Suspense fallback={<Loader />}>
        <UserLayout>
          <EditProfile />
        </UserLayout>
      </Suspense>
    ),
  },

  {
    path: "user/orders",
    element: (
      <Suspense fallback={<Loader />}>
        <UserLayout>
          <Orders />
        </UserLayout>
      </Suspense>
    ),
  },

  {
    path: "user/saved",
    element: (
      <Suspense fallback={<Loader />}>
        <UserLayout>
          <Saved />
        </UserLayout>
      </Suspense>
    ),
  },

  {
    path: "user/recent",
    element: (
      <Suspense fallback={<Loader />}>
        <UserLayout>
          <Recent />
        </UserLayout>
      </Suspense>
    ),
  },

  {
    path: "user/payment",
    element: (
      <Suspense fallback={<Loader />}>
        <UserLayout>
          <Payment />
        </UserLayout>
      </Suspense>
    ),
    action: () => {
      // call API to add new payment card here
      return null;
    },
  },
  {
    path: "user/payment/new",
    element: (
      <Suspense fallback={<Loader />}>
        <UserLayout>
          <AddPaymentCard />
        </UserLayout>
      </Suspense>
    ),
  },

  {
    path: "user/notifications",
    element: (
      <Suspense fallback={<Loader />}>
        <UserLayout>
          <Notifications />
        </UserLayout>
      </Suspense>
    ),
  },

  {
    path: "user/help",
    element: (
      <Suspense fallback={<Loader />}>
        <UserLayout>
          <Help />
        </UserLayout>
      </Suspense>
    ),
  },

  {
    path: "user/report",
    element: (
      <Suspense fallback={<Loader />}>
        <UserLayout>
          <Report />
        </UserLayout>
      </Suspense>
    ),
  },

  {
    path: "user/review",
    element: (
      <Suspense fallback={<Loader />}>
        <UserLayout>
          <Review />
        </UserLayout>
      </Suspense>
    ),
  },

  {
    path: "user/orders/product/:product_id/review",
    element: (
      <Suspense fallback={<Loader />}>
        <UserLayout>
          <ProductReview />
        </UserLayout>
      </Suspense>
    ),
  },

  {
    path: "seller/analytics",
    element: (
      <Suspense fallback={<Loader />}>
        <UserLayout>
          <Analytics />
        </UserLayout>
      </Suspense>
    ),
  },

  {
    path: "seller/products",
    element: (
      <Suspense fallback={<Loader />}>
        <UserLayout>
          <SellerProducts />
        </UserLayout>
      </Suspense>
    ),
  },

  {
    path: "seller/products/create",
    element: (
      <Suspense fallback={<Loader />}>
        <UserLayout>
          <CreateProduct />
        </UserLayout>
      </Suspense>
    ),
  },

  {
    path: "seller/finance",
    element: (
      <Suspense fallback={<Loader />}>
        <UserLayout>
          <Finance />
        </UserLayout>
      </Suspense>
    ),
  },

  {
    path: "seller/followers",
    element: (
      <Suspense fallback={<Loader />}>
        <UserLayout>
          <Followers />
        </UserLayout>
      </Suspense>
    ),
  },

  {
    path: "seller/promotions",
    element: (
      <Suspense fallback={<Loader />}>
        <UserLayout>
          <Promotions />
        </UserLayout>
      </Suspense>
    ),
  },

  {
    path: "seller/products/:product_id/analytics",
    element: (
      <Suspense fallback={<Loader />}>
        <UserLayout>
          <ProductAnalytics />
        </UserLayout>
      </Suspense>
    ),
  },

  {
    path: "seller/products/:product_id/promote",
    element: (
      <Suspense fallback={<Loader />}>
        <UserLayout>
          <PromoteProduct />
        </UserLayout>
      </Suspense>
    ),
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
          <AffiliateOverView />
        </Layout>
      </Suspense>
    ),
  },
  {
    path: "a/products",
    element: (
      <Suspense>
        <Layout>
          <AffiliateProducts />
        </Layout>
      </Suspense>
    ),
  },
  {
    path: "a/links",
    element: (
      <Suspense>
        <Layout>
          <AffiliateLinks />
        </Layout>
      </Suspense>
    ),
  },
  {
    path: "a/finance",
    element: (
      <Suspense>
        <Layout>
          <AffiliateFinance />
        </Layout>
      </Suspense>
    ),
  },
  {
    path: "a/account",
    element: (
      <Suspense>
        <Layout>
          <AffiliateAccount />
        </Layout>
      </Suspense>
    ),
  },
];
