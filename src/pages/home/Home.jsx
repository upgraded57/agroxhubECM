import Search from "./../../components/search/Search";
import Hero from "../../components/hero/Hero";
import ProductsPicker from "../../components/productspicker/ProductsPicker";
import Farmers from "../../components/farmers/Farmers";
import BeASeller from "../../components/beaseller/BeASeller";
import ProductsList from "./../../components/products/Products";

export default function Home() {
  return (
    <div>
      <Search />
      <Hero />
      <ProductsPicker />
      <ProductsList header="Most Purchased Products" />
      <ProductsList header="Crops and Produce" />
      <Farmers header="Buy From Best Selling Farmers" />
      <ProductsList header="Processed Foods" />
      <BeASeller />
    </div>
  );
}
