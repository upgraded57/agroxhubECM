import { useGetRecentProducts } from "../../api/product";
import EmptyProducts from "../../components/emptyStates/EmptyProducts";
import ProductsLoader from "../../components/productsLoader/ProductsLoader";
import RecentProduct from "../../components/recent/RecentProduct";

export default function Recent() {
  const recent = JSON.parse(localStorage.getItem("recent"));

  const { isLoading, data: products } = useGetRecentProducts(recent);
  return (
    <>
      <div className="hidden md:flex items-center justify-between border-b py-2 md:pt-0">
        <h2 className="font-semibold text-sm md:text-2xl">RECENT ITEMS</h2>
        <select className="select select-xs uppercase font-normal">
          <option>All</option>
          <option>Pending</option>
          <option>Delivered</option>
          <option>Pending Review</option>
          <option>Rejected</option>
        </select>
      </div>

      {/* Products List */}
      {isLoading ? (
        <ProductsLoader type="list" count={5} />
      ) : products?.length < 1 ? (
        <EmptyProducts text="You have no recent products yet" />
      ) : (
        products?.map((product, idx) => (
          <RecentProduct key={idx} product={product} />
        ))
      )}
    </>
  );
}
