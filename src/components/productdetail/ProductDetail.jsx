import { useEffect, useState } from "react";
import { FaStar, FaPlus, FaMinus } from "react-icons/fa6";
import { IoCartOutline, IoHeartOutline } from "react-icons/io5";
import toast from "react-hot-toast";

export default function ProductDetail({ product }) {
  const userId = localStorage.getItem("userId");
  const [qty, setQty] = useState(1);
  const handleChangeQty = (type) => {
    if (type === "increase") {
      if (qty >= 10) {
        return;
      } else {
        setQty((prev) => prev + 1);
        return;
      }
    } else if (type === "decrease") {
      if (qty <= 1) {
        return;
      } else {
        setQty((prev) => prev - 1);
      }
    } else {
      return;
    }
  };

  // Save product as recently viewed to local storage
  useEffect(() => {
    const addToRecentItem = () => {
      // Retrieve the recent products from localStorage, defaulting to an empty array
      const recentProducts = JSON.parse(localStorage.getItem("recent")) || [];

      // Check if the product is already saved
      const productIsSaved = recentProducts.some(
        (item) => item === product.slug
      );
      if (productIsSaved) return; // If it exists, do nothing

      // Add the new product to the beginning of the array (to maintain most recent order)
      recentProducts.unshift(product.slug);

      // Limit the array to the most recent 5 items
      if (recentProducts.length > 6) {
        recentProducts.splice(6); // Remove items beyond the 5th index
      }

      // Save back to localStorage
      localStorage.setItem("recent", JSON.stringify(recentProducts));
    };

    addToRecentItem();
  }, [product.slug]);

  const [currentImg, setCurrentImg] = useState(product?.images[0]);

  const handleSaveProduct = () => {
    if (!userId) {
      toast.error("Please login to continue", {
        id: "saveToast",
      });
    }
  };

  const positiveRating = Array.from(
    { length: product?.ratings },
    (_, index) => index
  );

  const emptyRating = Array.from(
    { length: 5 - product?.ratings },
    (_, index) => index
  );

  return (
    <div className="contEl mb-12">
      <div className="flex gap-4 flex-col md:flex-row">
        <div className="flex flex-col gap-2 w-full basis-1/2">
          <div className="w-full aspect-[3/2] rounded-lg bg-gray-200 overflow-hidden">
            <img
              src={currentImg || ""}
              alt="Product image"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-4 gap-2">
            {product?.images.map((item, idx) => (
              <div
                className="aspect-[3/2] rounded-md overflow-hidden bg-gray-200 cursor-zoom-in"
                key={idx}
                onClick={() => setCurrentImg(item)}
              >
                <img
                  src={item}
                  alt="Product Image"
                  className={`w-full h-full object-cover ${
                    item === currentImg
                      ? "opacity-100 border-2 border-orange-clr rounded-md"
                      : "opacity-50 hover:opacity-100"
                  } `}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="w-full basis-1/2">
          <h2 className="text-lg font-semibold md:font-normal md:text-3xl">
            {product?.name}
          </h2>
          <hr className="my-3" />
          <div className="flex items-center gap-2">
            <h1 className="text-lg font-normal md:text-3xl">
              N{product?.unitPrice.toLocaleString()}
            </h1>
            <p className="text-sm">per {product?.unit}</p>
          </div>
          <hr className="my-3" />
          <p className="text-sm">{product?.description}</p>
          <hr className="my-3" />
          <div className="flex items-center gap-2">
            <div className="flex gap-1 items-center text-md text-yellow-300 py-2">
              {positiveRating?.map((_, idx) => (
                <FaStar key={idx} />
              ))}
              {emptyRating?.map((_, idx) => (
                <FaStar className="text-gray-200" key={idx} />
              ))}
            </div>
            <p className="text-sm pl-3">
              {product?.reviews?.length || 0} Reviews
            </p>
          </div>
          <hr className="my-3" />
          <div className="join">
            <div
              className="join-item btn rounded-none"
              onClick={() => handleChangeQty("decrease")}
            >
              <FaMinus />
            </div>
            <div className="join-item flex items-center justify-between input input-bordered text-xl border-x-0">
              {qty} {product?.unit}
              {qty > 1 ? "(s)" : ""}
            </div>
            <div
              className="join-item btn rounded-none"
              onClick={() => handleChangeQty("increase")}
            >
              <FaPlus />
            </div>
          </div>
          <p className="text-sm mt-3">
            50 Baskets max saleable in one order | 750 Baskets still in stock
          </p>
          <hr className="my-3" />
          {/* <div className="flex items-end gap-2">
            <p className="text-sm">Choose logistic service provider</p>
            <IoChevronDownOutline />
          </div>
          <hr className="my-3" /> */}

          {/* <p className="text-sm">
            Deliver to - <b>Ajegunle Alakuko.</b>{" "}
            <span className="text-orange-clr">(Change delivery address)</span>
          </p>
          <hr className="my-3" /> */}
          <div className="flex items-center gap-2">
            <button className="btn green-gradient text-white">
              Add to Cart
              <IoCartOutline className="text-2xl" />
            </button>
            <button
              className="btn border-2 border-orange-clr bg-white text-orange-clr hover:bg-orange-clr hover:text-white hover:border-orange-clr"
              onClick={handleSaveProduct}
            >
              Save
              <IoHeartOutline className="text-2xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
