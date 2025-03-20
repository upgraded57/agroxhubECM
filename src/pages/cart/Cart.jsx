import CartItem from "./CartItem";
import { Fragment, useContext, useEffect, useState, useRef } from "react";
import { CartContext } from "../../utils/cartContext";
import EmptyProducts from "../../components/emptyStates/EmptyProducts";
import { useGetRegions } from "../../api/region";
import toast from "react-hot-toast";
import { useGetUser } from "../../api/user";
import { Link, useNavigate } from "react-router-dom";
import { useCreateOrder } from "../../api/checkout";
import { useQueryClient } from "@tanstack/react-query";
import PageTitle from "../../utils/pageTitle";

export default function Cart() {
  const queryClient = useQueryClient();
  const customAddressRef = useRef("");
  const customRegionRef = useRef("");
  const navigate = useNavigate();
  const cartItems = useContext(CartContext).cart;
  const { isLoading: isLoadingRegions, data: regions } = useGetRegions();
  const [selectedRegion, setSelectedRegion] = useState({
    state: null,
    lcda: null,
    selectedLcda: null,
    region: null,
    selectedRegion: null,
  });

  // document.title = "Cart | Agroxhub";

  // Fetch user info
  const { isLoading: isLoadingUser, data: user } = useGetUser(
    localStorage.getItem("userId")
  );

  const { mutateAsync: createOrder, isLoading: isCreatingOrder } =
    useCreateOrder();

  const [deliveryInfo, setDeliveryInfo] = useState({
    type: null, // either default or custom
    address: "", // address to deliver product to
    regionId: null, // id of selected delivery region
  });

  // Set selected lcda
  useEffect(() => {
    if (regions) {
      const selected = [...new Set(regions.map((region) => region.lcda))];

      setSelectedRegion((prev) => ({
        ...prev,
        lcda: selected,
      }));
    }
  }, [selectedRegion.state]);

  // Set selected region
  useEffect(() => {
    if (selectedRegion.selectedLcda) {
      const selected = regions.filter(
        (item) => item.lcda === selectedRegion.selectedLcda
      );

      setSelectedRegion((prev) => ({
        ...prev,
        region: selected,
      }));
    }
  }, [selectedRegion.selectedLcda]);

  // Calculate total price
  const totalPrice = () => {
    let price = 0;
    cartItems?.map((item) => {
      price += item.price;
    });
    return price;
  };

  const handleRouteToLogin = () => {
    const currentLocation = window.location.pathname;
    navigate(`/auth/login?from=${currentLocation}`);
  };

  const handleSetRegion = (e) => {
    setSelectedRegion((prev) => ({
      ...prev,
      selectedRegion: e.target.value,
    }));

    setDeliveryInfo((prev) => ({
      ...prev,
      regionId: e.target.value,
    }));
  };

  const setDelivery = () => {
    if (deliveryInfo.type === "default") {
      setDeliveryInfo((prev) => ({
        ...prev,
        address: user?.address,
        regionId: user?.region?.id,
      }));
    }

    if (deliveryInfo.type === "custom") {
      setDeliveryInfo((prev) => ({
        ...prev,
        address: customAddressRef.current.value,
        regionId: customRegionRef.current.value,
      }));
    }
  };

  const handleCheckout = () => {
    if (!deliveryInfo.type) {
      toast.error("Please choose a delivery option", { id: "cartToast" });
      return;
    }

    setDelivery();

    if (!deliveryInfo.regionId) {
      toast.error("Please select a delivery region", { id: "cartToast" });
      return;
    }

    if (!deliveryInfo.address) {
      toast.error("Please enter a delivery address", { id: "cartToast" });
      return;
    }

    createOrder({
      deliveryAddress: deliveryInfo.address,
      deliveryRegionId: deliveryInfo.regionId,
      cartId: cartItems?.[0]?.cartId,
    }).then((res) => {
      if (res) {
        queryClient.invalidateQueries(["Order"]);
        queryClient.invalidateQueries(["Orders"]);
        navigate(`/checkout/${res.data.order.orderNumber}`);
      } else {
        toast.error("Something went wrong. Please retry");
      }
    });
  };

  return (
    <>
      <PageTitle title={`Shopping Cart | ${user?.name}`} />
      <h2 className="text-lg md:text-2xl font-semibold uppercase text-center my-12">
        shopping cart
      </h2>

      <div className="contEl mb-12">
        {cartItems && cartItems?.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <th></th>
                  <th>Product Name</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cartItems?.map((item, idx) => (
                  <CartItem item={item} key={idx} />
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <EmptyProducts text="Your cart is empty. Try adding products to your cart" />
        )}

        <div className="block my-12 md:flex gap-4">
          {/* Delivery Address */}
          <div className="basis-3/5 mb-6 md:mb-0">
            <div className="w-full border rounded-lg">
              <p className="text-sm font-semibold p-2 uppercase border-b">
                delivery location
              </p>

              {user ? (
                <Fragment>
                  <div className="w-full rounded-lg h-auto bg-white">
                    <div className="px-4">
                      {/* Default Delivery Address */}
                      <div className="form-control py-2 border-b">
                        <label className="label cursor-pointer items-start justify-start gap-2">
                          <input
                            type="radio"
                            name="deliveryAddress"
                            className="radio radio-sm md:radio-md checked:bg-orange-clr"
                            disabled={
                              !user || !user?.address || !user?.regionId
                            }
                            onClick={() =>
                              setDeliveryInfo((prev) => ({
                                ...prev,
                                type: "default",
                              }))
                            }
                          />
                          <div>
                            <span className="label-text flex flex-col md:flex-row md:gap-2 md:items-center">
                              <p className="text-sm">Default location</p>
                              <p className="text-sm font-semibold">
                                {user?.address}
                              </p>
                            </span>
                            {user?.address && user?.regionId ? (
                              <p className="text-sm pt-2">
                                State - {user?.region?.state} <br /> LCDA -{" "}
                                {user?.region?.lcda}
                                <br /> Region - {user?.region?.name}
                              </p>
                            ) : (
                              <p className="text-sm pt-2">
                                <i>
                                  Set your region and address in edit profile to
                                  choose this option
                                </i>
                              </p>
                            )}
                          </div>
                        </label>
                      </div>

                      {/* Custom Delivery Address */}
                      <div className="form-control py-2">
                        <label className="label w-full items-start cursor-pointer gap-2">
                          <input
                            type="radio"
                            name="deliveryAddress"
                            className="radio radio-sm md:radio-md checked:bg-orange-clr"
                            onClick={() =>
                              setDeliveryInfo((prev) => ({
                                ...prev,
                                type: "custom",
                              }))
                            }
                          />
                          <div className="label-text w-full">
                            <p className="text-sm mb-4">Custom Location</p>
                            <div className="flex flex-col lg:flex-row items-center gap-6 mb-6 w-full">
                              <label htmlFor="state" className="block w-full">
                                <p className="text-sm uppercase">
                                  State of residence
                                </p>
                                <select
                                  className="select select-bordered w-full"
                                  defaultValue=""
                                  name="state"
                                  disabled={
                                    isLoadingRegions ||
                                    !regions ||
                                    regions?.length < 1
                                  }
                                  onChange={(e) =>
                                    setSelectedRegion((prev) => ({
                                      ...prev,
                                      state: e.target.value,
                                    }))
                                  }
                                >
                                  <option value="" disabled>
                                    -- Select State --
                                  </option>
                                  <option value="Lagos">Lagos</option>
                                </select>
                              </label>

                              <label htmlFor="lcda" className="block w-full">
                                <p className="text-sm uppercase">
                                  lcda of residence
                                </p>
                                <select
                                  className="select select-bordered w-full"
                                  defaultValue=""
                                  name="lcda"
                                  disabled={
                                    isLoadingRegions || !selectedRegion.state
                                  }
                                  onChange={(e) =>
                                    setSelectedRegion((prev) => ({
                                      ...prev,
                                      selectedLcda: e.target.value,
                                    }))
                                  }
                                >
                                  <option value="" disabled>
                                    -- Select Lcda --
                                  </option>
                                  {selectedRegion?.lcda?.map((item, idx) => (
                                    <option value={item} key={idx}>
                                      {item}
                                    </option>
                                  ))}
                                </select>
                              </label>

                              <label
                                htmlFor="regionId"
                                className="block w-full"
                              >
                                <p className="text-sm uppercase">
                                  Region of residence
                                </p>
                                <select
                                  className="select select-bordered w-full"
                                  defaultValue=""
                                  name="regionId"
                                  ref={customRegionRef}
                                  disabled={
                                    isLoadingRegions ||
                                    !selectedRegion.selectedLcda
                                  }
                                  onChange={(e) => handleSetRegion(e)}
                                >
                                  <option value="" disabled>
                                    -- Select Region --
                                  </option>
                                  {selectedRegion?.region
                                    ?.sort((a, b) =>
                                      a.name.localeCompare(b.name)
                                    )
                                    .map((item, idx) => (
                                      <option value={item.id} key={idx}>
                                        {item.name}
                                      </option>
                                    ))}
                                </select>
                              </label>
                            </div>
                            <label
                              htmlFor="customAddress"
                              className="block w-full"
                            >
                              <p className="text-sm uppercase">
                                Delivery Address
                              </p>
                              <input
                                type="text"
                                className="input input-bordered w-full"
                                ref={customAddressRef}
                              />
                            </label>
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>
                </Fragment>
              ) : (
                <Fragment>
                  <div className="w-full p-6 flex flex-col gap-6 items-center justify-center min-h-[300px]">
                    <p className="text-sm">You must be logged in to continue</p>
                    <div className="w-full flex flex-col md:flex-row justify-center">
                      <button
                        className="btn w-full md:w-max uppercase green-gradient"
                        onClick={handleRouteToLogin}
                      >
                        Login
                      </button>
                      <div className="divider md:divider-horizontal text-xs">
                        OR
                      </div>
                      <Link
                        to="/auth/signup"
                        className="btn w-full md:w-max uppercase"
                      >
                        Create an Account
                      </Link>
                    </div>
                  </div>
                </Fragment>
              )}
            </div>
          </div>

          {/* Order Summary */}
          <div className="basis-2/5">
            <div className="w-full border rounded-lg">
              <p className="text-sm font-semibold p-2 uppercase border-b">
                order summary
              </p>

              <div className="p-4">
                <span className="flex items-center justify-between mb-4">
                  <p className="text-sm">Products Price</p>
                  <p className="text-sm font-semibold">
                    NGN {totalPrice().toLocaleString()}
                  </p>
                </span>
                <span className="flex items-center justify-between mb-4">
                  <p className="text-sm">VAT (10% TC)</p>
                  <p className="text-sm font-semibold">NGN 400</p>
                </span>
                <span className="flex items-center justify-between my-4">
                  <p className="text-sm">Logistic Cost</p>
                  <p className="text-sm">* Calculated on checkout</p>
                </span>
                <span className="flex items-center justify-between mt-4">
                  <p className="text-sm">Total Cost</p>
                  <p className="text-sm font-semibold">NGN 40,000</p>
                </span>
              </div>

              <div className="border-t border-b block p-4 w-full">
                <p className="text-sm">Promo Code</p>
                <div className="flex items-center gap-2">
                  <input
                    className="input input-sm input-bordered border-2 rounded-md w-full"
                    placeholder="Email"
                  />
                  <button className="btn btn-sm btn-outline uppercase rounded-md border-2 border-orange-clr text-orange-clr hover:text-white hover:bg-orange-clr hover:border-orange-clr">
                    apply
                  </button>
                </div>
              </div>

              <div className="flex p-4 items-center justify-center">
                {user ? (
                  <button
                    onClick={handleCheckout}
                    className="btn green-gradient w-full uppercase"
                    disabled={isCreatingOrder}
                  >
                    {isCreatingOrder ? (
                      <span className="loading loading-lg loading-dots" />
                    ) : (
                      "proceed to checkout"
                    )}
                  </button>
                ) : (
                  <button
                    className="btn w-full uppercase"
                    onClick={handleRouteToLogin}
                  >
                    Login to continue
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
