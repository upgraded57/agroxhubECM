import { HiOutlineEnvelope } from "react-icons/hi2";

export default function BeASeller() {
  return (
    <div className="mb-12 px-[4vw] bg-dark-orange-clr py-10">
      <div className="container max-w-screen-lg mx-auto  flex flex-col md:flex-row items-center justify-center md:justify-between gap-4 md:gap-10">
        <div className="w-full md:basis-1/2 text-center md:text-left text-white">
          <h3 className="h-300">Become a Seller</h3>
          <p className="md:text-lg">
            Are you a farmer or a wholesaler? We help you sell your products
            with ease. Start by registering with us today
          </p>
        </div>

        <form className="w-full md:basis-1/2 flex flex-row md:flex-col gap-2 items-center md:items-start">
          <label className="input flex items-center gap-2 w-full bg-white">
            <HiOutlineEnvelope className="text-gray-300" />
            <input type="email" className="grow" placeholder="Email" />
          </label>
          <button type="submit" className="btn green-gradient w-max border-0">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}
