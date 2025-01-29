import { useContext } from "react";
import { CartContext } from "../../utils/cartContext";

const DeleteDialog = ({ item }) => {
  const removeFromCart = useContext(CartContext).removeFromCart;

  const handleRemovefromCart = (e) => {
    e.preventDefault();
    removeFromCart(item.slug);
    document.getElementById(`delete_modal_${item.slug}`).close();
  };
  return (
    <dialog id={`delete_modal_${item.slug}`} className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Confirm Removal</h3>
        <p className="py-4">
          Are you sure you want to remove <b>{item.name}</b> from your cart?
        </p>
        <div className="modal-action">
          <form method="dialog">
            <div className="flex items-center gap-2">
              <button className="btn">No, Cancel</button>
              <button
                className="btn bg-red-clr text-white hover:bg-red-700 border-transparent hover:border-transparent"
                onClick={handleRemovefromCart}
              >
                Yes, Remove
              </button>
            </div>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default DeleteDialog;
