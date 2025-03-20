import { useContext } from "react";
import { useGetSavedProducts } from "../../api/saves";
import EmptyProducts from "../../components/emptyStates/EmptyProducts";
import ProductsLoader from "../../components/productsLoader/ProductsLoader";
import SavedProduct from "../../components/savedProduct/SavedProduct";
import PageTitle from "../../utils/pageTitle";
import { UserContext } from "../../utils/userContext";

export default function Saved() {
  const { isLoading, data: products } = useGetSavedProducts();
  const { user } = useContext(UserContext);

  return (
    <>
      <PageTitle title={`${user?.name} | Saved Items`} />
      <div className="hidden md:flex items-center justify-between border-b py-2 md:pt-0">
        <h2 className="font-semibold text-sm md:text-2xl">SAVED ITEMS</h2>
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
        <EmptyProducts text="You have no saved products yet" />
      ) : (
        products?.map((item, idx) => <SavedProduct key={idx} item={item} />)
      )}
    </>
  );
}
