import { FaStar, FaPlus, FaMinus } from "react-icons/fa6";
import {
  IoCartOutline,
  IoChevronDownOutline,
  IoHeartOutline,
} from "react-icons/io5";

export default function ProductDetail() {
  return (
    <div className="max-w-screen-xl px-[4vw] mx-auto mb-12">
      <div className="flex gap-4 flex-col md:flex-row">
        <div className="flex flex-col gap-2 w-full basis-1/2">
          <div className="w-full aspect-[3/2] rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1606588260160-0c4707ab7db5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRvbWF0b2VzfGVufDB8fDB8fHww"
              alt="Product image"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-4 gap-2">
            <div className="aspect-[3/2] rounded-md overflow-hidden bg-white">
              <img
                src="https://images.unsplash.com/photo-1606588260160-0c4707ab7db5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRvbWF0b2VzfGVufDB8fDB8fHww"
                alt="Product Image"
                className="w-full h-full object-cover opacity-50 hover:opacity-100"
              />
            </div>
            <div className="aspect-[3/2] rounded-md overflow-hidden bg-white">
              <img
                src="https://images.unsplash.com/photo-1562447575-88db38dcc649?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHRvbWF0b2VzfGVufDB8fDB8fHww"
                alt="Product Image"
                className="w-full h-full object-cover opacity-50 hover:opacity-100"
              />
            </div>
            <div className="aspect-[3/2] rounded-md overflow-hidden bg-white">
              <img
                src="https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRvbWF0b2VzfGVufDB8fDB8fHww"
                alt="Product Image"
                className="w-full h-full object-cover opacity-50 hover:opacity-100"
              />
            </div>
            <div className="aspect-[3/2] rounded-md overflow-hidden bg-white">
              <img
                src="https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dG9tYXRvZXN8ZW58MHx8MHx8fDA%3D"
                alt="Product Image"
                className="w-full h-full object-cover opacity-50 hover:opacity-100"
              />
            </div>
          </div>
        </div>

        <div className="w-full basis-1/2">
          <h2 className="text-lg font-semibold md:font-normal md:text-3xl">
            Fresh Tomatoes
          </h2>
          <hr className="my-3" />
          <h1 className="text-lg font-normal md:text-3xl">
            N3,458 + N1,200 <span className="text-sm">(logistics)</span>
          </h1>
          <hr className="my-3" />
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur. Ornare odio at magna mus sed
            elementum eleifend aenean tincidunt. Fringilla adipiscing id nibh
            imperdiet ultricies viverra ipsum rutrum. Elementum nunc diam
            volutpat scelerisque. Morbi duis pharetra ultricies sed.
            Pellentesque facilisis sit aliquam aenean urna facilisis. Malesuada
            venenatis in nunc varius diam vulputate pretium egestas.
          </p>
          <hr className="my-3" />
          <div className="flex items-center gap-2">
            <FaStar className="text-md text-yellow-300" />
            <FaStar className="text-md text-yellow-300" />
            <FaStar className="text-md text-yellow-300" />
            <FaStar className="text-md text-yellow-300" />
            <FaStar className="text-md text-gray-300" />
            <p className="text-sm pl-3">25 Reviews</p>
          </div>
          <hr className="my-3" />
          <div className="join">
            <div className="join-item btn rounded-none">
              <FaPlus />
            </div>
            <div className="join-item flex items-center justify-between input input-bordered text-xl border-x-0">
              3 Baskets
            </div>
            <div className="join-item btn rounded-none">
              <FaMinus />
            </div>
          </div>
          <p className="text-sm mt-3">
            50 Baskets max saleable in one order | 750 Baskets still in stock
          </p>
          <hr className="my-3" />
          <div className="flex items-end gap-2">
            <p className="text-sm">Choose logistic service provider</p>
            <IoChevronDownOutline />
          </div>
          <hr className="my-3" />
          <p className="text-sm">
            Deliver to - <b>Ajegunle Alakuko.</b>{" "}
            <span className="text-orange-clr">(Change delivery address)</span>
          </p>
          <hr className="my-3" />
          <div className="flex items-center gap-2">
            <button className="btn green-gradient text-white">
              Add to Cart
              <IoCartOutline className="text-2xl" />
            </button>
            <button className="btn border-2 border-orange-clr bg-white text-orange-clr hover:bg-orange-clr hover:text-white hover:border-orange-clr">
              Save
              <IoHeartOutline className="text-2xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
