import BeASeller from "../../components/beaseller/BeASeller";
import { FaStar } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import {
  useCheckIsFollowing,
  useFollowSeller,
  useGetSeller,
  useGetSellerMostPurchasedProducts,
  useGetSellerNewestProducts,
} from "../../api/seller";
import noAvatar from "../../assets/images/noAvatar.jpeg";
import moment from "moment";
import { useEffect } from "react";
import ProductsGrid from "../../components/productsGrid/ProductsGrid";
import SimilarFarmers from "../../components/similarFarmer/SimilarFarmers";
import { useGetUser } from "../../api/user";
import { useQueryClient } from "@tanstack/react-query";
import PageTitle from "../../utils/pageTitle";

export default function SellerPage() {
  const userId = localStorage.getItem("userId") || null;
  const queryClient = useQueryClient();

  const { isLoading: isLoadingUser, data: user } = useGetUser(userId);
  const isBuyer = user && user?.type === "buyer";
  const { sellerId } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (!sellerId) {
      navigate("/products");
    }
  }, []);
  const { isLoading, data: seller } = useGetSeller(sellerId);
  const { isLoading: isLoadingSellerProducts, data: sellerProducts } =
    useGetSellerMostPurchasedProducts(sellerId);

  const {
    isLoading: isLoadingSellerNewestProducts,
    data: farmerNewestProducts,
  } = useGetSellerNewestProducts(sellerId);

  const summary = [
    {
      title: "Products",
      qty: seller?._count.products || 0,
    },
    {
      title: "Sales",
      qty: 205,
    },
    {
      title: "Orders",
      qty: 205,
    },
    {
      title: "Cart",
      qty: 205,
    },
    {
      title: "Reviews",
      qty: 205,
    },
    {
      title: "Followers",
      qty: 205,
    },
  ];

  const {
    isLoading: isCheckingFollowing,
    data: isFollowing,
    isFetching: isFetchingFollowing,
  } = useCheckIsFollowing(sellerId);

  const { mutateAsync: followSeller, isLoading: isLoadingFollowSeller } =
    useFollowSeller();

  const handleFollowSeller = () => {
    followSeller(sellerId).then((res) => {
      if (res) {
        queryClient.invalidateQueries({
          queryKey: ["isFollowing", sellerId],
        });
      }
    });
  };

  useEffect(() => {
    if (seller) {
      document.title = `${seller.name} store on Agroxhub`;
    }
  }, [seller]);
  return (
    <>
      <PageTitle
        title={
          seller
            ? `${seller?.name}'s store on Agroxhub`
            : "Buy from sellers on Agruxhub"
        }
      />
      {/* profile header */}
      <div className="h-[170px] md:h-[312px] overflow-hidden bg-gray-200">
        {isLoading ? (
          <div className="skeleton w-full h-full" />
        ) : seller?.coverImg ? (
          <img
            src={seller.coverImg}
            alt="Seller Cover Picture"
            className="w-full h-full object-cover"
          />
        ) : (
          ""
        )}
      </div>

      {/* Profile overview */}
      <div className="flex flex-col md:flex-row justify-between contEl md:items-center relative -translate-y-6 md:-translate-y-12">
        <div className="flex gap-3 items-end md:items-center">
          <div className="w-[100px] md:w-[200px] aspect-square border-[5px] border-white rounded-full overflow-hidden">
            {isLoading ? (
              <div className="skeleton w-full h-full" />
            ) : (
              <img
                src={seller?.avatar || noAvatar}
                alt="Seller Profile Image"
                className="w-full h-full object-cover"
              />
            )}
          </div>
          <span>
            {isLoading ? (
              <div className="w-40 h-4 skeleton rounded-md" />
            ) : (
              <h3 className="text-lg md:text-2xl font-semibold">
                {seller?.name}
              </h3>
            )}
            <p className="text-xs md:text-sm text-grey-clr">{seller?.type}</p>
            <p className="text-xs md:text-sm text-grey-clr">
              Seller since - {moment(seller?.createdAt).format("YYYY")}
            </p>
            <div className="flex items-center gap-2">
              <FaStar className="text-md text-yellow-300" />
              <FaStar className="text-md text-yellow-300" />
              <FaStar className="text-md text-yellow-300" />
              <FaStar className="text-md text-yellow-300" />
              <FaStar className="text-md text-gray-300" />
            </div>
          </span>
        </div>
        <div className="flex items-center gap-2 mt-4">
          {isBuyer && (
            <button
              className={`btn btn-sm ${
                isFollowing
                  ? "bg-transparent text-yellow-clr border-2 border-yellow-clr hover:border-2 hover:border-yellow-clr hover:bg-yellow-clr hover:text-white"
                  : "green-gradient"
              } uppercase`}
              disabled={
                !user ||
                isLoadingUser ||
                isCheckingFollowing ||
                isLoadingFollowSeller ||
                isFetchingFollowing
              }
              onClick={handleFollowSeller}
            >
              {isCheckingFollowing ||
              isLoadingFollowSeller ||
              isFetchingFollowing ||
              isLoadingUser ? (
                <span className="loading loading-dots" />
              ) : isFollowing ? (
                "unfollow"
              ) : (
                "follow"
              )}
            </button>
          )}
          <button className="btn uppercase btn-sm btn-outline border-2 border-red-clr text-red-clr hover:text-white hover:bg-red-clr hover:border-red-clr">
            report
          </button>
        </div>
      </div>

      {/* Seller review */}
      <div className="w-full bg-light-grey-clr mt-6 mb-12 py-4">
        <div className="contEl">
          <div role="tablist" className="tabs tabs-bordered">
            <input
              type="radio"
              name="my_tabs_1"
              role="tab"
              className="tab after:w-[max-content] font-semibold"
              aria-label="Seller Analytics"
              defaultChecked
            />
            <div role="tabpanel" className="tab-content">
              <div className="block items-center gap-8 justify-around py-2">
                {summary.map((item, idx) => (
                  <span className="block pt-2" key={idx}>
                    <p className="text-sm font-semibold">{item.title}</p>
                    <p className="text-sm">{item.qty}</p>
                  </span>
                ))}
              </div>
            </div>

            <input
              type="radio"
              name="my_tabs_1"
              role="tab"
              className="tab  after:w-[max-content] font-semibold"
              aria-label="Reviews"
            />
            <div role="tabpanel" className="tab-content">
              <div className="block items-center gap-8 justify-around py-2">
                <span className="block pt-2">
                  <p className="text-sm font-semibold">VIEWS</p>
                  <p className="text-sm">205</p>
                </span>
                <span className="block pt-2">
                  <p className="text-sm font-semibold">CARTS</p>
                  <p className="text-sm">88</p>
                </span>
                <span className="block pt-2">
                  <p className="text-sm font-semibold">SAVES</p>
                  <p className="text-sm">189</p>
                </span>
                <span className="block pt-2">
                  <p className="text-sm font-semibold">ORDERS</p>
                  <p className="text-sm">35</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Products */}
      <ProductsGrid
        header="Most Purchased Products"
        products={sellerProducts}
        isLoading={isLoadingSellerProducts}
        moreLink={`/seller/${sellerId}/products`}
      />
      <ProductsGrid
        header="Newest Products"
        isLoading={isLoadingSellerNewestProducts}
        products={farmerNewestProducts}
        moreLink={`/seller/${sellerId}/products`}
      />
      {/* <ProductsGrid header="Most Viewed Products" /> */}
      <SimilarFarmers header="View Similar Sellers" sellerId={sellerId} />
      <BeASeller />
    </>
  );
}
