import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";

export default function CartItem() {
  return (
    <div className="flex justify-between items-center gap-2">
      <div className="min-w-[100px] w-[100px] md:w-[130px] aspect-square rounded-md overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1602769515559-e15133a7e992?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZhcm0lMjBwcm9kdWNlfGVufDB8fDB8fHww"
          alt="Poduct Image"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="md:basis-3/5 flex w-full flex-col md:flex-row md:justify-between items-start md:items-center">
        <h4 className="text-lg md:text-2xl">Ginger</h4>
        <h3 className="text-lg md:text-2xl font-semibold">NGN 116</h3>
        <div className="flex items-center gap-3">
          <p className="text-sm">Qty</p>
          <div className="join">
            <button className="btn btn-sm join-item">
              <IoMdArrowDropup />
            </button>
            <span className="input input-sm border-r-0 border-l-0 input-bordered rounded-none">
              5 baskets
            </span>
            <button className="btn btn-sm join-item">
              <IoMdArrowDropdown />
            </button>
          </div>
        </div>
      </div>

      <button className="btn btn-ghost text-red-clr">
        <MdDeleteForever className="text-2xl" />
      </button>
    </div>
  );
}
