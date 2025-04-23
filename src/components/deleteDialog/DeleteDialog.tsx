import { useContext } from "react";
import { CartContext } from "../../utils/cartContext";
import { useUpdateOrderItem } from "../../api/checkout";
import { useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

const DeleteDialog = ({ item, type }) => {
  const { removeFromCart, isRemovingItem } = useContext(CartContext);

  const handleRemoveFromCart = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    removeFromCart(item.slug);
    const modalElement = document.getElementById(
      `delete_modal_${item.slug}`
    ) as HTMLDialogElement | null;
    if (modalElement) {
      modalElement.close();
    }
  };

  const queryClient = useQueryClient();
  const { mutateAsync: updateQuantity, isLoading: isRemovingFromOrder } =
    useUpdateOrderItem();

  const handleItemUpdate = (type: string) => {
    const itemId = item?.id;
    if (type === "delete") {
      updateQuantity({ itemId, type }).then((res) => {
        if (res) {
          queryClient.invalidateQueries(["Order"]);
        }
      });
    } else {
      toast.error("Unknown update type provided");
    }
  };
  return (
    <dialog id={`delete_modal_${item.slug}`} className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Confirm Removal</h3>
        <p className="py-4">
          Are you sure you want to remove <b>{item.name}</b> from your{" "}
          {type === "cart" ? "cart" : "order"}?
        </p>
        <div className="modal-action">
          <form method="dialog">
            <div className="flex items-center gap-2">
              <button className="btn" disabled={isRemovingItem}>
                No, Cancel
              </button>
              <button
                className="btn bg-red-clr text-white hover:bg-red-700 border-transparent hover:border-transparent"
                onClick={
                  type === "cart"
                    ? handleRemoveFromCart
                    : () => handleItemUpdate("delete")
                }
                disabled={isRemovingItem || isRemovingFromOrder}
              >
                {isRemovingItem ? (
                  <span className="loading loading-dots" />
                ) : (
                  "Yes, Remove"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default DeleteDialog;
