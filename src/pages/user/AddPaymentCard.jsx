import React from "react";
import { Form } from "react-router-dom";

export default function AddPaymentCard() {
  return (
    <>
      <div className="hidden md:flex items-center justify-between border-b py-2 md:pt-0">
        <h2 className="font-semibold text-sm md:text-2xl">
          ADD NEW PAYMENT CARD
        </h2>
      </div>
      <Form className="mb-12 mt-6 px-1" method="post" action="/user/payment">
        <label htmlFor="cardName">
          <p className="text-sm uppercase">name on card</p>
          <input
            type="text"
            name="cardName"
            id="cardName"
            className="input input-bordered border-2 w-full"
          />
        </label>

        <div className="block w-full md:flex items-center my-6 gap-2">
          <label htmlFor="cardNumber" className="md:basis-2/3">
            <p className="text-sm uppercase">card number</p>
            <input
              type="text"
              name="cardNumber"
              id="cardNumber"
              className="input input-bordered border-2 w-full"
            />
          </label>
          <label htmlFor="cardType" className="md:basis-1/2">
            <p className="text-sm uppercase mt-6 md:mt-0">card type</p>
            <select
              name="cardType"
              className="select uppercase select-bordered border-2 w-full"
            >
              <option>mastercard</option>
              <option>verve</option>
              <option>visa</option>
            </select>
          </label>
        </div>

        <div className="block w-full md:flex items-center my-6 gap-2">
          <label htmlFor="cardExp" className="md:basis-1/2">
            <p className="text-sm uppercase">card expiry date</p>
            <input
              type="month"
              name="cardExp"
              id="cardExp"
              className="input input-bordered border-2 w-full"
            />
          </label>
          <label htmlFor="cardCVV" className="md:basis-1/2">
            <span className="flex items-center gap-2 mt-6 md:mt-0">
              <p className="text-sm uppercase">cvv</p>
              <p className="text-sm font-semibold text-grey-clr md:mt-0">
                What is this?
              </p>
            </span>
            <input
              type="text"
              inputMode="numeric"
              pattern="[0-9]+"
              title="Please enter only numbers"
              name="cardCVV"
              id="cardCVV"
              className="input input-bordered border-2 w-full"
            />
          </label>
        </div>
        <div className="w-full my-4 flex justify-center">
          <button
            type="submit"
            className="btn btn-outline border-2 border-orange-clr text-orange-clr uppercase hover:bg-orange-clr hover:text-white hover:border-orange-clr"
          >
            add new card
          </button>
        </div>
      </Form>
    </>
  );
}
