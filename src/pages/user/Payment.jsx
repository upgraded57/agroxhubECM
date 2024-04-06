import { SiMastercard, SiBankofamerica } from "react-icons/si";
import { MdDeleteForever } from "react-icons/md";
import { RiVisaLine } from "react-icons/ri";

export default function Payment() {
  return (
    <>
      <div className="hidden md:flex items-center justify-between border-b py-2 md:pt-0">
        <h2 className="font-semibold text-sm md:text-2xl">PAYMENT METHODS</h2>
      </div>

      <div className="flex justify-between items-center py-4 px-2 border-b">
        <div className="flex gap-2">
          <div className="w-[60px] aspect-square bg-[#040a3e] rounded-md text-white flex items-center justify-center">
            <SiMastercard className="text-4xl text-[#FF9800]" />
          </div>
          <div className="block uppercase">
            <p className="text-sm">JANE MCDOWELLS</p>
            <p className="text-xl">1871 **** **** **** 2312</p>
            <p className="text-sm">EXP - 09/23</p>
          </div>
        </div>

        <button
          className="hidden md:flex btn btn-ghost text-red-clr"
          title="Delete Card"
        >
          <MdDeleteForever className="text-2xl" />
        </button>
      </div>

      <div className="flex justify-between items-center py-4 px-2 border-b">
        <div className="flex gap-2">
          <div className="w-[60px] aspect-square bg-[#040a3e] rounded-md text-white flex items-center justify-center">
            <RiVisaLine className="text-4xl text-white" />
          </div>
          <div className="block uppercase">
            <p className="text-sm">JANE MCDOWELLS</p>
            <p className="text-xl">9081 **** **** **** 7652</p>
            <p className="text-sm">EXP - 11/25</p>
          </div>
        </div>

        <button
          className="hidden md:flex btn btn-ghost text-red-clr"
          title="Delete Card"
        >
          <MdDeleteForever className="text-2xl" />
        </button>
      </div>

      <div className="flex justify-between items-center py-4 px-2 border-b">
        <div className="flex gap-2">
          <div className="w-[60px] aspect-square bg-[#040a3e] rounded-md text-white flex items-center justify-center">
            <SiBankofamerica className="text-4xl text-[#E31837]" />
          </div>
          <div className="block uppercase">
            <p className="text-sm">JANE MCDOWELLS</p>
            <p className="text-xl">2134 **** **** **** 0041</p>
            <p className="text-sm">EXP - 02/25</p>
          </div>
        </div>

        <button
          className="hidden md:flex btn btn-ghost text-red-clr"
          title="Delete Card"
        >
          <MdDeleteForever className="text-2xl" />
        </button>
      </div>

      <div className="w-full my-4 flex justify-center">
        <button className="btn btn-outline border-2 border-orange-clr text-orange-clr uppercase hover:bg-orange-clr hover:text-white hover:border-orange-clr">
          add new card
        </button>
      </div>
    </>
  );
}
