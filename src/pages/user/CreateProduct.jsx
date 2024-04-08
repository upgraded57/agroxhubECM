import { Form } from "react-router-dom";
export default function CreateProduct() {
  return (
    <>
      <h2 className="hidden md:block font-semibold text-2xl pb-2 border-b">
        CREATE PRODUCT
      </h2>

      <Form className="my-6 w-full px-2">
        <label htmlFor="productName">
          <p className="text-sm uppercase">product name</p>
          <input
            type="text"
            name="productName"
            id="productName"
            className="input input-bordered w-full mb-6"
          />
        </label>

        <label htmlFor="productDescription">
          <p className="text-sm uppercase">product description</p>
          <textarea
            type="text"
            name="productDescription"
            id="productDescription"
            className="textarea textarea-bordered  w-full mb-6"
          />
        </label>

        <label htmlFor="productUnitPrice">
          <p className="text-sm uppercase">product unit price (ngn)</p>
          <input
            inputMode="numeric"
            type="text"
            name="productUnitPrice"
            id="productUnitPrice"
            className="input input-bordered w-full mb-6"
          />
        </label>

        <label htmlFor="productQty">
          <p className="text-sm uppercase">
            PRODUCT QUANTITY AVAILABLE (KG, CRATES, LITERS, BAGS ETC)
          </p>
          <input
            type="text"
            name="productQty"
            id="productQty"
            className="input input-bordered w-full mb-6"
          />
        </label>

        <label htmlFor="productCategory">
          <p className="text-sm uppercase">
            PRODUCT CATEGORY (E.G. CEREAL, POULTRY. YOU CAN ADD MULTIPLE
            CATEGORIES)
          </p>
          <input
            type="text"
            name="productCategory"
            id="productCategory"
            className="input input-bordered w-full mb-6"
          />
        </label>

        <label htmlFor="productMedia">
          <p className="text-sm uppercase">
            PRODUCT CATEGORY (E.G. CEREAL, POULTRY. YOU CAN ADD MULTIPLE
            CATEGORIES)
          </p>
          <input
            type="file"
            accept="image/*"
            multiple
            maxLength={5}
            name="productMedia"
            id="productMedia"
            className="file-input file-input-bordered text-sm w-full max-w-md"
          />
        </label>
        <div className="w-full flex justify-center mt-6">
          <button
            type="submit"
            className="btn btn-outline uppercase border-2 border-orange-clr text-orange-clr hover:text-white hover:bg-orange-clr hover:border-orange-clr"
          >
            create product
          </button>
        </div>
      </Form>
    </>
  );
}
