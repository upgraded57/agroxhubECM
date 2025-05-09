import Search from "../../components/search/Search";
import { MdOutlineFilterAlt } from "react-icons/md";

import Product from "../../components/product/Product";
import BeASeller from "../../components/beaseller/BeASeller";
import { useEffect } from "react";
import { useGetProducts } from "../../api/product";
import ProductsLoader from "../../components/productsLoader/ProductsLoader";
import { useSearchParams } from "react-router-dom";
import ProductsFilter from "../../components/productsFilter/ProductsFilter";
import ResetScroll from "../../components/resetScroll/ResetScroll";
import PageTitle from "../../utils/pageTitle";
import ProductNotFound from "../../components/emptyStates/ProductNotFound";

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentParams = new URLSearchParams(searchParams);

  const cp = currentParams.get("currentPage");
  const currentPage = cp ? parseInt(cp) : 1;

  const { isLoading, isFetching, data, refetch } = useGetProducts(searchParams);
  const hasMore = data?.hasMore;

  const products: Product[] = data?.products;

  const handleLoadNextPage = () => {
    if (hasMore) {
      currentParams.set("currentPage", JSON.stringify(currentPage + 1));
      setSearchParams(currentParams);
    }
  };

  const handleLoadPreviousPage = () => {
    currentParams.set("currentPage", JSON.stringify(currentPage - 1));
    setSearchParams(currentParams);
  };

  useEffect(() => {
    refetch();
    window.scrollTo(0, 0);
  }, [searchParams]);

  const searchValue = searchParams.get("q");

  return (
    <>
      <PageTitle
        title={
          searchValue
            ? `Searching - ${searchValue} | Find products on Agroxhub`
            : "Find products on Agroxhub"
        }
      />
      <Search />
      <ResetScroll />
      <div className="max-w-(--breakpoint-xl) mx-auto px-[4vw] -mt-6 mb-10">
        <div className="drawer lg:gap-4 lg:drawer-open">
          <input id="filterDrawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            <div className="w-full flex justify-end sticky top-[80px]">
              <label
                htmlFor="filterDrawer"
                className="drawer-button lg:hidden w-max"
              >
                <div className="btn btn-sm bg-white mb-4">
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
              <ProductNotFound type="multiple" />
            )}
          </div>
          <div className="drawer-side">
            <label
              htmlFor="filterDrawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <div className="w-80 lg:w-60 xl:w-80 mt-12 lg:mt-0 p-4 lg:p-0 bg-white lg:bg-transparent">
              {/* Sidebar content here */}
              <ProductsFilter />
            </div>
          </div>
        </div>
      </div>

      <BeASeller />
    </>
  );
}
