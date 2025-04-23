import SellerProduct from "../../components/sellerproduct/SellerProduct";
import { FaPlusCircle } from "react-icons/fa";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useGetSellerProducts } from "../../api/seller";
import ProductsLoader from "../../components/productsLoader/ProductsLoader";
import { useEffect } from "react";

export default function SellerProducts() {
  const navigate = useNavigate();
  const sellerId = localStorage.getItem("userId") || "";
  useEffect(() => {
    if (!sellerId) {
      navigate(-1);
    }

    return;
  }, []);

  const { isLoading, isFetching, data } = useGetSellerProducts(sellerId);
  const products: Product[] = data?.products;
  return (
    <>
      <div className="hidden md:flex items-center justify-between pb-2">
        <div className="flex items-center gap-2">
          <h2 className="font-semibold text-2xl">PRODUCTS</h2>
          <Link to="/seller/products/create" className="btn btn-sm">
            <FaPlusCircle />
            <p className="uppercase">create new</p>
          </Link>
        </div>
        <select className="select select-xs uppercase font-normal">
          <option>This Month</option>
          <option>Last Month</option>
          <option>This Year</option>
        </select>
      </div>

      <div className="flex md:hidden items-center justify-between py-2">
        <Link to="/seller/products/create" className="btn btn-sm">
          <FaPlusCircle />
          <p className="uppercase">create new</p>
        </Link>
        <div className="flex items-center gap-2">
          <p className="text-sm uppercase">filter:</p>
          <select className="select select-xs uppercase font-normal">
            <option>This Month</option>
            <option>Last Month</option>
            <option>This Year</option>
          </select>
        </div>
      </div>

      {isLoading || isFetching ? (
        <ProductsLoader count={8} />
      ) : (
        <div className="gridEl">
          {products?.map((product, idx) => (
            <SellerProduct product={product} key={idx} />
          ))}
        </div>
      )}
    </>
  );
}
