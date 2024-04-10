import Farmer from "./Farmer";

export default function Farmers({ header }) {
  return (
    <div className="px-[4vw] max-w-screen-xl mx-auto mb-12">
      <h3 className="text-xl text-black-clr font-semibold mb-2">
        {header || "Buy from Best Selling Farmers"}
      </h3>
      <div className="gridEl">
        <Farmer />
        <Farmer />
        <Farmer />
        <Farmer />
      </div>
    </div>
  );
}
