import { MdDeleteForever } from "react-icons/md";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";
import { CartContext } from "../../utils/cartContext";
import { useContext } from "react";

export default function CartItem({ item }) {
  const removeFromCart = useContext(CartContext).removeFromCart;

  const handleRemovefromCart = (e) => {
    e.preventDefault();
    removeFromCart(item.slug);
    document.getElementById(`delete_modal_${item.slug}`).close();
  };
  return (
    <div className="flex justify-between items-center gap-2">
      <div className="min-w-[100px] w-[100px] md:w-[130px] aspect-square rounded-md overflow-hidden bg-gray-200">
        <img
          src={item.image}
          alt="Poduct Image"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="md:basis-3/5 flex w-full flex-col md:flex-row md:justify-between items-start md:items-center">
        <h4 className="text-lg md:text-2xl">{item.name}</h4>
        <h3 className="text-lg md:text-2xl font-semibold">
          NGN {item.price.toLocaleString()}
        </h3>
        <div className="flex items-center gap-3">
          <p className="text-sm">Qty</p>
          <div className="join">
            <button className="btn btn-sm join-item">
              <IoMdArrowDropup />
            </button>
            <span className="input input-sm border-r-0 border-l-0 input-bordered rounded-none">
              {item.quantity} {item.unit}
            </span>
            <button className="btn btn-sm join-item">
              <IoMdArrowDropdown />
            </button>
          </div>
        </div>
      </div>

      <button
        className="btn btn-ghost text-red-clr"
        onClick={() =>
          document.getElementById(`delete_modal_${item.slug}`).showModal()
        }
      >
        <MdDeleteForever className="text-2xl" />
      </button>
      <dialog id={`delete_modal_${item.slug}`} className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Confirm Delete</h3>
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
    </div>
  );
}
