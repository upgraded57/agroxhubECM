import { Link } from "react-router-dom";
import Product from "../product/Product";
import { FaArrowRightLong } from "react-icons/fa6";
import { useGetProducts } from "../../api/product";
import ProductsLoader from "../productsLoader/ProductsLoader";

export default function ProductsList({ header, category }) {
  const filter = new URLSearchParams({
    category,
  });

  const { isLoading, data } = useGetProducts(filter || null);
  const products = data?.pages[0]?.products;
  return (
    <div className="contEl mb-12">
      <div className="flex items-center justify-between">
        <h3 className=" h-100">{header}</h3>
        <Link
          to={`/products?category=${category}`}
          className="flex items-center gap-3 hover:underline"
        >
          <p className="text-sm peer">See More</p>
          <FaArrowRightLong className="text-dark-green-clr peer-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
      {isLoading ? (
        <ProductsLoader count={4} />
      ) : (
        <div className="gridEl w-full">
          {products
            // ?.sort(() => Math.random() - 0.5)
            ?.slice(0, 4)
            ?.map((product, idx) => (
              <Product product={product} key={idx} />
            ))}
        </div>
      )}
    </div>
  );
}
