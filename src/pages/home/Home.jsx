import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Products from "./../../components/products/Products";
import Search from "./../../components/search/Search";
import Hero from "../../components/hero/Hero";
import ProductsPicker from "../../components/productspicker/ProductsPicker";
import Farmers from "../../components/farmers/Farmers";
import BeASeller from "../../components/beaseller/BeASeller";
import Recent from "./../../components/recent/Recent";
import Footer from "../../components/footer/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Search />
      <Hero />
      <ProductsPicker />
      <Products header="Most Purchased Products" />
      <Products header="Crops and Produce" />
      <Farmers />
      <Products header="Processed Foods" />
      <BeASeller />
      <Recent />
      <Footer />
    </div>
  );
}
