import { useLoaderData } from "react-router-dom";
import Footer from "./../../components/footer/Footer";
import Recent from "./../../components/recent/Recent";
import BeASeller from "./../../components/beaseller/BeASeller";
import Search from "./../../components/search/Search";
import Product from "../../components/product/Product";
import { MdOutlineFilterAlt } from "react-icons/md";
import SearchFilter from "./SearchFilter";
import { useState } from "react";

export default function SearchPage() {
  const q = useLoaderData();

  const productsCount = [];

  for (let i = 0; i < 30; i++) {
    productsCount.push("product");
  }

  const [filterVisible, setFilterVisible] = useState(false);

  return (
    <>
      <Search />
      <div className="contEl -mt-6 mb-10">
        <div className="flex justify-end items-center gap-4 py-2 md:hidden">
          <div
            className="btn btn-sm btn-ghost"
            onClick={() => setFilterVisible(true)}
          >
            <p className="text-sm font-normal">Filter</p>
            <MdOutlineFilterAlt className="text-2xl" />
          </div>
        </div>

        <div className="block md:flex items-start gap-6 w-full">
          <SearchFilter
            filterVisible={filterVisible}
            setFilterVisible={setFilterVisible}
          />

          {/* Products */}
          <div className="basis-19/25 w-full">
            <h3 className="h-100">Search result for - {q}</h3>
            <div className="gridEl">
              {productsCount.map((_, idx) => (
                <Product key={idx} />
              ))}
            </div>
            <div className="w-full flex justify-center mt-4">
              <button className="btn btn-outline border-orange-clr text-orange-clr hover:text-white hover:bg-orange-clr hover:border-orange-clr">
                Load More Products
              </button>
            </div>
          </div>
        </div>
      </div>
      <BeASeller />
    </>
  );
}
