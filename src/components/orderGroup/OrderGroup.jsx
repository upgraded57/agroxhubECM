import { FaUps } from "react-icons/fa6";
import OrderItem from "../orderItem/OrderItem";

export default function OrderGroup() {
  return (
    <div className="mb-4 border-[1px] border-light-grey-clr rounded-lg overflow-hidden">
      <div className="px-6 py-2 border-b-[1px] border-light-grey-clr">
        <p>
          Store: <b>Kenny Stores</b>
        </p>
      </div>
      {[1, 2, 3, 4].map((_, idx) => (
        <OrderItem key={idx} />
      ))}

      <div className="items-center gap-2 bg-light-grey-clr w-full px-6 py-2">
        <div className="flex items-center justify-between mb-2 border-b-white border-b-[1px] pb-2">
          <p className="text-sm">Logistics</p>
          <p className="link text-xs font-semibold">Change</p>
        </div>

        <div className="label-text flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <div className="w-8 aspect-square text-white flex items-center justify-center rounded-md bg-dark-blue-clr">
              <FaUps className="text-2xl" />
            </div>
            <span>
              <p className="text-sm font-semibold">UPS</p>
              <p className="text-xs">est. delivery date - 29th Jan 2024</p>
              <p className="text-xs">Delivers to - Doorstep</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
