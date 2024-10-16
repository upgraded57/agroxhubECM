import Navbar from "./../../components/navbar/Navbar";
import Farmers from "./../../components/farmers/Farmers";
import BeASeller from "./../../components/beaseller/BeASeller";
import Footer from "./../../components/footer/Footer";
import Recent from "./../../components/recent/Recent";
import { FaStar } from "react-icons/fa";
import ProductsList from "./../../components/products/Products";

export default function Seller() {
  return (
    <>
      {/* profile header */}
      <div className="h-[170px] md:h-[312px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFybWxhbmR8ZW58MHx8MHx8fDA%3D"
          alt="Seller Cover Picture"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col md:flex-row justify-between contEl md:items-center relative -translate-y-6 md:-translate-y-12">
        <div className="flex gap-3 items-end md:items-center">
          <div className="w-[100px] md:w-[200px] aspect-square border-[5px] border-white rounded-full overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1569880153113-76e33fc52d5f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFybWVyfGVufDB8fDB8fHww"
              alt="Seller Profile Image"
              className="w-full h-full object-cover"
            />
          </div>
          <span>
            <h3 className="text-lg md:text-2xl font-semibold">
              Babatunde Farms
            </h3>
            <p className="text-xs md:text-sm text-grey-clr">
              Cassava, Rice and Millet farmer
            </p>
            <p className="text-xs md:text-sm text-grey-clr">
              Seller since - 2021
            </p>
            <div className="flex items-center gap-2">
              <FaStar className="text-md text-yellow-300" />
              <FaStar className="text-md text-yellow-300" />
              <FaStar className="text-md text-yellow-300" />
              <FaStar className="text-md text-yellow-300" />
              <FaStar className="text-md text-gray-300" />
            </div>
          </span>
        </div>
        <div className="flex items-center gap-2 mt-4">
          <button className="btn btn-sm green-gradient uppercase">
            follow
          </button>
          <button className="btn uppercase btn-sm btn-outline border-2 border-red-clr text-red-clr hover:text-white hover:bg-red-clr hover:border-red-clr">
            report
          </button>
        </div>
      </div>

      {/* Seller review */}
      <div className="w-full bg-light-grey-clr mt-6 mb-12 py-4">
        <div className="contEl">
          <div role="tablist" className="tabs tabs-bordered">
            <input
              type="radio"
              name="my_tabs_1"
              role="tab"
              className="tab after:w-[max-content] font-semibold"
              aria-label="Seller Analytics"
              defaultChecked
            />
            <div role="tabpanel" className="tab-content">
              <div className="block items-center gap-8 justify-around py-2">
                <span className="block pt-2">
                  <p className="text-sm font-semibold">PRODUCTS</p>
                  <p className="text-sm">205</p>
                </span>
                <span className="block pt-2">
                  <p className="text-sm font-semibold">SALES</p>
                  <p className="text-sm">88</p>
                </span>
                <span className="block pt-2">
                  <p className="text-sm font-semibold">ORDERS</p>
                  <p className="text-sm">189</p>
                </span>
                <span className="block pt-2">
                  <p className="text-sm font-semibold">CART</p>
                  <p className="text-sm">35</p>
                </span>
                <span className="block pt-2">
                  <p className="text-sm font-semibold">REVIEWS</p>
                  <p className="text-sm">35</p>
                </span>
                <span className="block pt-2">
                  <p className="text-sm font-semibold">RETURNS</p>
                  <p className="text-sm">35</p>
                </span>
                <span className="block pt-2">
                  <p className="text-sm font-semibold">FOLLOWERS</p>
                  <p className="text-sm">35</p>
                </span>
              </div>
            </div>

            <input
              type="radio"
              name="my_tabs_1"
              role="tab"
              className="tab  after:w-[max-content] font-semibold"
              aria-label="Reviews"
            />
            <div role="tabpanel" className="tab-content">
              <div className="block items-center gap-8 justify-around py-2">
                <span className="block pt-2">
                  <p className="text-sm font-semibold">VIEWS</p>
                  <p className="text-sm">205</p>
                </span>
                <span className="block pt-2">
                  <p className="text-sm font-semibold">CARTS</p>
                  <p className="text-sm">88</p>
                </span>
                <span className="block pt-2">
                  <p className="text-sm font-semibold">SAVES</p>
                  <p className="text-sm">189</p>
                </span>
                <span className="block pt-2">
                  <p className="text-sm font-semibold">ORDERS</p>
                  <p className="text-sm">35</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Products */}
      <ProductsList header="Most Purchased Products" />
      <ProductsList header="Newest Products" />
      <ProductsList header="Most Viewed Products" />
      <Farmers header="View Similar Sellers" />
      <BeASeller />
    </>
  );
}
