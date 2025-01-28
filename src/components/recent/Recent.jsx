import { useGetRecentProducts } from "../../api/product";
import ProductsLoader from "../productsLoader/ProductsLoader";
import Product from "../product/Product";
import EmptyProducts from "../emptyStates/EmptyProducts";

export default function Recent() {
  const recent = JSON.parse(localStorage.getItem("recent"));

  const { isLoading, data: products } = useGetRecentProducts(recent);
  return (
    <div className="contEl mb-12">
      <h3 className="h-100">Your Recent Views</h3>

      <div className="w-full carousel gap-3">
        {isLoading ? (
          <ProductsLoader count={5} />
        ) : products.length > 0 ? (
          products?.map((product, idx) => (
            <div className="w-[200px] carousel-item" key={idx}>
              <Product product={product} />
            </div>
          ))
        ) : (
          <EmptyProducts text="You have not viewed any product" />
        )}
      </div>
    </div>
  );
}
