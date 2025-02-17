import { FaStar, FaRegEye } from "react-icons/fa";
import { BiEdit } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";
import { BsGraphUp } from "react-icons/bs";
import { Link } from "react-router-dom";
import { UseDeleteProduct } from "../../api/product";
import { useQueryClient } from "@tanstack/react-query";

const tooltipStyle =
  "tooltip rounded-md p-1 border-2 border-dark-blue-clr text-dark-blue-clr text-xl cursor-pointer hover:border-transparent hover:text-white hover:bg-dark-blue-clr";
export default function SellerProduct({ product }) {
  const queryClient = useQueryClient();
  const { mutate: deleteProduct } = UseDeleteProduct(
    queryClient,
    product?.sellerId
  );
  const handleDeleteProduct = () => {
    deleteProduct(product?.slug);
  };
  return (
    <div className="w-full min-w-[180px] rounded-xl p-2 hover:shadow-md pb-3 mb-4">
      <div className="w-full h-[128px] rounded-b-none rounded-lg overflow-hidden">
        <img src={product?.images[0]} alt="Product Image" />
      </div>
      <p className="text-md pt-2 truncate" title={product?.name}>
        {product?.name}
      </p>
      <div className="flex gap-1 items-center text-md text-yellow-300 py-2">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar className="text-gray-200" />
      </div>
      <h3 className="h-100">N{product?.unitPrice.toLocaleString()}</h3>
      <div className="flex items-center gap-2 py-2">
        <Link
          to={`/products/${product?.slug}`}
          className={tooltipStyle}
          data-tip="View Product"
        >
          <FaRegEye />
        </Link>
        <Link
          to={`/seller/products/${product?.slug}/edit`}
          className={tooltipStyle}
          data-tip="Edit Product"
        >
          <BiEdit />
        </Link>
        <span
          className={tooltipStyle}
          data-tip="Delete Product"
          onClick={handleDeleteProduct}
        >
          <MdDeleteForever />
        </span>
        <Link
          to="/seller/products/1234/analytics"
          className={tooltipStyle}
          data-tip="View Product Analytics"
        >
          <BsGraphUp />
        </Link>
      </div>
    </div>
  );
}
