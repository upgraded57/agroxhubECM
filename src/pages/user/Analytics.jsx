import barGraph from "../../assets/images/bargraph.png";
import pieChart from "../../assets/images/pie.png";

export default function Analytics() {
  return (
    <>
      <div className="hidden md:flex items-center justify-between border-b py-2 md:pt-0">
        <h2 className="font-semibold text-sm md:text-2xl">ANALYTICS</h2>
        <select className="select select-xs uppercase font-normal">
          <option>This Month</option>
          <option>Last Month</option>
          <option>April</option>
          <option>March</option>
          <option>This Year</option>
        </select>
      </div>

      <div className="block mt-5">
        <div className="flex justify-between items-center mb-2">
          <p className="text-sm font-semibold uppercase">overview</p>
          <select className="md:hidden select select-xs uppercase font-normal">
            <option>This Month</option>
            <option>Last Month</option>
            <option>April</option>
            <option>March</option>
            <option>This Year</option>
          </select>
        </div>
        <div className="carousel w-full gap-4">
          <div className="carousel-item w-[180px] flex p-2 flex-col gap-4 text-white bg-light-green-clr rounded-lg">
            <p className="text-sm font-semibold uppercase">total products</p>
            <h1 className="text-3xl font-semibold">278</h1>
          </div>

          <div className="carousel-item w-[180px] flex p-2 flex-col gap-4 text-white bg-light-green-clr rounded-lg">
            <p className="text-sm font-semibold uppercase">products sold</p>
            <h1 className="text-3xl font-semibold">186</h1>
          </div>

          <div className="carousel-item w-[180px] flex p-2 flex-col gap-4 text-white bg-light-green-clr rounded-lg">
            <p className="text-sm font-semibold uppercase">
              total earnings (ngn)
            </p>
            <h1 className="text-3xl font-semibold">38.5k</h1>
          </div>

          <div className="carousel-item w-[180px] flex p-2 flex-col gap-4 text-white bg-light-green-clr rounded-lg">
            <p className="text-sm font-semibold uppercase">followers</p>
            <h1 className="text-3xl font-semibold">102</h1>
          </div>
        </div>
      </div>

      <div className="block mt-12 py-3 border-t">
        <p className="text-sm font-semibold uppercase mb-5">products</p>
        <div className="flex flex-col md:flex-row justify-between items-start gap-20">
          <div className="w-full flex flex-col items-center gap-5">
            <img src={pieChart} alt="Chart" />
            <p className="text-sm  uppercase">PRODUCT ENGAGEMENT CHART</p>
          </div>
          <div className="w-full flex flex-col items-center gap-5">
            <img src={barGraph} alt="Chart" />
            <p className="text-sm  uppercase">PRODUCT VIEWS CHART</p>
          </div>
        </div>
      </div>
    </>
  );
}
