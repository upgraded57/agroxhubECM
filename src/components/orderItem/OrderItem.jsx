import { BiSolidUpArrow, BiSolidDownArrow } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";

export default function OrderItem() {
  const iconStyle =
    "flex items-center justify-center p-2 rounded-md cursor-pointer aspect-square";

  const smIconStyle =
    "btn btn-xs bg-light-grey-clr rounded-sm aspect-square border-none shadow-none w-auto h-auto p-1";
  return (
    <>
      {/* Large screen view */}
      <div className="hidden lg:flex items-center justify-between px-3 lg:px-6 py-2.5 border-b-[1px] border-light-grey-clr gap-5">
        <div className="w-[100px] h-[100px] aspect-square rounded-lg overflow-hidden bg-light-grey-clr">
          <img
            src="https://picsum.photos/200/200"
            alt="Product Image"
            className="w-full h-full object-cover"
          />
        </div>
        <p className="text-lg">Ginger</p>
        <div className="flex items-center gap-3">
          <small className="text-sm">5 Baskets</small>
          <span className={`bg-light-grey-clr ${iconStyle}`}>
            <BiSolidDownArrow className="text-red-400" />
          </span>
          <span className={`bg-light-grey-clr ${iconStyle}`}>
            <BiSolidUpArrow className="text-green-400" />
          </span>
        </div>
        <h2 className="text-lg font-semibold">NGN 4,980</h2>
        <span className={`hover:bg-light-grey-clr ${iconStyle}`}>
          <MdDeleteForever className="text-xl text-red-400" />
        </span>
      </div>

      {/* Small screen view */}
      <div className="flex lg:hidden items-center justify-between px-3 lg:px-6 py-2.5 border-b-[1px] border-light-grey-clr gap-5">
        <div className="w-[60px] h-[60px] aspect-square rounded-lg overflow-hidden">
          <img
            src="https://picsum.photos/200/200"
            alt="Product Image"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 flex items-center justify-between gap-5">
          <div className="flex justify-between flex-col h-full gap-4">
            <p className="text-sm">Ginger</p>
            <p className="text-sm font-semibold">NGN 4,980</p>
          </div>

          <div className="flex justify-between flex-col gap-3 items-end">
            <div
              className="tooltip tooltip-error tooltip-left"
              data-tip="Remove Product"
            >
              <button className="btn btn-xs btn-ghost rounded-sm hover:bg-red-50 aspect-square w-auto h-auto p-1">
                <MdDeleteForever className="text-sm text-red-400" />
              </button>
            </div>
            <div className="flex items-center gap-3">
              <small className="text-xs">5 Baskets</small>
              <button className={smIconStyle}>
                <BiSolidDownArrow className="text-red-400 text-sm" />
              </button>
              <span className={smIconStyle}>
                <BiSolidUpArrow className="text-green-400 text-sm" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
