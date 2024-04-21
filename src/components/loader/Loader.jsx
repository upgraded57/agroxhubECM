import React from "react";

export default function Loader() {
  return (
    <div className="w-full h-full fixed bg-white inset-0 flex items-center justify-center">
      <span className="loading loading-spinner text-dark-green-clr loading-lg"></span>
    </div>
  );
}
