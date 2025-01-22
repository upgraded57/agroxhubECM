import { useContext, useEffect } from "react";
import { UserContext } from "./userContext";
import { useNavigate } from "react-router-dom";

export default function SellerContext({ children }) {
  const navigate = useNavigate();
  const user = useContext(UserContext)?.user;
  useEffect(() => {
    const isSeller = user.type === "farmer" || user.type === "wholesaler";
    if (!isSeller) {
      return navigate("/user/account");
    }
  }, []);
  return children;
}
