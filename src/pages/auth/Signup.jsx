import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSignupMutation } from "../../api/auth";

export default function Signup() {
  const navigate = useNavigate();

  const { mutateAsync: SignupMutate, isLoading } = useSignupMutation();

  const sigunp = async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    await SignupMutate(data).then((res) => {
      if (res.status === 201) {
        const userId = res.data.userId;
        localStorage.setItem("userId", userId);
        navigate("/auth/verify-otp");
      }
    });
  };

  return (
    <div className="w-full flex items-center justify-center gap-8 flex-col">
      <p className="text-sm uppercase font-semibold">create an account</p>
      <form onSubmit={sigunp} className="w-full ">
        <label htmlFor="fullName">
          <p className="text-sm uppercase">Full Name</p>
          <input
            type="text"
            name="fullName"
            id="fullName"
            className="input input-bordered w-full mb-8"
            required
            disabled={isLoading}
          />
        </label>
        <label htmlFor="email">
          <p className="text-sm uppercase">email address</p>
          <input
            type="email"
            name="email"
            id="email"
            className="input input-bordered w-full mb-8"
            required
            disabled={isLoading}
          />
        </label>
        <label htmlFor="password">
          <p className="text-sm uppercase">password</p>
          <input
            type="password"
            name="password"
            id="password"
            className="input input-bordered w-full"
            required
            disabled={isLoading}
          />
        </label>
        <label htmlFor="type" className="block mt-6">
          <p className="text-sm uppercase">Register as</p>
          <select
            className="select select-bordered w-full"
            defaultValue=""
            name="type"
          >
            <option value="" disabled>
              -- Select Account Type --
            </option>
            <option value="buyer">Retail Buyer</option>
            <option value="farmer">Farmer</option>
            <option value="wholesaler">Wholesaler</option>
            <option value="xforce">X-Force Agent</option>
            <option value="affiliate">Affiliate Marketer</option>
          </select>
        </label>
        <button
          className="btn green-gradient w-full uppercase mt-8"
          disabled={isLoading}
        >
          {isLoading ? (
            <span className="loading loading-dots loading-md bg-white" />
          ) : (
            "Sign up"
          )}
        </button>
      </form>
      <div>
        <p className="text-sm uppercase font-semibold mb-4">
          other sign-in options
        </p>
        <div className="flex gap-4 justify-center items-center">
          <button className="btn shadow-lg">
            <FcGoogle className="text-2xl" />
          </button>
          <button className="btn shadow-lg">
            <FaFacebook className="text-2xl text-blue-600" />
          </button>
        </div>
      </div>
      <span className="flex items-center justify-center gap-2">
        <p className="text-sm uppercase font-semibold">
          Already have an account?
        </p>
        <Link
          to="/auth/login"
          className={`text-sm uppercase font-semibold text-dark-green-clr cursor-pointer ${
            isLoading && "pointer-events-none"
          }`}
        >
          sign in
        </Link>
      </span>
    </div>
  );
}
