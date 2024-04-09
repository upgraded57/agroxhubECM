import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Orders() {
  const orderedProducts = [];

  for (let i = 0; i < 12; i++) {
    orderedProducts.push("product");
  }
  return (
    <>
      <div className="flex items-center justify-between border-b py-2 md:pt-0">
        <h2 className="font-semibold text-sm md:text-2xl">ORDER HISTORY</h2>
        <select className="select select-xs uppercase font-normal">
          <option>All</option>
          <option>Pending</option>
          <option>Delivered</option>
          <option>Pending Review</option>
          <option>Rejected</option>
        </select>
      </div>

      {/* Products List */}
      {orderedProducts.map((_, idx) => (
        <div
          key={idx}
          className="orderedProduct flex items-center justify-between px-2 py-4 border-b"
        >
          <div className="flex items-center gap-2">
            <div className="w-[100px] md:w-[130px] aspect-square rounded-md overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1518736114810-3f3bedfec66a?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmFybSUyMHByb2R1Y2V8ZW58MHx8MHx8fDA%3D"
                alt="Procuct Image"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="block">
              <h3 className="font-normal text-lg md:text-2xl">
                Fresh Tomatoes
              </h3>
              <div className="hidden md:flex gap-1 items-center text-md text-yellow-300">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar className="text-gray-200" />
              </div>
              <h2 className="text-lg md:text-2xl font-semibold">NGN 5,600</h2>
              <p className="text-sm">Order date - 23rd October, 2023</p>
              <div className="flex items-center gap-2">
                <button className="btn btn-sm bg-light-green-clr border-light-green-clr font-normal text-white hover:bg-dark-green-clr hover:border-dark-green-clr">
                  DELIVERED
                </button>
                <Link
                  to="/user/orders/product/1234/review"
                  className="btn btn-sm border-orange-clr border-2 btn-outline text-orange-clr font-normal hover:bg-orange-clr hover:text-white hover:border-transparent "
                >
                  REVIEW
                </Link>
              </div>
            </div>
          </div>

          <Link
            to="/products/1234"
            className="btn green-gradient hidden md:flex"
          >
            View Product
          </Link>
        </div>
      ))}
    </>
  );
}
