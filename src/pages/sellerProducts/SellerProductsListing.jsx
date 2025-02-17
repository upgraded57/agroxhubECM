import { MdOutlineFilterAlt } from "react-icons/md";
import ProductsFilter from "../../components/productsFilter/ProductsFilter";
import ProductsLoader from "../../components/productsLoader/ProductsLoader";
import ResetScroll from "../../components/resetScroll/ResetScroll";
import Search from "../../components/search/Search";
import { useGetSellerProducts } from "../../api/seller";
import EmptyProducts from "../../components/emptyStates/EmptyProducts";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import Product from "../../components/product/Product";
import { BiStoreAlt } from "react-icons/bi";

export default function SellerProductsListing() {
  const navigate = useNavigate();
  const { sellerId } = useParams();

  const [searchParams, setSearchParams] = useSearchParams();
  const currentParams = new URLSearchParams(searchParams);
  const currentPage = parseInt(currentParams.get("currentPage")) || 1;

  useEffect(() => {
    if (!sellerId) {
      navigate("/products");
    }
  }, []);
  const { isLoading, isFetching, data, refetch } = useGetSellerProducts(
    sellerId,
    searchParams
  );

  const hasMore = data?.hasMore;
  const products = data?.products;
  const seller = data?.seller;
  const handleLoadNextPage = () => {
    if (hasMore) {
      currentParams.set("currentPage", parseInt(currentPage) + 1);
      setSearchParams(currentParams);
    }
  };

  const handleLoadPreviousPage = () => {
    currentParams.set("currentPage", parseInt(currentPage) - 1);
    setSearchParams(currentParams);
  };

  useEffect(() => {
    refetch();
    window.scrollTo(0, 0);
  }, [searchParams]);
  return (
    <>
      <Search />
      <ResetScroll />
      <div className="max-w-screen-xl mx-auto px-[4vw] -mt-6 mb-10">
        <div className="drawer lg:gap-4 lg:drawer-open">
          <input id="filterDrawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            <div role="alert" className="alert bg-light-grey-clr mb-2 flex">
              <BiStoreAlt className="text-xl" />
              <span>Store - {seller?.name}</span>
            </div>
            <div className="w-full flex justify-end sticky top-[80px]">
              <label
                htmlFor="filterDrawer"
                className="drawer-button lg:hidden w-max"
              >
                <div className="btn btn-sm bg-white">
                  <p className="text-sm font-normal">Filters</p>
                  <MdOutlineFilterAlt className="text-2xl" />
                </div>
              </label>
            </div>
            {/* Page content here */}
            {isLoading || isFetching ? (
              <ProductsLoader count={12} />
            ) : products?.length > 0 ? (
              <div className="basis-19/25 w-full">
                <div className="gridEl">
                  {products?.map((product, idx) => (
                    <Product key={idx} product={product} />
                  ))}
                </div>

                <div className="w-full flex justify-center mt-4">
                  <div className="join">
                    <button
                      className="join-item btn bg-orange-clr text-white hover:bg-orange-clr hover:border-orange-clr"
                      disabled={currentPage <= 1}
                      onClick={handleLoadPreviousPage}
                    >
                      «
                    </button>
                    <button className="join-item btn bg-transparent pointer-events-none">
                      Page {currentPage}
                    </button>
                    <button
                      className="join-item btn bg-orange-clr text-white hover:bg-orange-clr hover:border-orange-clr"
                      disabled={!hasMore}
                      onClick={handleLoadNextPage}
                    >
                      »
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <EmptyProducts
                text={
                  "We could not find any product matching your search. Try using a different search term"
                }
              />
            )}
          </div>
          <div className="drawer-side">
            <label
              htmlFor="filterDrawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu w-80 lg:w-60 xl:w-80 mt-12 lg:mt-0 p-4 lg:p-0 bg-white lg:bg-transparent">
              {/* Sidebar content here */}
              <ProductsFilter sellerPage />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
