import React from "react";
import SellerProduct from "./../../components/sellerproduct/SellerProduct";

export default function SellerProducts() {
  return (
    <>
      <div className="hidden md:flex items-center justify-between">
        <h2 className="font-semibold text-2xl hidden md:block pb-2">
          PRODUCTS
        </h2>
        <select className="select select-xs uppercase font-normal">
          <option>This Month</option>
          <option>Last Month</option>
          <option>This Year</option>
        </select>
      </div>

      <div className="flex md:hidden items-center justify-end py-2 gap-2">
        <p className="text-sm uppercase">filter results by:</p>
        <select className="select select-xs uppercase font-normal">
          <option>This Month</option>
          <option>Last Month</option>
          <option>This Year</option>
        </select>
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
