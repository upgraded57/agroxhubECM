import "./products.css";
import Navbar from "../../components/navbar/Navbar";
import Search from "../../components/search/Search";
import { MdOutlineFilterAlt } from "react-icons/md";
import { IoChevronDownOutline, IoClose } from "react-icons/io5";
import { FaRegStar, FaStar } from "react-icons/fa";
import Product from "../../components/product/Product";
import BeASeller from "./../../components/beaseller/BeASeller";
import { useState } from "react";
import Recent from "./../../components/recent/Recent";
import Footer from "./../../components/footer/Footer";

export default function Products() {
  const productsCount = [];

  for (let i = 0; i < 30; i++) {
    productsCount.push("product");
  }

  const [filterVisible, setFilterVisible] = useState(false);

  const filterStyle =
    "fixed basis-6/25 md:static w-[100vw] md:w-[max-content] h-screen overflow-y-auto md:h-auto bg-white top-[50px] md:top-auto left-0 md:left-auto px-4 md:p-0 pb-[100px] md:pb-0";

  return (
    <>
      <Navbar />
      <Search />

      {/* Product listing */}
      <div className="max-w-screen-xl mx-auto px-[4vw] -mt-6 mb-10">
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
          {/* Filter */}
          <div
            className={
              filterVisible
                ? `${filterStyle} filters active`
                : `${filterStyle} filters`
            }
          >
            <div className="md:hidden  mb-4 flex items-center justify-between sticky top-0 bg-white border-b py-4 z-10">
              <h3 className="text-lg font-semibold">FILTERS</h3>
              <button
                className="btn btn-sm"
                onClick={() => setFilterVisible(false)}
              >
                <IoClose />
                CLOSE
              </button>
            </div>
            <div className="rounded-lg bg-light-grey-clr p-4">
              <h3 className="text-lg font-semibold">PRICE</h3>
              <div className="flex items-center gap-10 mt-4">
                <span>
                  <p className="text-xs">MIN</p>
                  <input
                    type="text"
                    className="input rounded-lg w-full h-[30px] px-1"
                  />
                </span>
                <span>
                  <p className="text-xs">MAX</p>
                  <input
                    type="text"
                    className="input rounded-lg w-full h-[30px] px-1"
                  />
                </span>
              </div>
            </div>

            <div className="rounded-lg bg-light-grey-clr p-4 mt-4">
              <h3 className="text-lg font-semibold">LOCATION</h3>
              <div className="mt-4 flex items-center gap-4">
                <p className="text-sm">WHOLE NIGERIA</p>
                <IoChevronDownOutline />
              </div>
            </div>

            <div className="rounded-lg bg-light-grey-clr p-4 mt-4">
              <h3 className="text-lg font-semibold">SELLER</h3>
              <div className="mt-2">
                <label className="label cursor-pointer flex justify-start items-center gap-4">
                  <input type="checkbox" className="checkbox scale-75" />
                  <span className="label-text">Farmer</span>
                </label>
                <label className="label cursor-pointer flex justify-start items-center gap-4">
                  <input type="checkbox" className="checkbox scale-75" />
                  <span className="label-text">Wholesaler</span>
                </label>
              </div>
            </div>

            <div className="rounded-lg bg-light-grey-clr p-4 mt-4">
              <h3 className="text-lg font-semibold">RATING</h3>
              <div className="mt-2">
                <div className="flex gap-1 items-center text-md text-yellow-300 py-2">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <div className="flex gap-1 items-center text-md text-yellow-300 py-2">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaRegStar />
                </div>
                <div className="flex gap-1 items-center text-md text-yellow-300 py-2">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaRegStar />
                  <FaRegStar />
                </div>
                <div className="flex gap-1 items-center text-md text-yellow-300 py-2">
                  <FaStar />
                  <FaStar />
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-light-grey-clr p-4 mt-4">
              <h3 className="text-lg font-semibold">DATE POSTED</h3>
              <div className="mt-2">
                <label className="label cursor-pointer flex justify-start items-center gap-4">
                  <input type="checkbox" className="checkbox scale-75" />
                  <span className="label-text">Last Week</span>
                </label>
                <label className="label cursor-pointer flex justify-start items-center gap-4">
                  <input type="checkbox" className="checkbox scale-75" />
                  <span className="label-text">Last Month</span>
                </label>
                <label className="label cursor-pointer flex justify-start items-center gap-4">
                  <input type="checkbox" className="checkbox scale-75" />
                  <span className="label-text">Last Three Months</span>
                </label>
                <label className="label cursor-pointer flex justify-start items-center gap-4">
                  <input type="checkbox" className="checkbox scale-75" />
                  <span className="label-text">Last Six Months</span>
                </label>
                <label className="label cursor-pointer flex justify-start items-center gap-4">
                  <input type="checkbox" className="checkbox scale-75" />
                  <span className="label-text">Last Year</span>
                </label>
              </div>
            </div>

            <div className="flex items-center mt-4 gap-4 md:gap-2">
              <button className="btn btn-sm btn-ghost">CLEAR FILTERS</button>
              <button className="btn btn-sm green-gradient">
                APPLY FILTERS
              </button>
            </div>
          </div>

          {/* Products */}
          <div className="basis-19/25 w-full">
            <h3 className=" h-100">Most Purchased Products</h3>
            <div className="gridEl">
              {productsCount.map((_, idx) => (
                <Product key={idx} />
              ))}
            </div>
            <div className="w-full flex justify-center mt-4">
              <button className="btn btn-outline border-2 border-orange-clr text-orange-clr hover:text-white hover:bg-orange-clr hover:border-orange-clr">
                Load More Products
              </button>
            </div>
          </div>
        </div>
      </div>

      <BeASeller />
      <Recent />
      <Footer />
    </>
  );
}
