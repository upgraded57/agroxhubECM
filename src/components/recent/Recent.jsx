import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa6";

export default function Recent() {
  return (
    <div className="contEl mb-12">
      <h3 className="h-100">Your Recent Views</h3>

      <div className="w-full carousel gap-3">
        <div className="carousel-content min-w-[180px] p-2">
          <Link to="/products/1234" className="w-full rounded-xl">
            <div className="w-full h-[128px] rounded-b-none rounded-lg overflow-hidden">
              <img
                src="https://source.unsplash.com/random"
                alt="Product Image"
              />
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
        </div>
        <div className="carousel-content min-w-[180px] p-2">
          <Link to="/products/1234" className="w-full rounded-xl">
            <div className="w-full h-[128px] rounded-b-none rounded-lg overflow-hidden">
              <img
                src="https://source.unsplash.com/random"
                alt="Product Image"
              />
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
        </div>
        <div className="carousel-content min-w-[180px] p-2">
          <Link to="/products/1234" className="w-full rounded-xl">
            <div className="w-full h-[128px] rounded-b-none rounded-lg overflow-hidden">
              <img
                src="https://source.unsplash.com/random"
                alt="Product Image"
              />
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
        </div>
        <div className="carousel-content min-w-[180px] p-2">
          <Link to="/products/1234" className="w-full rounded-xl">
            <div className="w-full h-[128px] rounded-b-none rounded-lg overflow-hidden">
              <img
                src="https://source.unsplash.com/random"
                alt="Product Image"
              />
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
        </div>
        <div className="carousel-content min-w-[180px] p-2">
          <Link to="/products/1234" className="w-full rounded-xl">
            <div className="w-full h-[128px] rounded-b-none rounded-lg overflow-hidden">
              <img
                src="https://source.unsplash.com/random"
                alt="Product Image"
              />
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
        </div>
      </div>
    </div>
  );
}
