import { Link } from "react-router-dom";
import graphImg from "../../assets/images/graph.png";
import TopSellingProducts from "../../components/topSellingProducts/TopSellingProducts";

export default function AffiliateOverView() {
  const cards = [
    {
      title: "Promoted Products",
      num: 276,
      linkText: "View All",
      link: "#",
    },
    {
      title: "Product Views",
      num: 2087,
      linkText: "View All",
      link: "#",
    },
    {
      title: "Product Sold",
      num: 80,
      linkText: "View All",
      link: "#",
    },
    {
      title: "Available Balance",
      num: "N27.9k",
      linkText: "View More",
      link: "#",
    },
  ];
  return (
    <>
      <div className="carousel carousel-end flex gap-3  py-[4vw] md:px-0 md:py-3">
        {cards.map((card) => (
          <div
            key={card.title}
            className="carousel-item block p-3 rounded-lg bg-white min-w-[150px] md:min-w-[250px] max-w-[270px]"
          >
            <p className="text-sm md:text-lg">{card.title}</p>
            <h1 className="text-[50px] font-medium text-dark-green-clr leading-none">
              {card.num}
            </h1>
            <Link to={card.link} className="text-sm">
              {card.linkText}
            </Link>
          </div>
        ))}
      </div>
      <div className="block md:flex w-full gap-3 items-stretch">
        <div className="basis-3/4 mb-3 md:mb-0">
          <div className="min-h-full w-full bg-white flex items-center rounded-lg overflow-hidden">
            <div className="w-full"></div>
            <img src={graphImg} alt="Graph Statistics" className="w-full" />
          </div>
        </div>
        <div className="basis-1/4">
          <div className="overflow-x-auto rounded-lg bg-white min-h-full">
            <h3 className="text-sm md:text-lg font-semibold uppercase pt-3 px-5">
              earnings
            </h3>
            <table className="table uppercase">
              {/* head */}
              <thead className="text-grey-clr">
                <tr>
                  <th>month</th>
                  <th>amount (N)</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr>
                  <td>march</td>
                  <td>30,200</td>
                </tr>
                {/* row 2 */}
                <tr>
                  <td>april</td>
                  <td>30,200</td>
                </tr>
                {/* row 3 */}
                <tr>
                  <td>may</td>
                  <td>30,200</td>
                </tr>
                {/* row 4 */}
                <tr>
                  <td>june</td>
                  <td>30,200</td>
                </tr>
                {/* row 5 */}
                <tr>
                  <td>july</td>
                  <td>30,200</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <TopSellingProducts />
    </>
  );
}
