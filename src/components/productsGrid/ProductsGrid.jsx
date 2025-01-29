import { Link } from "react-router-dom";
import Product from "../product/Product";
import { FaArrowRightLong } from "react-icons/fa6";
import ProductsLoader from "../productsLoader/ProductsLoader";

export default function ProductsGrid({
  header,
  isLoading,
  products,
  moreLink,
}) {
  const getRandomItems = (array) => {
    const shuffled = [...array].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 4);
  };

  const randomProducts = getRandomItems(products || []);
  return (
    <div className="contEl mb-12">
      <div className="flex items-center justify-between">
        <h3 className=" h-100">{header}</h3>
        {moreLink && products?.length > 0 && (
          <Link
            to={moreLink}
            className="flex items-center gap-3 hover:underline"
          >
            <p className="text-sm peer">See More</p>
            <FaArrowRightLong className="text-dark-green-clr peer-hover:translate-x-1 transition-transform" />
          </Link>
        )}
      </div>
      {isLoading ? (
        <ProductsLoader count={4} />
      ) : (
        <div className="gridEl w-full">
          {randomProducts?.map((product, idx) => (
            <Product product={product} key={idx} />
          ))}
        </div>
      )}
    </div>
  );
}
