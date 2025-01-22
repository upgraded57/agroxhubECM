import React from "react";

export default function ProductsLoader({ count }) {
  const array = Array.from({ length: count }, (_, index) => index);

  return (
    <div className="gridEl w-full">
      {array.map((_, idx) => (
        <div className="w-full mb-6 p-4" key={idx}>
          <div className="skeleton h-[128px] w-full rounded-lg"></div>
          <div className="skeleton h-6 rounded-md w-[80%] mt-3"></div>
          <div className="skeleton h-4 rounded-md w-[60%] mt-1"></div>
        </div>
      ))}
    </div>
  );
}
