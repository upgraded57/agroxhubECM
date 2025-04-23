import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa6";

export default function MostClickedProducts() {
  const ranNum = [0, 1, 2, 3, 4];
  return (
    <div className="my-4 bg-white rounded-lg p-3">
      <h3 className="text-lg font-semibold border-b pb-2 mb-3">Most Clicks</h3>

      <div className="w-full carousel gap-3">
        {ranNum.map((_, idx) => (
          <div key={idx} className="carousel-content min-w-[180px] p-2">
            <Link to="/products/1234" key={idx} className="w-full rounded-xl">
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
              <button
                type="button"
                className="btn btn-sm rounded-md green-gradient w-full my-1"
              >
                2034 Clicks
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
