import { Link } from "react-router-dom";
import Product from "../product/Product";
import { FaArrowRightLong } from "react-icons/fa6";

export default function ProductsList({ header }) {
  return (
    <div className="px-[4vw] max-w-screen-xl mx-auto mb-12">
      <div className="flex items-center justify-between">
        <h3 className=" h-100">{header}</h3>
        <Link href="#" className="flex items-center gap-3">
          <p className="text-sm">See More</p>
          <FaArrowRightLong className="text-dark-green-clr" />
        </Link>
      </div>
      <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
}
