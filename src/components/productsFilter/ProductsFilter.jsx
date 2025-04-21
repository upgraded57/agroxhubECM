import { useGetProductCategories } from "../../api/product";
import { useGetRegions } from "../../api/region";
import { useSearchParams } from "react-router-dom";

export default function ProductsFilter({ sellerPage }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const { isLoading: isLoadingCategories, data: categories } =
    useGetProductCategories();

  const { isLoading: isLoadingRegions, data: regions } = useGetRegions();

  // Convert searchParams to a plain object
  const queryParams = Object.fromEntries(searchParams.entries());

  const handleFilterChange = (e) => {
    const { name, value } = e.target;

    // Update searchParams in the URL
    const updatedParams = new URLSearchParams(searchParams);
    if (value) {
      updatedParams.set(name, value);
      const currentPage = queryParams.currentPage;
      if (parseInt(currentPage) > 1) {
        updatedParams.delete("currentPage");
      }
    } else {
      updatedParams.delete(name); // Remove parameter if value is empty
    }
    setSearchParams(updatedParams);
  };

  const handleClearFilters = () => {
    setSearchParams("");
  };

  return (
    <div className="block filter">
      {/* Price */}
      <div className="rounded-lg bg-light-grey-clr p-4">
        <h3 className="text-lg font-semibold">PRICE</h3>
        <div className="flex items-center gap-4 mt-4">
          <span>
            <p className="text-xs">MIN</p>
            <input
              type="text"
              className="input rounded-lg w-full h-[30px] px-1"
              name="minPrice"
              value={queryParams.minPrice || ""}
              onChange={handleFilterChange}
            />
          </span>
          <span>
            <p className="text-xs">MAX</p>
            <input
              type="text"
              className="input rounded-lg w-full h-[30px] px-1"
              name="maxPrice"
              value={queryParams.maxPrice || ""}
              onChange={handleFilterChange}
            />
          </span>
        </div>
      </div>

      {/* Location */}
      {!sellerPage && (
        <div className="rounded-lg bg-light-grey-clr p-4 mt-4">
          <h3 className="text-lg font-semibold">LOCATION</h3>
          <div className="mt-2">
            <select
              name="region"
              onChange={handleFilterChange}
              id="region"
              className="select w-full"
              defaultValue=""
              disabled={isLoadingRegions}
            >
              <option value="">All Locations</option>
              {regions?.map((item, idx) => (
                <option value={item.name} key={idx}>
                  {`${item.lcda} - ${item.name}`}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}

      {/* Category */}
      <div className="rounded-lg bg-light-grey-clr p-4 mt-4">
        <h3 className="text-lg font-semibold">CATEGORY</h3>
        <div className="mt-2">
          <select
            name="category"
            onChange={handleFilterChange}
            id="category"
            className="select w-full"
            defaultValue={queryParams.category || ""}
            disabled={isLoadingCategories}
          >
            <option value="">All Categories</option>
            {categories?.map((item, idx) => (
              <option value={item.slug} key={idx}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Seller */}
      {!sellerPage && (
        <div className="rounded-lg bg-light-grey-clr p-4 mt-4">
          <h3 className="text-lg font-semibold">SELLER</h3>
          <div className="mt-2">
            <select
              name="seller"
              onChange={handleFilterChange}
              id="seller"
              className="select w-full"
              defaultValue=""
              disabled={false}
            >
              <option value="">All Sellers</option>
              <option value="farmer">Farmer</option>
              <option value="wholesaler">Wholesaler</option>
            </select>
          </div>
        </div>
      )}

      {/* Rating */}
      <div className="rounded-lg bg-light-grey-clr p-4 mt-4">
        <h3 className="text-lg font-semibold">RATING</h3>
        <div className="mt-2">
          <div className="rating gap-1">
            {[1, 2, 3, 4, 5].map((_, idx) => (
              <input
                key={idx}
                type="radio"
                name="rating-1"
                className="mask mask-star-2 bg-orange-400"
                // value={idx + 1}
                defaultChecked={idx === 3}
                onChange={handleFilterChange}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Date Posted */}
      <div className="rounded-lg bg-light-grey-clr p-4 mt-4">
        <h3 className="text-lg font-semibold">DATE POSTED</h3>
        <div className="mt-2">
          <label className="label cursor-pointer flex justify-start items-center gap-4">
            <input type="checkbox" defaultChecked className="checkbox" />
            <span className="label-text">Last Week</span>
          </label>
          <label className="label cursor-pointer flex justify-start items-center gap-4">
            <input type="checkbox" className="checkbox scale-75" />
            <span className="label-text">Last Month</span>
          </label>
          <label className="label cursor-pointer flex justify-start items-center gap-4">
            <input type="checkbox" className="checkbox scale-75" />
            <span className="label-text">Last Three Months</span>
          </label>
          <label className="label cursor-pointer flex justify-start items-center gap-4">
            <input type="checkbox" className="checkbox scale-75" />
            <span className="label-text">Last Six Months</span>
          </label>
          <label className="label cursor-pointer flex justify-start items-center gap-4">
            <input type="checkbox" className="checkbox scale-75" />
            <span className="label-text">Last Year</span>
          </label>
        </div>
      </div>

      {/* Clear all filters button */}
      <button
        className="btn btn-sm btn-outline border-orange-clr mt-4 text-orange-clr hover:bg-orange-clr hover:text-white hover:border-orange-clr"
        onClick={handleClearFilters}
      >
        Clear all filters
      </button>
    </div>
  );
}
