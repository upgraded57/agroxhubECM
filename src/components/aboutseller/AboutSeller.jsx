import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import noAvatar from "../../assets/images/noAvatar.jpeg";
import moment from "moment";

export default function AboutSeller({ seller }) {
  return (
    <div className="bg-light-grey-clr w-full px-[4vw] mb-12">
      <div className="max-w-screen-xl mx-auto py-5">
        <div role="tablist" className="tabs tabs-bordered">
          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            className="tab after:w-[max-content]"
            aria-label="About the Seller"
            defaultChecked
          />
          <div role="tabpanel" className="tab-content py-10">
            <div className="flex gap-3 items-center">
              <div className="w-[60px] aspect-square rounded-full overflow-hidden">
                <img
                  src={seller?.avatar || noAvatar}
                  alt="Seller Image"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-semibold">{seller?.name}</h3>
                <p className="text-sm">Large quantity tomato producer</p>
              </div>
            </div>

            <div className="mt-5">
              <span className="block pt-2">
                <p className="text-sm font-semibold">Company Name</p>
                <p className="text-sm">{seller?.name}</p>
              </span>
              <span className="block pt-2">
                <p className="text-sm font-semibold">Joined Date</p>
                <p className="text-sm">
                  {moment(seller.createdAt).format("DD MMMM, YYYY")}
                </p>
              </span>
              <span className="block pt-2">
                <p className="text-sm font-semibold">Farmer Location</p>
                <p className="text-sm">{seller?.location || "--- ---"}</p>
              </span>
              <span className="block pt-2">
                <p className="text-sm font-semibold">Followers</p>
                <p className="text-sm">23</p>
              </span>
              <span className="block pt-2">
                <p className="text-sm font-semibold">Successful Sales</p>
                <p className="text-sm">92%</p>
              </span>
            </div>
          </div>

          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            className="tab  after:w-[max-content]"
            aria-label="Reviews and Ratings"
          />
          <div role="tabpanel" className="tab-content py-10">
            Tab content 2
          </div>
        </div>

        <Link
          to={`/seller/${seller?.id}`}
          className="w-full justify-end flex items-center gap-3"
        >
          <p className="text-sm">View Seller's Profile</p>
          <FaArrowRightLong className="text-dark-green-clr" />
        </Link>
      </div>
    </div>
  );
}
