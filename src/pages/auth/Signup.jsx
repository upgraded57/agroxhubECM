import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

export default function Signup({ setAuth }) {
  const navigate = useNavigate();
  const sigunp = (e) => {
    e.preventDefault();
    navigate("/");
  };
  return (
    <div className="w-full flex items-center justify-center gap-8 flex-col">
      <p className="text-sm uppercase font-semibold">create an account</p>
      <form onSubmit={sigunp} className="w-full ">
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
        <p
          className="text-sm uppercase font-semibold text-dark-green-clr cursor-pointer"
          onClick={() => setAuth("login")}
        >
          sign in
        </p>
      </span>
    </div>
  );
}
