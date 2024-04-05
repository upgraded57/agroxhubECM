import Product from "../pages/product/Product";
import Products from "../pages/products/Products";
import SearchPage from "../pages/search/Search";
import Home from "./../pages/home/Home";

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
];
