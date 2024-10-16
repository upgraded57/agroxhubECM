import CartItem from "./CartItem";
import { FaUps } from "react-icons/fa";
import { useState } from "react";
import DeliveryAddressModal from "../../components/deliveryAddressModal/DeliveryAddressModal";

export default function Cart() {
  const [deliveryModalSelectorActive, setDeliveryModalSelectorActive] =
    useState(false);
  return (
    <>
      <h2 className="text-lg md:text-2xl font-semibold uppercase text-center my-12">
        shopping cart
      </h2>

      <div className="contEl mb-12">
        {[1, 2, 3, 4, 5, 6, 7].map((_, idx) => (
          <div className="pb-6 border-b" key={idx}>
            <CartItem />
          </div>
        ))}

        <div className="block md:my-12 md:flex gap-4">
          <div className="basis-3/5 mb-6 md:mb-0">
            <div className="w-full border rounded-lg">
              <p className="text-sm font-semibold p-2 uppercase border-b">
                delivery options
              </p>

              <div className="text-sm p-4 flex items-center gap-2 border-b">
                <p>
                  Deliver to - <b className="font-semibold">Ajegunle Alakuko</b>
                </p>
                <p
                  className="text-orange-clr font-semibold cursor-pointer hover:underline"
                  onClick={() => setDeliveryModalSelectorActive(true)}
                >
                  (Change)
                </p>
              </div>

              {[1, 2, 3, 4].map((_, idx) => (
                <div className="form-control pr-2" key={idx}>
                  <label className="label justify-between gap-2 cursor-pointer">
                    <div className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="logisticsProvider"
                        className="radio scale-75"
                      />
                      <div className="label-text flex justify-between items-center">
                        <div className="flex gap-2 items-center">
                          <div className="w-8 aspect-square text-white flex items-center justify-center rounded-md bg-dark-blue-clr">
                            <FaUps className="text-2xl" />
                          </div>
                          <span>
                            <p className="text-sm font-semibold">UPS</p>
                            <p className="text-xs">
                              est. delivery date - 29th Jan 2024
                            </p>
                            <p className="text-xs">Delivers to - Doorstep</p>
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm font-semibold">NGN 1,320</p>
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="basis-2/5">
            <div className="w-full border rounded-lg">
              <p className="text-sm font-semibold p-2 uppercase border-b">
                order summary
              </p>

              <div className="p-4">
                <span className="flex items-center justify-between mb-4">
                  <p className="text-sm">Products Price</p>
                  <p className="text-sm font-semibold">NGN 38,460</p>
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

              <div className="border-t border-b block p-4">
                <p className="text-sm">Promo Code</p>
                <div className="flex items-center gap-2">
                  <input
                    className="input input-sm input-bordered border-2 rounded-md"
                    placeholder="Email"
                  />
                  <button className="btn btn-sm btn-outline uppercase rounded-md border-2 border-orange-clr text-orange-clr hover:text-white hover:bg-orange-clr hover:border-orange-clr">
                    apply
                  </button>
                </div>
              </div>

              <div className="flex p-4 items-center justify-center">
                <button className="btn green-gradient w-full uppercase">
                  proceed to checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {deliveryModalSelectorActive && (
        <DeliveryAddressModal setState={setDeliveryModalSelectorActive} />
      )}
    </>
  );
}
