import React, { createContext, ReactNode } from "react";
import { useGetUser } from "../api/user";
import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import Loader from "../components/loader/Loader";

interface UserContextProp {
  user: User | null;
}
export const UserContext = createContext<UserContextProp>({ user: null });
const currentLocation = window.location.pathname;

// Provider component
export const UserProvider = ({ children }: { children: ReactNode }) => {
  const userId = localStorage.getItem("userId");
  if (!userId) {
    return <Navigate to={`/auth/login?from=${currentLocation}`} />;
  }

  const token = localStorage.getItem("token");
  if (token) {
    const decoded = jwtDecode(token);
    const currentDate = new Date().getTime();
    if (decoded.exp && decoded.exp < Math.floor(currentDate / 1000)) {
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
    }
  }

  const { isLoading, data: user } = useGetUser(userId);

  if (isLoading) return <Loader type="full" />;

  if (!isLoading && !user) {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    return <Navigate to={`/auth/login?from=${currentLocation}`} />;
  }

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};
