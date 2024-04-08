import { BsCamera } from "react-icons/bs";
import { Form } from "react-router-dom";

export default function EditProfile() {
  return (
    <Form action="/user/account" method="post">
      <h2 className="font-semibold text-2xl hidden md:block pb-2">
        EDIT ACCOUNT
      </h2>

      <div className="flex gap-2 flex-col md:flex-row w-full py-12 md:py-6 md:border-t border-b">
        <div className="w-[max-content] mx-auto md:mx-0 flex flex-col md:flex-row gap-4 items-center relative">
          <div className="w-[150px] aspect-square rounded-full overflow-hidden ">
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="User Avatar"
              className="w-full h-full object-cover"
            />
          </div>
          <label
            htmlFor="avatar"
            className="w-12 aspect-square rounded-full green-gradient text-white flex items-center justify-center text-2xl absolute bottom-0 right-0 border-white border-2 cursor-pointer"
          >
            <BsCamera />
          </label>
          <input
            type="file"
            name="avatar"
            id="avatar"
            hidden
            accept="image/*"
          />
        </div>
      </div>

      <div className="p-2 border-b flex justify-between items-center">
        <p className="font-semibold text-sm">PERSONAL INFORMATION</p>
      </div>

      <div className="py-4 px-2">
        <label htmlFor="fullName" className="block mb-4">
          <p className="text-sm">FULL NAME</p>
          <input
            type="text"
            name="fullName"
            id="fullName"
            className="input input-bordered w-full"
          />
        </label>

        <label htmlFor="email" className="block mb-4">
          <p className="text-sm">EMAIL ADDRESS</p>
          <input
            type="email"
            name="email"
            id="email"
            className="input input-bordered w-full"
          />
        </label>

        <label htmlFor="phone" className="block mb-4">
          <p className="text-sm">PHONE NUMBER</p>
          <input
            type="phone"
            name="phone"
            id="phone"
            className="input input-bordered w-full"
          />
        </label>

        <label htmlFor="deliveryAddress" className="block mb-4">
          <p className="text-sm">DELIVERY ADDRESS</p>
          <input
            type="deliveryAddress"
            name="deliveryAddress"
            id="deliveryAddress"
            className="input input-bordered w-full"
          />
        </label>
      </div>

      <div className="p-2 border-b flex justify-between items-center">
        <p className="font-semibold text-sm">PASSWORD UPDATE</p>
      </div>

      <div className="py-4 px-2">
        <label htmlFor="oldPassword" className="block mb-4">
          <p className="text-sm">OLD PASSWORD</p>
          <input
            type="password"
            name="oldPassword"
            id="oldPassword"
            className="input input-bordered w-full"
          />
        </label>

        <label htmlFor="newPassword" className="block mb-4">
          <p className="text-sm">NEW PASSWORD</p>
          <input
            type="password"
            name="newPassword"
            id="newPassword"
            className="input input-bordered w-full"
          />
        </label>

        <label htmlFor="confirmPassword" className="block mb-4">
          <p className="text-sm">CONFIRM PASSWORD</p>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            className="input input-bordered w-full"
          />
        </label>
      </div>

      <div className="flex justify-center items-center">
        <button
          type="submit"
          className="btn btn-outline border-orange-clr border-2 text-orange-clr hover:text-white hover:bg-orange-clr hover:border-orange-clr uppercase"
        >
          update account
        </button>
      </div>
    </Form>
  );
}
