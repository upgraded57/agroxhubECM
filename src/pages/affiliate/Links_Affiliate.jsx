import { FaPlayCircle, FaExclamationCircle } from "react-icons/fa";
export default function AffiliateLinks() {
  const productsTable = [
    {
      status: 1,
      image: "https://source.unsplash.com/200x200/?fresh-tomatoes",
      name: "Fresh Tomatoes",
      clicks: 1700,
      carts: 220,
      purchases: 150,
      earnings: "NGN 76,500",
      generated_at: "25/04/2023 07:43pm",
    },
    {
      status: 0,
      image: "https://source.unsplash.com/200x200/?bag-of-rice",
      name: "Bag of Rice",
      clicks: 900,
      carts: 120,
      purchases: 100,
      earnings: "NGN 32,000",
      generated_at: "25/04/2023 07:43pm",
    },
    {
      status: 1,
      image: "https://source.unsplash.com/200x200/?palm-oil",
      name: "Palm Oil",
      clicks: 1500,
      carts: 180,
      purchases: 160,
      earnings: "NGN 68,200",
      generated_at: "25/04/2023 07:43pm",
    },
    {
      status: 0,
      image: "https://source.unsplash.com/200x200/?groundnut-oil",
      name: "Groundnut Oil",
      clicks: 1200,
      carts: 140,
      purchases: 120,
      earnings: "NGN 50,700",
      generated_at: "25/04/2023 07:43pm",
    },
    {
      status: 1,
      image: "https://source.unsplash.com/200x200/?yam-tubers",
      name: "Yam Tubers",
      clicks: 1800,
      carts: 210,
      purchases: 180,
      earnings: "NGN 82,600",
      generated_at: "25/04/2023 07:43pm",
    },
    {
      status: 0,
      image: "https://source.unsplash.com/200x200/?plantain-bunch",
      name: "Plantain Bunch",
      clicks: 1100,
      carts: 130,
      purchases: 100,
      earnings: "NGN 45,900",
      generated_at: "25/04/2023 07:43pm",
    },
    {
      status: 1,
      image: "https://source.unsplash.com/200x200/?cassava-flour",
      name: "Cassava Flour",
      clicks: 1300,
      carts: 160,
      purchases: 140,
      earnings: "NGN 61,800",
      generated_at: "25/04/2023 07:43pm",
    },
    {
      status: 0,
      image: "https://source.unsplash.com/200x200/?chicken-eggs",
      name: "Chicken Eggs",
      clicks: 1500,
      carts: 200,
      purchases: 150,
      earnings: "NGN 72,300",
      generated_at: "25/04/2023 07:43pm",
    },
    {
      status: 1,
      image: "https://source.unsplash.com/200x200/?fresh-fish",
      name: "Fresh Fish",
      clicks: 1900,
      carts: 240,
      purchases: 220,
      earnings: "NGN 95,200",
      generated_at: "25/04/2023 07:43pm",
    },
    {
      status: 0,
      image: "https://source.unsplash.com/200x200/?goat-meat",
      name: "Goat Meat",
      clicks: 1600,
      carts: 200,
      purchases: 150,
      earnings: "NGN 68,500",
      generated_at: "25/04/2023 07:43pm",
    },
    {
      status: 1,
      image: "https://source.unsplash.com/200x200/?oranges",
      name: "Oranges",
      clicks: 1400,
      carts: 180,
      purchases: 160,
      earnings: "NGN 59,800",
      generated_at: "25/04/2023 07:43pm",
    },
    {
      status: 0,
      image: "https://source.unsplash.com/200x200/?watermelon",
      name: "Watermelon",
      clicks: 800,
      carts: 100,
      purchases: 70,
      earnings: "NGN 34,600",
      generated_at: "25/04/2023 07:43pm",
    },
    {
      status: 1,
      image: "https://source.unsplash.com/200x200/?cucumber",
      name: "Cucumber",
      clicks: 1300,
      carts: 180,
      purchases: 160,
      earnings: "NGN 52,400",
      generated_at: "25/04/2023 07:43pm",
    },
    {
      status: 0,
      image: "https://source.unsplash.com/200x200/?carrot",
      name: "Carrot",
      clicks: 1100,
      carts: 140,
      purchases: 110,
      earnings: "NGN 42,800",
      generated_at: "25/04/2023 07:43pm",
    },
    {
      status: 1,
      image: "https://source.unsplash.com/200x200/?sweet-potato",
      name: "Sweet Potato",
      clicks: 1500,
      carts: 190,
      purchases: 170,
      earnings: "NGN 67,300",
      generated_at: "25/04/2023 07:43pm",
    },
    {
      status: 0,
      image: "https://source.unsplash.com/200x200/?cabbage",
      name: "Cabbage",
      clicks: 1000,
      carts: 120,
      purchases: 90,
      earnings: "NGN 37,200",
      generated_at: "25/04/2023 07:43pm",
    },
    {
      status: 1,
      image: "https://source.unsplash.com/200x200/?onion",
      name: "Onion",
      clicks: 1200,
      carts: 150,
      purchases: 130,
      earnings: "NGN 53,600",
      generated_at: "25/04/2023 07:43pm",
    },
    {
      status: 0,
      image: "https://source.unsplash.com/200x200/?garlic",
      name: "Garlic",
      clicks: 800,
      carts: 100,
      purchases: 70,
      earnings: "NGN 29,500",
      generated_at: "25/04/2023 07:43pm",
    },
    {
      status: 1,
      image: "https://source.unsplash.com/200x200/?ginger",
      name: "Ginger",
      clicks: 1400,
      carts: 190,
      purchases: 170,
      earnings: "NGN 65,800",
      generated_at: "25/04/2023 07:43pm",
    },
    {
      status: 0,
      image: "https://source.unsplash.com/200x200/?breadfruit",
      name: "Breadfruit",
      clicks: 900,
      carts: 120,
      purchases: 90,
      earnings: "NGN 40,600",
      generated_at: "25/04/2023 07:43pm",
    },
  ];

  return (
    <div className="w-full bg-white rounded-lg pt-6 my-4">
      <div class="join flex items-center justify-center ">
        <input
          type="text"
          className="input input-bordered join-item md:min-w-[350px]"
          placeholder="Search a product"
        />
        <button className="btn join-item green-gradient">Search</button>
      </div>

      <div className="w-full overflow-x-scroll mt-6">
        <table className="table min-w-max">
          {/* head */}
          <thead>
            <tr className="uppercase">
              <th>Status</th>
              <th>Product</th>
              <th>Clicks</th>
              <th>Carts</th>
              <th>Purchases</th>
              <th>earnings</th>
              <th>generated at</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {productsTable.map((product) => (
              <tr key={product.name}>
                <td>
                  {product.status === 0 ? (
                    <span className="flex items-center gap-2">
                      <FaExclamationCircle
                        className="text-yellow-clr text-xl"
                        title="Suspended"
                      />
                      <p className="hidden md:block text-sm">Suspended</p>
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <FaPlayCircle
                        className="text-xl text-light-green-clr"
                        title="Active"
                      />
                      <p className="hidden md:block text-sm">Active</p>
                    </span>
                  )}
                </td>
                <td>
                  <div className="flex items-center gap-2">
                    <div className="h-12 w-[62px] rounded-sm overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p>{product.name}</p>
                  </div>
                </td>
                <td>{product.clicks}</td>
                <td>{product.carts}</td>
                <td>{product.purchases}</td>
                <td>{product.earnings}</td>
                <td>{product.generated_at}</td>
                <td>
                  <div className="flex items-center gap-2">
                    <p className="link text-light-green-clr">Copy Link</p>
                    <p className="link text-red-700">Delete</p>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
