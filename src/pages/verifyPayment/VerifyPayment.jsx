import { Link, useSearchParams } from "react-router-dom";
import { useVerifyPayment } from "../../api/payment";
import { useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";

export default function VerifyPayment() {
  const [q] = useSearchParams();
  const queryClient = useQueryClient();
  const reference = q.get("reference");
  const { mutate, data, isLoading, isSuccess, isError, error } =
    useVerifyPayment();

  if (!reference)
    return (
      <div className="contEl flex flex-col items-center justify-center h-[600px]">
        <p className="text-smn text-center">Cannot verify payment.</p>
        <p className="text-smn text-center">
          Payment reference number not provided
        </p>
      </div>
    );

  useEffect(() => {
    if (reference) {
      mutate(reference);
    }
  }, [reference]);

  if (isLoading) {
    return (
      <div className="contEl flex flex-col gap-10 items-center justify-center h-[600px]">
        <span className="loading loading-spinner loading-lg text-dark-green-clr " />
        <p className="text-smn text-center">
          Please wait while we verify your payment
        </p>
      </div>
    );
  }

  if (isSuccess) {
    queryClient.invalidateQueries({
      queryKey: ["Cart"],
    });
    localStorage.removeItem("cart");
    return (
      <div className="contEl flex flex-col items-center justify-center h-[600px]">
        {/* <span className="loading loading-spinner loading-lg text-dark-green-clr " /> */}
        <p className="text-smn text-center text-dark-green-clr">
          Payment verified successfully
        </p>
        <Link to={`/orders/${data?.data?.order?.orderNumber}`}>
          <button className="btn mt-10 green-gradient">Go to Order</button>
        </Link>
      </div>
    );
  }

  console.log(error?.response?.data);

  if (isError) {
    return (
      <div className="contEl flex flex-col items-center justify-center h-[600px]">
        {/* <span className="loading loading-spinner loading-lg text-dark-green-clr " /> */}
        <p className="text-smn text-center">Cannot verify payment.</p>
        <p className="text-smn text-center">{error?.response?.data?.message}</p>
        <Link to={`/orders/${error?.response?.data?.order?.orderNumber}`}>
          <button className="btn mt-10 green-gradient">Go to Order</button>
        </Link>
      </div>
    );
  }
}
