import { FaStar, FaRegEye } from "react-icons/fa";
import { BiEdit } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";
import { BsGraphUp } from "react-icons/bs";
import { Link } from "react-router-dom";
import { UseDeleteProduct } from "../../api/product";
import { useQueryClient } from "@tanstack/react-query";

const tooltipStyle = "btn btn-sm rounded-md btn-square text-xl cursor-pointer";
export default function SellerProduct({ product }: { product: Product }) {
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
        <Link to={`/products/${product?.slug}`} className={tooltipStyle}>
          <span className="tooltip" data-tip="View Product">
            <FaRegEye />
          </span>
        </Link>
        <Link
          to={`/seller/products/${product?.slug}/edit`}
          className={tooltipStyle}
        >
          <span className="tooltip" data-tip="Edit Product">
            <BiEdit />
          </span>
        </Link>
        <span className={tooltipStyle} onClick={handleDeleteProduct}>
          <span className="tooltip" data-tip="Delete Product">
            <MdDeleteForever />
          </span>
        </span>
        <Link to="/seller/products/1234/analytics" className={tooltipStyle}>
          <span className="tooltip" data-tip="View Product Analytics">
            <BsGraphUp />
          </span>
        </Link>
      </div>
    </div>
  );
}
