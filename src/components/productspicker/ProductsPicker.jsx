import { BiSolidHot } from "react-icons/bi";
import { useGetProductCategories } from "../../api/product";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ProductsPicker() {
  const roundedBtnStyle = "btn btn-circle btn-sm p-1 bg-yellow-clr";
  const { isLoading, data: categories = [] } = useGetProductCategories(); // Default to an empty array
  const [randomCategories, setRandomCategories] = useState([]);

  const getRandomItems = (array) => {
    const shuffled = [...array].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 20);
  };

  useEffect(() => {
    if (!isLoading && categories.length) {
      setRandomCategories(getRandomItems(categories));
    }
  }, [isLoading, categories]);

  return (
    <div className="contEl mb-12">
      <div className="carousel gap-4 w-full">
        {isLoading
          ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((_, idx) => (
              <div
                key={idx}
                className="carousel-item carousel-start btn font-normal skeleton bg-gray-100 hover:bg-gray-200"
              >
                <div className="w-14 h-3 rounded-md bg-white"></div>
                <BiSolidHot className="btn btn-circle btn-sm p-1 bg-white text-gray-200" />
              </div>
            ))
          : randomCategories.map((category, idx) => (
              <Link
                to={`/products?category=${category.slug}`}
                className="carousel-item carousel-start btn font-normal"
                key={idx}
              >
                {category.name}
                <BiSolidHot className={roundedBtnStyle} />
              </Link>
            ))}
      </div>
    </div>
  );
}
