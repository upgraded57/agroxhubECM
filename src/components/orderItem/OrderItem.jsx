import { BiSolidUpArrow, BiSolidDownArrow } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";
import { useUpdateOrderItem } from "../../api/checkout";
import toast from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";
import DeleteDialog from "../deleteDialog/DeleteDialog";

const iconStyle =
  "btn w-auto h-auto btn-sm shadow-none border-none flex items-center justify-center p-2 rounded-md cursor-pointer aspect-square";

const smIconStyle =
  "btn btn-xs bg-light-grey-clr rounded-xs aspect-square border-none shadow-none w-auto h-auto p-1";

export default function OrderItem({ item }) {
  const queryClient = useQueryClient();
  const { mutateAsync: updateQuantity, isLoading } = useUpdateOrderItem();

  const handleItemUpdate = (type) => {
    const itemId = item?.id;
    if (type === "increment" || type === "decrement") {
      updateQuantity({ itemId, type }).then((res) => {
        if (res) {
          queryClient.invalidateQueries(["Order"]);
          queryClient.invalidateQueries(["Orders"]);
        }
      });
    } else {
      toast.error("Unknown update type provided");
    }
  };

  // Extract product data. Doing this to ensure consistency across screens
  const product = {
    name: item?.name,
    image: item?.image,
    quantity: item?.quantity,
    unit: item?.unit,
    totalPrice: item?.totalPrice,
  };

  const handleRemoveItem = () => {
    document.getElementById(`delete_modal_${item.slug}`).showModal();
  };
  return (
    <>
      {/* Large screen view */}
      <div className="hidden lg:flex items-center justify-between px-3 lg:px-6 py-2.5 border-b-[1px] border-light-grey-clr gap-5">
        <div className="flex items-center gap-2 basis-[50%]">
          <div className="w-[100px] h-[100px] aspect-square rounded-lg overflow-hidden bg-light-grey-clr">
            <img
              src={product?.image}
              alt="Product Image"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-lg">{product?.name}</p>
        </div>
        <div className="flex items-center justify-end gap-3 basis-[20%]">
          <small className="text-sm">{`${product?.quantity} ${product?.unit}`}</small>
          <button
            className={`bg-light-grey-clr ${iconStyle}`}
            disabled={isLoading}
            onClick={() => handleItemUpdate("decrement")}
          >
            <BiSolidDownArrow className="text-red-400" />
          </button>
          <button
            className={`bg-light-grey-clr ${iconStyle}`}
            disabled={isLoading}
            onClick={() => handleItemUpdate("increment")}
          >
            <BiSolidUpArrow className="text-green-400" />
          </button>
        </div>
        <div className="flex items-center gap-2">
          <h2 className="text-lg font-semibold">
            NGN {product?.totalPrice?.toLocaleString()}
          </h2>
          <span
            className={`bg-transparent hover:bg-light-grey-clr ${iconStyle}`}
            onClick={handleRemoveItem}
          >
            <MdDeleteForever className="text-xl text-red-400" />
          </span>
        </div>
      </div>

      {/* Small screen view */}
      <div className="flex lg:hidden items-center px-3 lg:px-6 py-2.5 border-b-[1px] border-light-grey-clr gap-2">
        <div className="min-w-[60px] min-h-[60px] w-[60px] h-[60px] aspect-square rounded-lg overflow-hidden">
          <img
            src={product?.image}
            alt="Product Image"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col gap-3 w-full overflow-x-hidden">
          <div className="flex items-center justify-between w-full gap-3">
            <p className="text-sm text-nowrap w-full overflow-hidden text-ellipsis">
              {product?.name}
            </p>
            <button
              className="btn btn-xs btn-ghost rounded-xs hover:bg-red-50 aspect-square w-auto h-auto p-1"
              onClick={handleRemoveItem}
            >
              <MdDeleteForever className="text-sm text-red-400" />
            </button>
          </div>

          <div className="flex items-center justify-between w-full">
            <p className="text-sm font-semibold">
              NGN {product?.totalPrice.toLocaleString()}
            </p>
            <div className="flex items-center gap-3">
              <small className="text-xs text-nowrap">{`${product?.quantity} ${product?.unit}`}</small>
              <button
                className={smIconStyle}
                disabled={isLoading}
                onClick={() => handleItemUpdate("decrement")}
              >
                <BiSolidDownArrow className="text-red-400 text-sm" />
              </button>
              <span
                className={smIconStyle}
                disabled={isLoading}
                onClick={() => handleItemUpdate("increment")}
              >
                <BiSolidUpArrow className="text-green-400 text-sm" />
              </span>
            </div>
          </div>
        </div>
      </div>

      <DeleteDialog item={item} type="order" />
    </>
  );
}
