import { useEffect } from "react";
import { useVerifyOtpMutation, useResendOtpMutation } from "../../api/auth";
import { useNavigate } from "react-router-dom";

export default function VerifyOtp() {
  // Check if userId is avaliable
  const userId = localStorage.getItem("userId");
  const navigate = useNavigate();
  useEffect(() => {
    if (!userId) return navigate("/auth/signup");
  }, []);
  const { mutateAsync: VerifyMutation, isLoading } = useVerifyOtpMutation();
  const { mutateAsync: ResendMutation, isLoading: ResendingOtp } =
    useResendOtpMutation();
  const verifyotp = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    if (userId) {
      data.append("userId", userId);
    }
    await VerifyMutation(Object.fromEntries(data))
      .then((res) => {
        if (res) {
          localStorage.removeItem("userId");
          navigate("/auth/login");
        }
      })
      .catch((err) => {
        if (err.response.status === 401 || err.response.status === 404) {
          localStorage.removeItem("userId");
          navigate("/auth/login");
        }
      });
  };

  const handleResend = async () => {
    let data;
    const userId = localStorage.getItem("userId");
    if (userId) {
      data = { userId };
    }

    await ResendMutation(data).catch((err) => {
      if (err.response.status === 404) {
        localStorage.removeItem("userId");
        navigate("/auth/signup");
      }
    });
  };
  return (
    <div className="w-full flex items-center justify-center gap-8 flex-col">
      <p className="text-sm uppercase font-semibold">Verify your otp</p>
      <p className="text-sm">
        A six-digits otp has been sent to your email address. Enter it to
        activate your account
      </p>
      <form onSubmit={verifyotp} className="w-full">
        <label htmlFor="otp">
          <p className="text-sm uppercase">OTP</p>
          <input
            type="otp"
            name="otp"
            id="otp"
            className="input input-bordered w-full mb-8"
            inputMode="numeric"
            required
            disabled={isLoading}
          />
        </label>

        <button
          className="btn green-gradient w-full uppercase mt-8"
          disabled={isLoading}
        >
          {isLoading ? (
            <span className="loading loading-dots loading-md bg-white" />
          ) : (
            "Verify Otp"
          )}
        </button>
      </form>

      <span className="flex items-center justify-center gap-2">
        <p className="text-sm uppercase font-semibold">Didn't receive otp?</p>
        <p
          className={`text-sm uppercase font-semibold text-dark-green-clr cursor-pointer ${
            isLoading || (ResendingOtp && "pointer-events-none")
          }`}
          onClick={handleResend}
        >
          Resend OTP
        </p>
      </span>
    </div>
  );
}
