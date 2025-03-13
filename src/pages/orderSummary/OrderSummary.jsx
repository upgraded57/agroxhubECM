import { useContext } from "react";
import { CartContext } from "../../utils/cartContext";
import OrderGroup from "../../components/orderGroup/OrderGroup";

export default function OrderSummary() {
  const cartItems = useContext(CartContext).cart;

  return (
    <>
      <div className="text-center my-12">
        <h2 className="text-lg md:text-2xl font-semibold uppercase">
          checkout
        </h2>
        <p className="text-sm">Please review your order before checkout</p>
      </div>

      <div className="contEl mb-12 lg:flex gap-4 relative">
        <div className="basis-2/3">
          {[1, 2].map((_, idx) => (
            <OrderGroup key={idx} />
          ))}
        </div>

        <div className="basis-1/3 lg:sticky lg:top-[80px] flex-grow-0 self-start">
          {/* Additional Information */}
          <div className="p-6 bg-light-grey-clr rounded-lg mb-4">
            <p className="text-sm text-center font-semibold uppercase">
              Additional Information
            </p>

            <span className="block my-6">
              <p className="text-xs mb-2">Note to Sellers</p>
              <input
                type="text"
                name="note_to_seller"
                id="note_to_seller"
                className="input w-full"
              />
            </span>

            <span>
              <p className="text-xs mb-2">Note to Logistic Providers</p>
              <input
                type="text"
                name="note_to_seller"
                id="note_to_seller"
                className="input w-full"
              />
            </span>
          </div>

          {/* Delivery Information */}
          <div className="p-6 bg-light-grey-clr rounded-lg mb-4">
            <p className="text-sm text-center font-semibold uppercase">
              Delivery Information
            </p>

            <span className="block my-6">
              <p className="text-xs">Delivery Region</p>
              <p className="font-medium">
                Lagos State, Kosofe LCDA, Ajegunle Region
              </p>
            </span>

            <span className="block my-6">
              <p className="text-xs">Delivery Address</p>
              <p className="font-medium">18, Taiwo Street, Ajegunle Alakuko</p>
            </span>
          </div>

          {/* Order Summary */}
          <div className="p-6 bg-light-grey-clr rounded-lg mb-4">
            <p className="text-sm font-semibold text-center uppercase mb-6">
              order summary
            </p>

            <div className="mb-6">
              <span className="flex items-center justify-between mb-4">
                <p className="text-sm">Products Price</p>
                <p className="text-sm font-semibold">NGN 23,041</p>
              </span>
              <span className="flex items-center justify-between my-4">
                <p className="text-sm">Logistic Cost</p>
                <p className="text-sm font-semibold">NGN 1,740</p>
              </span>
              <span className="flex items-center justify-between mt-4">
                <p className="text-sm">Total Cost</p>
                <p className="text-sm font-semibold">NGN 40,000</p>
              </span>
            </div>

            <div className="mb-6 w-full">
              <p className="text-sm">Promo Code</p>
              <div className="flex items-center gap-2">
                <input
                  className="input input-sm input-bordered border-2 rounded-md w-full"
                  placeholder="Email"
                />
                <button className="btn btn-sm btn-outline bg-white uppercase rounded-md border-2 border-orange-clr text-orange-clr hover:text-white hover:bg-orange-clr hover:border-orange-clr">
                  apply
                </button>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="btn green-gradient w-full uppercase">
                proceed to pay with paystack
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
