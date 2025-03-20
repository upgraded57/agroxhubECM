import OrderGroup from "../../components/orderGroup/OrderGroup";
import { useGetOrder } from "../../api/checkout";
import EmptyProducts from "../../components/emptyStates/EmptyProducts";
import Loader from "../../components/loader/Loader";
import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { useInitiatePayment } from "../../api/payment";
import PageTitle from "../../utils/pageTitle";
import { UserContext } from "../../utils/userContext";

export default function Checkout() {
  const navigate = useNavigate();
  const { orderNumber } = useParams();
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (!orderNumber) {
      navigate(-1);
    }
  }, []);
  const { data: order, isLoading } = useGetOrder(orderNumber);
  const { mutateAsync: initiatePayment, isLoading: isInitiatingPayment } =
    useInitiatePayment();

  if (isLoading) return <Loader />;

  if (!order) {
    return (
      <EmptyProducts text="Unable to load your order at the moment. Please retry" />
    );
  }

  if (order && Object.entries(order).length === 0) {
    return <EmptyProducts text="You have no open order at this moment" />;
  }

  const handleInitiatePayment = () => {
    initiatePayment(orderNumber).then((res) => {
      window.location = res.data.data.authorization_url;
    });
  };

  return (
    <>
      <PageTitle title={`Checkout | ${user?.name}`} />
      <div className="text-center my-12">
        <h2 className="text-lg md:text-2xl font-semibold uppercase">
          checkout
        </h2>
        <p className="text-sm">Please review your order before checkout</p>
      </div>

      <div className="contEl mb-12 lg:flex gap-4 relative">
        <div className="basis-2/3">
          {order?.orderGroups?.map((orderGroup, idx) => (
            <OrderGroup key={idx} orderGroup={orderGroup} />
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
                {`${order?.deliveryRegion?.state} State, ${order?.deliveryRegion?.lcda} LCDA, ${order?.deliveryRegion?.name} Region`}
              </p>
            </span>

            <span className="block my-6">
              <p className="text-xs">Delivery Address</p>
              <p className="font-medium">{order?.deliveryAddress}</p>
            </span>
          </div>

          {/* Order Summary */}
          <div className="p-6 bg-light-grey-clr rounded-lg">
            <p className="text-sm font-semibold text-center uppercase mb-6">
              order summary
            </p>

            <div className="mb-6">
              <span className="flex items-center justify-between mb-4">
                <p className="text-sm">Products Price</p>
                <p className="text-sm font-semibold">
                  NGN {order?.productsAmount?.toLocaleString()}
                </p>
              </span>
              <span className="flex items-center justify-between my-4">
                <p className="text-sm">Logistic Cost</p>
                <p className="text-sm font-semibold">
                  NGN {order?.logisticsAmount.toLocaleString()}
                </p>
              </span>
              <span className="flex items-center justify-between mt-4">
                <p className="text-sm">VAT</p>
                <p className="text-sm font-semibold">
                  NGN {order?.vat.toLocaleString()}
                </p>
              </span>
              <span className="flex items-center justify-between mt-4">
                <p className="text-sm">Total Cost</p>
                <p className="text-sm font-semibold">
                  NGN {order?.totalAmount.toLocaleString()}
                </p>
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
              <button
                className="btn green-gradient w-full uppercase"
                onClick={handleInitiatePayment}
                disabled={isInitiatingPayment}
              >
                proceed to pay with paystack
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
