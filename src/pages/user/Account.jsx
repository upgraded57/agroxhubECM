import { BiEdit } from "react-icons/bi";

export default function Account() {
  return (
    <>
      <h2 className="font-semibold text-2xl hidden md:block pb-2">
        MY ACCOUNT
      </h2>

      <div className="flex gap-2 flex-col md:flex-row w-full py-12 md:py-6 md:border-t border-b">
        <div className="w-[max-content] mx-auto md:mx-0 flex flex-col md:flex-row gap-4 items-center">
          <div className="w-[100px] md:w-[50px] aspect-square rounded-full overflow-hidden ">
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="User Avatar"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-center md:text-left">
            <p className="text-sm font-semibold">JANES MCDOWELLS</p>
            <p className="text-sm">RETAIL BUYER</p>
          </span>
        </div>
      </div>

      <div className="p-2 border-b flex justify-between items-center">
        <p className="font-semibold text-sm">GENERAL INFORMATION</p>
        <div className="btn btn-ghost p-0 min-h-[max-content] h-[max-content] text-sm font-normal hover:bg-transparent">
          EDIT
          <BiEdit />
        </div>
      </div>

      <div className="p-4">
        <span className="block mb-4">
          <p className="font-semibold text-xs">FULL NAME</p>
          <p className="text-sm">JANE MCDOWELLS</p>
        </span>
        <span className="block mb-4">
          <p className="font-semibold text-xs">EMAIL ADDRESS</p>
          <p className="text-sm">JANEMDOWELLS@MAIL.COM</p>
        </span>
        <span className="block mb-4">
          <p className="font-semibold text-xs">PHONE NUMBER</p>
          <p className="text-sm">+234 (0) 91 885 123 76</p>
        </span>
        <span className="block mb-4">
          <p className="font-semibold text-xs">DELIVERY ADDRESS</p>
          <p className="text-sm">125, SAMPLE ADDRESS, SOME STATE, NIGERIA</p>
        </span>
        <span className="block mb-4">
          <p className="font-semibold text-xs">PURCHASES</p>
          <p className="text-sm">23. 18 SUCCESSFUL</p>
        </span>
        <span className="block mb-4">
          <p className="font-semibold text-xs">DECLINES</p>
          <p className="text-sm">0</p>
        </span>
        <span className="block mb-4">
          <p className="font-semibold text-xs">REVIEWS</p>
          <p className="text-sm">18</p>
        </span>
        <span className="block mb-4">
          <p className="font-semibold text-xs">SALES</p>
          <p className="text-sm">0</p>
        </span>
        <span className="block">
          <p className="font-semibold text-xs">PAYMENT CARDS</p>
          <p className="text-sm">2</p>
        </span>
      </div>
    </>
  );
}
