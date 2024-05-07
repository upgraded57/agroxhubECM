import React from "react";
import TopSellingProducts from "./../../components/topSellingProducts/TopSellingProducts";
import MostClickedProducts from "../../components/mostClickedProducts/MostClickedProducts";

export default function AffiliateProducts() {
  const productsTable = [
    {
      id: 1,
      name: "Fresh Tomatoes",
      image: "https://source.unsplash.com/200x200/?fresh-tomatoes",
      price: "NGN 25,000",
      qty: "30 baskets",
    },
    {
      id: 2,
      name: "Bag of Rice",
      image: "https://source.unsplash.com/200x200/?bag-of-rice",
      price: "NGN 32,560",
      qty: "159 bags",
    },
    {
      id: 3,
      name: "Palm Oil",
      image: "https://source.unsplash.com/200x200/?palm-oil",
      price: "NGN 18,500",
      qty: "45 gallons",
    },
    {
      id: 4,
      name: "Groundnut Oil",
      image: "https://source.unsplash.com/200x200/?groundnut-oil",
      price: "NGN 15,750",
      qty: "80 bottles",
    },
    {
      id: 5,
      name: "Yam Tubers",
      image: "https://source.unsplash.com/200x200/?yam-tubers",
      price: "NGN 20,300",
      qty: "55 tubers",
    },
    {
      id: 6,
      name: "Plantain Bunch",
      image: "https://source.unsplash.com/200x200/?plantain-bunch",
      price: "NGN 27,800",
      qty: "40 bunches",
    },
    {
      id: 7,
      name: "Cassava Flour",
      image: "https://source.unsplash.com/200x200/?cassava-flour",
      price: "NGN 19,900",
      qty: "65 bags",
    },
    {
      id: 8,
      name: "Chicken Eggs",
      image: "https://source.unsplash.com/200x200/?chicken-eggs",
      price: "NGN 5,600",
      qty: "180 crates",
    },
    {
      id: 9,
      name: "Fresh Fish",
      image: "https://source.unsplash.com/200x200/?fresh-fish",
      price: "NGN 28,400",
      qty: "35 cartons",
    },
    {
      id: 10,
      name: "Goat Meat",
      image: "https://source.unsplash.com/200x200/?goat-meat",
      price: "NGN 23,900",
      qty: "75 kg",
    },
    {
      id: 11,
      name: "Oranges",
      image: "https://source.unsplash.com/200x200/?oranges",
      price: "NGN 9,500",
      qty: "120 crates",
    },
    {
      id: 12,
      name: "Watermelon",
      image: "https://source.unsplash.com/200x200/?watermelon",
      price: "NGN 15,800",
      qty: "45 pieces",
    },
    {
      id: 13,
      name: "Cucumber",
      image: "https://source.unsplash.com/200x200/?cucumber",
      price: "NGN 7,300",
      qty: "90 baskets",
    },
    {
      id: 14,
      name: "Carrot",
      image: "https://source.unsplash.com/200x200/?carrot",
      price: "NGN 11,200",
      qty: "110 sacks",
    },
    {
      id: 15,
      name: "Sweet Potato",
      image: "https://source.unsplash.com/200x200/?sweet-potato",
      price: "NGN 13,600",
      qty: "65 baskets",
    },
    {
      id: 16,
      name: "Cabbage",
      image: "https://source.unsplash.com/200x200/?cabbage",
      price: "NGN 8,700",
      qty: "80 heads",
    },
    {
      id: 17,
      name: "Onion",
      image: "https://source.unsplash.com/200x200/?onion",
      price: "NGN 6,900",
      qty: "120 sacks",
    },
    {
      id: 18,
      name: "Garlic",
      image: "https://source.unsplash.com/200x200/?garlic",
      price: "NGN 10,500",
      qty: "55 sacks",
    },
    {
      id: 19,
      name: "Ginger",
      image: "https://source.unsplash.com/200x200/?ginger",
      price: "NGN 17,800",
      qty: "40 bags",
    },
    {
      id: 20,
      name: "Breadfruit",
      image: "https://source.unsplash.com/200x200/?breadfruit",
      price: "NGN 14,200",
      qty: "85 fruits",
    },
  ];
  return (
    <>
      <TopSellingProducts noLink />
      <MostClickedProducts noLink />
      <div className="w-full bg-white rounded-lg pt-6">
        <div class="join flex items-center justify-center">
          <input
            type="text"
            className="input input-bordered join-item md:min-w-[350px]"
            placeholder="Search a product"
          />
          <button className="btn join-item green-gradient">Search</button>
        </div>
        <div className="w-full overflow-x-scroll mt-4">
          <table className="table min-w-max">
            {/* head */}
            <thead>
              <tr className="uppercase">
                <th>Product Image</th>
                <th>Product Name</th>
                <th>Product Price</th>
                <th>Quantity in stock</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {productsTable.map((product) => (
                <tr key={product.id}>
                  <td>
                    <div className="h-12 w-[62px] rounded-sm overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </td>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.qty}</td>
                  <td>
                    <p className="link text-light-green-clr">
                      Generate Affiliate Link
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
