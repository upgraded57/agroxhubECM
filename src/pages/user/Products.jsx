import SellerProduct from "./../../components/sellerproduct/SellerProduct";
import { FaPlusCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function SellerProducts() {
  return (
    <>
      <div className="hidden md:flex items-center justify-between pb-2">
        <div className="flex items-center gap-2">
          <h2 className="font-semibold text-2xl">PRODUCTS</h2>
          <Link to="/seller/products/create" className="btn btn-sm">
            <FaPlusCircle />
            <p className="uppercase">create new</p>
          </Link>
        </div>
        <select className="select select-xs uppercase font-normal">
          <option>This Month</option>
          <option>Last Month</option>
          <option>This Year</option>
        </select>
      </div>

      <div className="flex md:hidden items-center justify-between py-2">
        <Link to="/seller/products/create" className="btn btn-sm">
          <FaPlusCircle />
          <p className="uppercase">create new</p>
        </Link>
        <div className="flex items-center gap-2">
          <p className="text-sm uppercase">filter:</p>
          <select className="select select-xs uppercase font-normal">
            <option>This Month</option>
            <option>Last Month</option>
            <option>This Year</option>
          </select>
        </div>
      </div>

      <div className="gridEl">
        <SellerProduct />
        <SellerProduct />
        <SellerProduct />
        <SellerProduct />
        <SellerProduct />
        <SellerProduct />
        <SellerProduct />
        <SellerProduct />
        <SellerProduct />
      </div>
    </>
  );
}
