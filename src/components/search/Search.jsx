import { Form } from "react-router-dom";
import "./search.css";
import { BsSearch } from "react-icons/bs";

export default function Search() {
  return (
    <Form
      action="/search"
      className=" container px-[4vw] mx-auto w-full flex items-center justify-center h-[150px]"
    >
      <div className="relative w-full max-w-[500px] flex items-center">
        <label className="input bg-[#f5f5f5] rounded-r-none flex items-center gap-2 w-full">
          <BsSearch className="text-gray-300" />
          <input
            type="text"
            name="q"
            className="grow"
            placeholder="Search ..."
          />
        </label>

        <button
          type="submit"
          className="btn px-5 md:px-8 rounded-l-none green-gradient border-0"
        >
          Search
        </button>
      </div>
    </Form>
  );
}
