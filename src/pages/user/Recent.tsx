import { useContext } from "react";
import { useGetRecentProducts } from "../../api/product";
import EmptyProducts from "../../components/emptyStates/EmptyProducts";
import ProductsLoader from "../../components/productsLoader/ProductsLoader";
import RecentProduct from "../../components/recent/RecentProduct";
import { UserContext } from "../../utils/userContext";
import PageTitle from "../../utils/pageTitle";

export default function Recent() {
  const localRecents = localStorage.getItem("recent") || "";
  const recent = localRecents ? JSON.parse(localRecents) : [];
  const { user } = useContext(UserContext);

  const { isLoading, data: products } = useGetRecentProducts(recent);
  return (
    <>
      <PageTitle title={`${user?.name} | Recent Items`} />
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
      ) : products && products?.length < 1 ? (
        <EmptyProducts text="You have no recent products yet" />
      ) : (
        products?.map((product, idx) => (
          <RecentProduct key={idx} product={product} />
        ))
      )}
    </>
  );
}
