import { ReactNode, useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "./userContext";

export default function SellerContext({ children }: { children: ReactNode }) {
  const user = useContext(UserContext)?.user;

  const isSeller = user?.type === "farmer" || user?.type === "wholesaler";
  if (!isSeller) {
    return <Navigate to="/user/account" />;
  }

  return children;
}
