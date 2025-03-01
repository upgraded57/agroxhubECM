import React from "react";

export default function OrderItem() {
  return (
    <div className="flex items-center justify-between gap-3 mb-6 lg:pr-10">
      <div className="flex items-center gap-2">
        <div className="min-w-[100px] min-h-[100px] w-[100px] h-[100px] lg:h-[120px] lg:w-[120px] rounded-lg overflow-hidden aspect-square bg-light-grey-clr">
          <img src="https://picsum.photos/200/200" alt="Product Image" />
        </div>
        <span>
          <p className="text-lg">Ginger Bread</p>
          <small className="text-xs">12 pieces</small>
        </span>
      </div>

      <p className="text-lg font-semibold whitespace-nowrap">NGN 11,200</p>
    </div>
  );
}
