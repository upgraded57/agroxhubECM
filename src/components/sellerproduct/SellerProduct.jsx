import React from "react";
import { FaStar, FaRegEye } from "react-icons/fa";
import { BiEdit } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";
import { BsGraphUp } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function SellerProduct() {
  return (
    <div className="w-full min-w-[180px] rounded-xl p-2 hover:shadow-md pb-3 mb-4">
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
      <div className="flex items-center gap-2 py-2">
        <Link
          to="/products/1234"
          className="tooltip tooltip-right rounded-md p-1 border-2 border-dark-blue-clr text-dark-blue-clr text-xl cursor-pointer hover:border-transparent hover:text-white hover:bg-dark-blue-clr"
          data-tip="View Product"
        >
          <FaRegEye />
        </Link>
        <span
          className="tooltip rounded-md p-1 border-2 border-dark-blue-clr text-dark-blue-clr text-xl cursor-pointer hover:border-transparent hover:text-white hover:bg-dark-blue-clr"
          data-tip="Edit Product"
        >
          <BiEdit />
        </span>
        <span
          className="tooltip rounded-md p-1 border-2 border-dark-blue-clr text-dark-blue-clr text-xl cursor-pointer hover:border-transparent hover:text-white hover:bg-dark-blue-clr"
          data-tip="Delete Product"
        >
          <MdDeleteForever />
        </span>
        <span
          className="tooltip tooltip-left rounded-md p-1 border-2 border-dark-blue-clr text-dark-blue-clr text-xl cursor-pointer hover:border-transparent hover:text-white hover:bg-dark-blue-clr"
          data-tip="View Product Analytics"
        >
          <BsGraphUp />
        </span>
      </div>
    </div>
  );
}
