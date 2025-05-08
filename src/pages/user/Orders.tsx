import { Link } from "react-router-dom";
import { useGetOrders } from "../../api/order";
import Loader from "../../components/loader/Loader";
import EmptyProducts from "../../components/emptyStates/EmptyProducts";
import moment from "moment";
import PageTitle from "../../utils/pageTitle";
import { useContext } from "react";
import { UserContext } from "../../utils/userContext";

export default function Orders() {
  const { isLoading, data: orders } = useGetOrders();
  const { user } = useContext(UserContext);

  return (
    <>
      <PageTitle title={`${user?.name} | Orders`} />
      <div className="flex items-center justify-between border-b py-2 md:pt-0">
        <h2 className="font-semibold text-sm md:text-2xl">ORDER HISTORY</h2>
        <select className="select select-xs uppercase font-normal">
          <option>All</option>
          <option>Pending</option>
          <option>Delivered</option>
          <option>Pending Review</option>
          <option>Rejected</option>
        </select>
      </div>

      {/* Products List */}
      {isLoading ? (
        <Loader />
      ) : orders && orders?.length > 0 ? (
        orders?.map((order, idx) => {
          const paymentStatusBadgeColor =
            order?.paymentStatus === "paid"
              ? "dark-green-clr"
              : order?.paymentStatus === "pending"
              ? "yellow-clr"
              : "red-clr";
          return (
            <Link
              to={order?.orderNumber}
              key={idx}
              className="grid grid-cols-2 gap-y-4 gap-x-4 justify-between lg:gap-y-0 lg:flex items-center p-2 border-b-[1px] last-of-type:border-none hover:bg-light-grey-clr"
            >
              <div className="lg:basis-[30%] lg:space-y-3">
                <p className="text-xs text-grey-clr">Order Number</p>
                <p className="text-sm">{order?.orderNumber}</p>
              </div>
              <div className="lg:basis-[20%] lg:space-y-3">
                <p className="text-xs text-grey-clr">Payment Status</p>
                <span
                  className={`badge text-xs text-white border-none bg-${paymentStatusBadgeColor}`}
                >
                  {order?.paymentStatus}
                </span>
              </div>
              <div className="lg:basis-[20%] lg:space-y-3">
                <p className="text-xs text-grey-clr">Products</p>
                <p className="text-sm">{order?.products.length}</p>
              </div>
              <div className="lg:basis-[30%] lg:space-y-3">
                <p className="text-xs text-grey-clr">Order Date</p>
                <p className="text-sm">
                  {moment(order?.createdAt).format("DD MMM YYYY, h:mm a")}
                </p>
              </div>
            </Link>
          );
        })
      ) : (
        <EmptyProducts text="You have no orders yet!" />
      )}
    </>
  );
}

{
  /* <div
  key={idx}
  className="orderedProduct flex items-center justify-between px-2 py-4 border-b"
>
  <div className="flex items-center gap-2">
    <div className="w-[100px] md:w-[130px] aspect-square rounded-md overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1518736114810-3f3bedfec66a?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmFybSUyMHByb2R1Y2V8ZW58MHx8MHx8fDA%3D"
        alt="Procuct Image"
        className="w-full h-full object-cover"
      />
    </div>
    <div className="block">
      <h3 className="font-normal text-lg md:text-2xl">
        Fresh Tomatoes
      </h3>
      <div className="hidden md:flex gap-1 items-center text-md text-yellow-300">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar className="text-gray-200" />
      </div>
      <h2 className="text-lg md:text-2xl font-semibold">NGN 5,600</h2>
      <p className="text-sm">Order date - 23rd October, 2023</p>
      <div className="flex items-center gap-2">
        <button className="btn btn-sm bg-light-green-clr border-light-green-clr font-normal text-white hover:bg-dark-green-clr hover:border-dark-green-clr">
          DELIVERED
        </button>
        <Link
          to="/user/orders/product/1234/review"
          className="btn btn-sm border-orange-clr border-2 btn-outline text-orange-clr font-normal hover:bg-orange-clr hover:text-white hover:border-transparent "
        >
          REVIEW
        </Link>
      </div>
    </div>
  </div>

  <Link
    to="/products/1234"
    className="btn green-gradient hidden md:flex"
  >
    View Product
  </Link>
</div> */
}
