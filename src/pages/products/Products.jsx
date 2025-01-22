import Search from "../../components/search/Search";
import { MdOutlineFilterAlt } from "react-icons/md";

import Product from "../../components/product/Product";
import BeASeller from "../../components/beaseller/BeASeller";
import { useEffect } from "react";
import { useGetProducts } from "../../api/product";
import ProductsLoader from "../../components/productsLoader/ProductsLoader";
import { useSearchParams } from "react-router-dom";
import ProductsFilter from "../../components/productsFilter/ProductsFilter";
import EmptyProducts from "../../components/emptyStates/EmptyProducts";

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();

  const { isLoading, isFetching, data, fetchNextPage, refetch } =
    useGetProducts(searchParams);
  const hasMore = data?.pages[0]?.hasMore;

  const products = data?.pages[0]?.products;

  const handleLoadMoreProducts = () => {
    const currentParams = new URLSearchParams(searchParams);
    if (hasMore) {
      const currentPage = currentParams.get("currentPage");
      if (!currentPage) {
        currentParams.set("currentPage", 1);
      } else {
        currentParams.set("currentPage", parseInt(currentPage) + 1);
      }
      setSearchParams(currentParams);
    }
  };

  useEffect(() => {
    refetch();
  }, [searchParams]);

  return (
    <>
      <Search />
      <div className="max-w-screen-xl mx-auto px-[4vw] -mt-6 mb-10">
        <div className="drawer gap-4 lg:drawer-open">
          <input id="filterDrawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
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
                {hasMore && (
                  <div className="w-full flex justify-center mt-4">
                    <button
                      className="btn btn-outline border-2 border-orange-clr text-orange-clr hover:text-white hover:bg-orange-clr hover:border-orange-clr"
                      onClick={handleLoadMoreProducts}
                      disabled={isLoading || isFetching}
                    >
                      {isFetching ? (
                        <span className="loading loading-dots loading-md bg-orange-clr" />
                      ) : (
                        "Load More Products"
                      )}
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <EmptyProducts />
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
              <ProductsFilter />
            </ul>
          </div>
        </div>
      </div>

      <BeASeller />
    </>
  );
}
