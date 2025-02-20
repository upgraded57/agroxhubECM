import { useParams } from "react-router-dom";
import { useGetSellerFollowers } from "../../api/seller";
import Loader from "../../components/loader/Loader";
import noAvatar from "../../assets/images/noAvatar.jpeg";

export default function Followers() {
  const { sellerId } = useParams();

  const { isLoading, data: followers } = useGetSellerFollowers(sellerId);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <h2 className="font-semibold text-2xl uppercase hidden md:block pb-2 border-b">
        followers
      </h2>

      {followers?.length > 0 ? (
        followers?.map((follower, idx) => (
          <div className="py-6 border-b flex items-center gap-2 px-2" key={idx}>
            <div className="w-8 lg:w-12 aspect-square rounded-full overflow-hidden">
              <img
                src={follower.avatar || noAvatar}
                alt={follower.name}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-xs lg:text-sm font-semibold uppercase">
              {follower.name}
            </p>
          </div>
        ))
      ) : (
        <p className="text-center py-10">You have no followers yet!</p>
      )}
    </>
  );
}
