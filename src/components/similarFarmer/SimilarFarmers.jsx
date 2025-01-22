import Farmer from "./SimilarFarmer";
import FarmerLoader from "../farmerLoader/FarmerLoader";
import { useGetSimilarSellers } from "../../api/seller";

export default function SimilarFarmers({ header, sellerId }) {
  const { isLoading, data: sellers } = useGetSimilarSellers(sellerId);
  return (
    <div className="px-[4vw] max-w-screen-xl mx-auto mb-12">
      <h3 className="text-xl text-black-clr font-semibold mb-2">
        {header || "Buy from Best Selling Farmers"}
      </h3>
      {isLoading ? (
        <FarmerLoader count={4} />
      ) : (
        <div className="gridEl gap-4">
          {sellers
            ?.sort(() => Math.random() - 0.5)
            ?.slice(0, 4)
            ?.map((seller, idx) => (
              <Farmer seller={seller} key={idx} />
            ))}
        </div>
      )}
    </div>
  );
}
