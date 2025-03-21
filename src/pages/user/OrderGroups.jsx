import { useParams } from "react-router-dom";

export default function OrderGroups() {
  const { orderNumber } = useParams();
  return <div>Order - {orderNumber}</div>;
}
