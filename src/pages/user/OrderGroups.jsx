import { Link, useNavigate, useParams } from "react-router-dom";
import { useGetSingleOrder } from "../../api/order";
import PageTitle from "../../utils/pageTitle";
import { useContext } from "react";
import { UserContext } from "../../utils/userContext";
import moment from "moment";
import { FaStar } from "react-icons/fa6";

export default function OrderGroups() {
  const { orderNumber } = useParams();
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  if (!orderNumber) {
    navigate(-1);
    return null;
  }

  const { isLoading, data: orders } = useGetSingleOrder(orderNumber);
  const deliveryStatus = orders?.status || "pending";
  const paymentStatus = orders?.paymentStatus || "pending";
  console.log(orders);

  const productRatings = (product) => {
    const positive = Array.from(
      { length: product?.ratings },
      (_, index) => index
    );
    const empty = Array.from(
      { length: 5 - product?.ratings },
      (_, index) => index
    );

    return { positive, empty };
  };
  return (
    <>
      <PageTitle title={`${user?.name} | Order - ${orderNumber}`} />
      <div className="border-b py-2 md:pt-0">
        <h2 className="font-semibold text-sm md:text-2xl">ORDER HISTORY</h2>
      </div>
      <div className="flex items-center gap-x-10 lg:gap-x-20 gap-y-4 py-4 mb-4 flex-wrap">
        <div className="space-y-2">
          <p className="text-xs">Order Number</p>
          <p className="text-sm font-medium">{orders?.orderNumber}</p>
        </div>

        <div className="space-y-2">
          <p className="text-xs">Payment Status</p>
          <span
            className={`badge text-xs badge-md text-white ${
              paymentStatus.toLowerCase() === "pending"
                ? "badge-warning"
                : paymentStatus.toLowerCase() === "paid"
                ? "badge-success"
                : "badge-error"
            }`}
          >
            {paymentStatus}
          </span>
        </div>

        <div className="space-y-2">
          <p className="text-xs">Order Date</p>
          <p className="text-sm">
            {orders?.createdAt
              ? moment(orders?.createdAt).format("DD MMM yyyy, hh:mm a")
              : ""}
            {/* {orders?.createdAt} */}
          </p>
        </div>

        <div className="space-y-2">
          <p className="text-xs">Delivery Status</p>
          <span
            className={`badge text-xs badge-md text-white ${
              deliveryStatus.toLowerCase() === "pending"
                ? "badge-warning"
                : deliveryStatus.toLowerCase() === "in_transit"
                ? "badge-info"
                : deliveryStatus.toLowerCase() === "delivered"
                ? "badge-success"
                : "badge-error"
            }`}
          >
            {deliveryStatus}
          </span>
        </div>
      </div>

      {/* Order Item List */}
      {orders?.orderGroups?.map((group, idx) => (
        <div
          className="collapse collapse-plus mb-4 border-[1px] border-gray-100 rounded-lg"
          key={idx}
        >
          <input type="radio" name="accordion" />
          {/* Head */}
          <p className="collapse-title h-6 text-sm bg-gray-100">
            Order from - <b className="font-medium">{group?.sellerName}</b>
          </p>
          <div className="collapse-content p-0">
            {/* Content */}
            <div className="p-4">
              {group?.orderItems?.map((item, idx) => (
                <div
                  className="flex justify-between items-center mb-4 last-of-type:mb-0"
                  key={idx}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-20 aspect-square rounded-md overflow-hidden">
                      <img
                        src={item?.image}
                        alt={item?.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-sm">{item?.name}</p>
                      <div className="flex gap-1 items-center text-md text-yellow-300 py-2">
                        {productRatings(item).positive?.map((_, idx) => (
                          <FaStar key={idx} />
                        ))}
                        {productRatings(item).empty?.map((_, idx) => (
                          <FaStar className="text-gray-200" key={idx} />
                        ))}
                      </div>
                      <p className="text-sm">
                        NGN {item?.totalPrice?.toLocaleString()}
                      </p>
                    </div>
                  </div>
                  <Link to={`/products/${item?.slug}`}>
                    <button className="btn btn-sm font-normal hidden lg:flex">
                      View Product
                    </button>
                    <button className="btn btn-sm font-normal lg:hidden">
                      View
                    </button>
                  </Link>
                </div>
              ))}
            </div>
            {/* Footer */}
            <div className="bg-gray-200 p-4 space-y-2">
              <p className="text-sm">
                Logistics Provider -{" "}
                <b className="font-medium">Some Random Provider</b>
              </p>
              <p className="text-sm">
                Est Delivery Date - <b className="font-medium">12 May, 2025</b>
              </p>
              <p className="text-sm">
                Redeem Code - <b className="font-medium">127185</b>
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
