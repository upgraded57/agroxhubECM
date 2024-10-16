import { useParams } from "react-router-dom";
import Search from "../../components/search/Search";
import ProductDetail from "../../components/productdetail/ProductDetail";
import AboutSeller from "../../components/aboutseller/AboutSeller";
import BeASeller from "./../../components/beaseller/BeASeller";
import ProductsList from "./../../components/products/Products";

export default function Product() {
  const { product_id } = useParams();
  return (
    <>
      <Search />
      <ProductDetail />
      <AboutSeller />
      <ProductsList header="More Products from Seller" />
      <ProductsList header="You may also like" />
      <BeASeller />
    </>
  );
}
