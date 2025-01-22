import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import {
  Link,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { useLoginMutation } from "../../api/auth";

export default function Login() {
  const navigate = useNavigate();
  const [q] = useSearchParams();
  const from = q.get("from");
  const { mutateAsync: loginMutation, isLoading } = useLoginMutation();

  const login = async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    await loginMutation(data)
      .then((res) => {
        if (res) {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("userId", res.data.userId);
          if (from) {
            navigate(from.toString());
          } else {
            navigate("/");
          }
        }
      })
      .catch((err) => {
        if (err.status === 401) {
          localStorage.clear();
          localStorage.setItem("userId", err.response.data.userId);
          navigate("/auth/verify-otp");
        }
      });
  };

  return (
    <div className="w-full flex items-center justify-center gap-8 flex-col">
      <p className="text-sm uppercase font-semibold">sign in to your account</p>
      <form onSubmit={login} className="w-full">
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
        <button
          className="btn green-gradient w-full uppercase mt-8"
          disabled={isLoading}
        >
          {isLoading ? (
            <span className="loading loading-dots loading-md bg-white" />
          ) : (
            "sign in"
          )}
        </button>
      </form>
      <div>
        <p className="text-sm uppercase font-semibold mb-4">
          other sign-in options
        </p>
        <div className="flex gap-4 justify-center items-center">
          <button className="btn glass">
            <FcGoogle className="text-2xl" />
          </button>
          <button className="btn glass">
            <FaFacebook className="text-2xl text-blue-600" />
          </button>
        </div>
      </div>
      <span className="flex items-center justify-center gap-2">
        <p className="text-sm uppercase font-semibold">
          don't have an account?
        </p>
        <Link
          to="/auth/signup"
          className={`text-sm uppercase font-semibold text-dark-green-clr cursor-pointer ${
            isLoading && "pointer-events-none"
          }`}
        >
          sign up
        </Link>
      </span>
    </div>
  );
}
