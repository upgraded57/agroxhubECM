import { useSearchParams } from "react-router-dom";

export default function VerifyPayment() {
  const [q] = useSearchParams();
  const reference = q.get("reference");
  const access = q.get("access");
  console.log({ reference, access });
  return (
    <div className="contEl flex flex-col gap-10 items-center justify-center h-[600px]">
      <span className="loading loading-spinner loading-lg text-dark-green-clr " />
      <p className="text-smn text-center">
        Please wait while we verify your payment
      </p>
    </div>
  );
}
