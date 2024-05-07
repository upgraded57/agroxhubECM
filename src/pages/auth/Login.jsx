import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Login({ setAuth }) {
  const navigate = useNavigate();
  const login = (e) => {
    e.preventDefault();
    navigate("/");
  };
  return (
    <div className="w-full flex items-center justify-center gap-8 flex-col">
      <p className="text-sm uppercase font-semibold">sign in to your account</p>
      <form onSubmit={login} className="w-full ">
        <label htmlFor="email">
          <p className="text-sm uppercase">email address</p>
          <input
            type="email"
            name="email"
            id="email"
            className="input input-bordered w-full mb-8"
          />
        </label>
        <label htmlFor="password">
          <p className="text-sm uppercase">password</p>
          <input
            type="password"
            name="password"
            id="password"
            className="input input-bordered w-full"
          />
        </label>
        <button className="btn green-gradient w-full uppercase mt-8">
          sign in
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
        <p
          className="text-sm uppercase font-semibold text-dark-green-clr cursor-pointer"
          onClick={() => setAuth("signup")}
        >
          signup
        </p>
      </span>
    </div>
  );
}
