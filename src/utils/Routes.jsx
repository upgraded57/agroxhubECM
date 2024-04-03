import Product from "../pages/product/Product";
import Products from "../pages/products/Products";
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
];
