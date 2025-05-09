import { useParams } from "react-router-dom";
import { useGetSellerFollowers } from "../../api/seller";
import Loader from "../../components/loader/Loader";
import noAvatar from "../../assets/images/noAvatar.jpeg";

export default function Followers() {
  const { sellerId } = useParams();

  const { isLoading, data: followers } = useGetSellerFollowers(sellerId || "");

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <h2 className="font-semibold text-2xl uppercase hidden md:block pb-2 border-b">
        followers
      </h2>

      {followers && followers?.length > 0 ? (
        followers?.map((follower, idx) => {
          const followerInitials =
            follower.name.split(" ")[0][0] + follower.name.split(" ")[1][0];
          return (
            <div
              className="py-6 border-b flex items-center gap-2 px-2"
              key={idx}
            >
              {follower.avatar ? (
                <div className="w-8 lg:w-12 aspect-square rounded-full overflow-hidden">
                  <img
                    src={follower.avatar}
                    alt={follower.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="avatar avatar-placeholder">
                  <div className="bg-dark-green-clr text-white w-8 lg:w-12 rounded-full">
                    <p>{followerInitials}</p>
                  </div>
                </div>
              )}
              <p className="text-xs lg:text-sm font-semibold uppercase">
                {follower.name}
              </p>
            </div>
          );
        })
      ) : (
        <p className="text-center py-10">You have no followers yet!</p>
      )}
    </>
  );
}
