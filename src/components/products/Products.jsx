import { Link } from "react-router-dom";
import Product from "../product/Product";
import { FaArrowRightLong } from "react-icons/fa6";

export default function ProductsList({ header }) {
  return (
    <div className="contEl mb-12">
      <div className="flex items-center justify-between">
        <h3 className=" h-100">{header}</h3>
        <Link to="/products" className="flex items-center gap-3">
          <p className="text-sm">See More</p>
          <FaArrowRightLong className="text-dark-green-clr" />
        </Link>
      </div>
      <div className="gridEl">
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
}
