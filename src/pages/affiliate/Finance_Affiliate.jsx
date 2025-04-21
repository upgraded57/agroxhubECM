import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa";
import { FaCircleXmark } from "react-icons/fa6";
import graphImg from "../../assets/images/graph.png";
export default function AffiliateFinance() {
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
  ];

  const transactions = [
    {
      status: 1,
      transaction_type: "withdrawal",
      type: "Bank Transfer",
      amount: 35000,
      earnings: "NGN 42,300",
      initiated_at: "25/04/2023 07:43pm",
    },
    {
      status: 2,
      transaction_type: "withdrawal",
      type: "Wallet Transfer",
      amount: 28000,
      earnings: "NGN 31,500",
      initiated_at: "05/12/2023 01:23am",
    },
    {
      status: 0,
      transaction_type: "withdrawal",
      type: "Paypal Topup",
      amount: 21000,
      earnings: "NGN 26,800",
      initiated_at: "18/08/2023 11:59pm",
    },
    {
      status: 1,
      transaction_type: "withdrawal",
      type: "Wallet Transfer",
      amount: 43000,
      earnings: "NGN 58,700",
      initiated_at: "11/06/2023 09:15am",
    },
    {
      status: 0,
      transaction_type: "withdrawal",
      type: "Bank Transfer",
      amount: 22000,
      earnings: "NGN 32,400",
      initiated_at: "30/09/2023 03:30pm",
    },
    {
      status: 2,
      transaction_type: "withdrawal",
      type: "Paypal Topup",
      amount: 15000,
      earnings: "NGN 20,600",
      initiated_at: "09/03/2023 06:45am",
    },
    {
      status: 1,
      transaction_type: "withdrawal",
      type: "Bank Transfer",
      amount: 40000,
      earnings: "NGN 72,900",
      initiated_at: "14/01/2023 02:10pm",
    },
    {
      status: 0,
      transaction_type: "withdrawal",
      type: "Wallet Transfer",
      amount: 29000,
      earnings: "NGN 39,800",
      initiated_at: "22/07/2023 10:00am",
    },
  ];
  return (
    <>
      <div className="my-4">
        <div className="bg-white w-full rounded-lg">
          <p className="text-sm p-4 border-b font-semibold">
            Available Balance
          </p>
          <div className="flex p-4 flex-col md:flex-row gap-2 md:gap-6 items-start md:items-center">
            <h1 className="text-4xl font-semibold">NGN345,026.90</h1>
            <button type="button" className="btn btn-sm px-6 green-gradient">
              Withdraw
            </button>
          </div>
        </div>

        <h4 className="text-sm md:text-xl font-semibold uppercase mt-6">
          earning history
        </h4>
        <div className="block md:flex w-full gap-3 items-stretch">
          <div className="basis-3/4 mb-3 md:mb-0">
            <div className="min-h-full w-full bg-white flex items-center rounded-lg overflow-hidden">
              <div className="w-full"></div>
              <img src={graphImg} alt="Graph Statistics" className="w-full" />
            </div>
          </div>
          <div className="basis-1/4">
            <div className="overflow-x-auto rounded-lg bg-white min-h-full">
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

        <h4 className="text-sm md:text-xl font-semibold uppercase mt-6">
          recent sales
        </h4>
        <div className="w-full bg-white rounded-lg">
          <div className="w-full overflow-x-scroll">
            <table className="table min-w-max">
              {/* head */}
              <thead>
                <tr className="uppercase">
                  <th>Product Image</th>
                  <th>Product Name</th>
                  <th>Product Price</th>
                  <th>Quantity Sold</th>
                  <th>Time Sold</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {productsTable.map((product) => (
                  <tr key={product.name}>
                    <td>
                      <div className="h-12 w-[62px] rounded-xs overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </td>
                    <td>
                      <p>{product.name}</p>
                    </td>
                    <td>{product.earnings}</td>
                    <td>{product.carts}</td>
                    <td>{product.generated_at}</td>
                    <td>
                      <div className="flex items-center gap-2">
                        <p className="link text-light-green-clr">Copy Link</p>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <h4 className="text-sm md:text-xl font-semibold uppercase mt-6">
          transaction history
        </h4>
        <div className="w-full bg-white rounded-lg">
          <div className="w-full overflow-x-scroll">
            <table className="table min-w-max">
              {/* head */}
              <thead>
                <tr className="uppercase">
                  <th>Status</th>
                  <th>Transaction type</th>
                  <th>Type </th>
                  <th>Amount (NGN)</th>
                  <th>Earnings</th>
                  <th>Initiated At</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction) => (
                  <tr key={transaction.name}>
                    <td>
                      {transaction.status === 0 ? (
                        <span className="flex items-center gap-2">
                          <FaExclamationCircle
                            className="text-yellow-clr text-xl"
                            title="Suspended"
                          />
                          <p className="hidden md:block text-sm">Suspended</p>
                        </span>
                      ) : transaction.status === 1 ? (
                        <span className="flex items-center gap-2">
                          <FaCheckCircle
                            className="text-xl text-light-green-clr"
                            title="Active"
                          />
                          <p className="hidden md:block text-sm">Active</p>
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <FaCircleXmark
                            className="text-xl text-red-600"
                            title="Active"
                          />
                          <p className="hidden md:block text-sm">Declined</p>
                        </span>
                      )}
                    </td>
                    <td>
                      <p>{transaction.transaction_type}</p>
                    </td>
                    <td>{transaction.type}</td>
                    <td>{transaction.amount}</td>
                    <td>{transaction.earnings}</td>
                    <td>{transaction.initiated_at}</td>
                    <td>
                      <div className="flex items-center gap-2">
                        <p className="link text-light-green-clr">View Log</p>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
