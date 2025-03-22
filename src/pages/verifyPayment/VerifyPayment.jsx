import { Link, useSearchParams } from "react-router-dom";
import { useVerifyPayment } from "../../api/payment";
import { useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";
import Lottie from "lottie-react";
import successAnimation from "../../assets/json/AnimationSuccess.json";
import failAnimation from "../../assets/json/AnimationFail.json";

export default function VerifyPayment() {
  const [q] = useSearchParams();
  const queryClient = useQueryClient();
  const reference = q.get("reference");
  const { mutate, data, isLoading, isSuccess, isError, error } =
    useVerifyPayment();

  if (!reference)
    return (
      <div className="contEl flex flex-col items-center justify-center h-[600px]">
        <Lottie
          animationData={failAnimation}
          loop={false}
          autoPlay={true}
          style={{ width: 140, height: 140 }}
        />
        <p className="text-sm text-center">Cannot verify payment.</p>
        <p className="text-sm text-center">Reference number not provided!</p>
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
        <p className="text-sm text-center">
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
      <div className="contEl flex flex-col items-center justify-center min-h-[600px]">
        {/* <span className="loading loading-spinner loading-lg text-dark-green-clr " /> */}
        <Lottie
          animationData={successAnimation}
          loop={false}
          autoPlay={true}
          style={{ width: 140, height: 140 }}
        />
        <p className="text-sm text-center mt-6">
          Payment verified successfully
        </p>
        <Link to={`/user/orders/${data?.data?.order?.orderNumber}`}>
          <button className="btn green-gradient mt-6">Go to Order</button>
        </Link>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="contEl flex flex-col items-center justify-center min-h-[600px]">
        {/* <span className="loading loading-spinner loading-lg text-dark-green-clr " /> */}
        <Lottie
          animationData={failAnimation}
          loop={false}
          autoPlay={true}
          style={{ width: 140, height: 140 }}
        />
        <p className="text-sm text-center mt-6">Cannot verify payment.</p>
        <p className="text-sm text-center">{error?.response?.data?.message}</p>
        <Link to={`/user/orders/${error?.response?.data?.order?.orderNumber}`}>
          <button className="btn mt-6">Go to Order</button>
        </Link>
      </div>
    );
  }
}
