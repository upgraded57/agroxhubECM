import { useMutation, useQuery } from "@tanstack/react-query";
import { axiosInstance } from "./axiosInstance";

export const useSyncCart = () => {
  return useMutation({
    mutationFn: (data) =>
      axiosInstance.post(
        "/cart/sync",
        { cartItems: data },
        { showToast: false }
      ),
  });
};

export const useGetCartItems = () => {
  const getCartItems = async () => {
    const res = await axiosInstance.get("/cart", { showToast: false });
    return res.data.cart;
  };

  return useQuery({
    queryKey: ["Cart"],
    queryFn: getCartItems,
    enabled: false,
    retry: false,
  });
};

export const useAddItemToCart = () => {
  return useMutation({
    mutationFn: (data) => {
      return axiosInstance.post("/cart/add", data);
    },
  });
};

export const useRemoveItemFromCart = () => {
  return useMutation({
    mutationFn: (slug) => {
      return axiosInstance.delete(`/cart/remove/${slug}`);
    },
  });
};
