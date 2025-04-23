import Search from "../../components/search/Search";
import Hero from "../../components/hero/Hero";
import ProductsPicker from "../../components/productspicker/ProductsPicker";
import Farmers from "../../components/farmers/Farmers";
import BeASeller from "../../components/beaseller/BeASeller";
import ProductsList from "../../components/productsList/ProductsList";
import PageTitle from "../../utils/pageTitle";

export default function Home() {
  return (
    <>
      <PageTitle title="Agroxhub | Nigeria Online Agricultural Marketplace" />
      <div>
        <Search />
        <Hero />
        <ProductsPicker />
        <ProductsList header="Flours and Mills" category="flours_and_mills" />
        <ProductsList
          header="Cookies and Biscuits"
          category="cookies_and_biscuits"
        />
        <ProductsList header="Fruits" category="fruits" />
        <Farmers header="Buy From Best Sellers" />
        <ProductsList header="Fertilizers" category="fertilizers" />
        <ProductsList header="Vegetables" category="vegetables" />
        <BeASeller />
      </div>
    </>
  );
}
