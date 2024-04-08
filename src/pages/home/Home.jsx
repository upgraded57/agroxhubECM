import Navbar from "../../components/navbar/Navbar";
import Search from "./../../components/search/Search";
import Hero from "../../components/hero/Hero";
import ProductsPicker from "../../components/productspicker/ProductsPicker";
import Farmers from "../../components/farmers/Farmers";
import BeASeller from "../../components/beaseller/BeASeller";
import Recent from "./../../components/recent/Recent";
import Footer from "../../components/footer/Footer";
import ProductsList from "./../../components/products/Products";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Search />
      <Hero />
      <ProductsPicker />
      <ProductsList header="Most Purchased Products" />
      <ProductsList header="Crops and Produce" />
      <Farmers />
      <ProductsList header="Processed Foods" />
      <BeASeller />
      <Recent />
      <Footer />
    </div>
  );
}
