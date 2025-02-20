import { PiHandCoins } from "react-icons/pi";
import { CiDeliveryTruck, CiCreditCard1 } from "react-icons/ci";
import { HiOutlineMegaphone } from "react-icons/hi2";
import { BsShop } from "react-icons/bs";
import { useGetNotifications } from "../../api/notification";
import Notification from "../../components/notification/Notification";
import Loader from "../../components/loader/Loader";
import { useState } from "react";

const notifs = [
  {
    id: 1,
    type: "cashback",
    content:
      "Congratulations. You have earned NGN 3.00 cashback on your purchase of Fresh Tomatoes. Click to view all available cashback.",
    date: "Oct 23, 2023. 08:16AM",
    icon: PiHandCoins,
  },

  {
    id: 2,
    type: "delivery update",
    content:
      "Your order of Ginger is on its way! Click here to track your order and see the estimated delivery date.",
    date: "Oct 25, 2023. 12:10PM",
    icon: CiDeliveryTruck,
  },

  {
    id: 3,
    type: "payment method",
    content:
      "Your card - MasterCard 0224 **** **** **** 0124 has expired. Click to add a new card, delete the expired one and manage your payment methods.",
    date: "Oct 23, 2023. 08:16AM",
    icon: CiCreditCard1,
  },

  {
    id: 4,
    type: "promotion",
    content:
      "You might like some of these products. Check them out now before they are out of stock",
    date: "Oct 23, 2023. 08:16AM",
    icon: HiOutlineMegaphone,
  },

  {
    id: 5,
    type: "follow",
    content:
      "Adex Farm, a seller you follow has just posted a new product. Be the first to check it out.",
    date: "Oct 23, 2023. 08:16AM",
    icon: BsShop,
  },

  {
    id: 6,
    type: "cashback",
    content:
      "Congratulations. You have earned NGN 3.00 cashback on your purchase of Fresh Tomatoes. Click to view all available cashback.",
    date: "Oct 23, 2023. 08:16AM",
    icon: PiHandCoins,
  },
];

export default function Notifications() {
  const [status, setStatus] = useState("all");
  const { isLoading, data: notifications } = useGetNotifications();
  return (
    <>
      <div className="hidden md:flex items-center justify-between border-b py-2 md:pt-0">
        <h2 className="font-semibold text-sm md:text-2xl">NOTIFICATIONS</h2>
        <select
          className="select select-xs uppercase font-normal"
          onChange={(e) => setStatus(e.target.value.toLowerCase())}
        >
          <option>All</option>
          <option>Read</option>
          <option>Unread</option>
        </select>
      </div>

      {isLoading ? (
        <Loader />
      ) : notifications?.length < 1 ? (
        <div className=" flex items-center justify-center w-full py-10 border-[1px] rounded-lg my-10">
          <p className="text-sm py-10 text-center">
            You have no new notifications!
          </p>
        </div>
      ) : (
        notifications
          ?.filter((item) => {
            if (status === "unread") {
              return item.unread;
            } else {
              return item;
            }
          })
          ?.map((notif, idx) => <Notification item={notif} key={idx} />)
      )}

      {/* <div className="flex w-full items-center justify-center mt-4 mb-12">
        <button className="btn border-2 btn-outline border-orange-clr text-orange-clr uppercase hover:bg-orange-clr hover:border-orange-clr hover:text-white">
          mark all as read
        </button>
      </div> */}
    </>
  );
}
