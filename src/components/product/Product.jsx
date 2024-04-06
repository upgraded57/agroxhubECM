import { FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Product() {
  return (
    <Link
      to="/products/1234"
      className="w-full min-w-[180px] rounded-xl p-2 hover:shadow-md pb-3 mb-4"
    >
      <div className="w-full h-[128px] rounded-b-none rounded-lg overflow-hidden">
        <img src="https://source.unsplash.com/random" alt="Product Image" />
      </div>
      <p className="text-md pt-2">Fresh Tomatoes</p>
      <div className="flex gap-1 items-center text-md text-yellow-300 py-2">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar className="text-gray-200" />
      </div>
      <h3 className="h-100">N2,800</h3>
    </Link>
  );
}
