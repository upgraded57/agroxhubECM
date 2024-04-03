import React from "react";
import Product from "../product/Product";

export default function Recent() {
  return (
    <div className="px-[4vw] max-w-screen-xl mx-auto mb-12">
      <h3 className="h-100">Your Recent Views</h3>

      <div className="w-full carousel gap-3">
        <div className="carousel-content">
          <Product />
        </div>
        <div className="carousel-content">
          <Product />
        </div>
        <div className="carousel-content">
          <Product />
        </div>
        <div className="carousel-content">
          <Product />
        </div>
        <div className="carousel-content">
          <Product />
        </div>
      </div>
    </div>
  );
}
