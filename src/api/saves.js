import { useMutation, useQuery } from "@tanstack/react-query";
import { axiosInstance } from "./axiosInstance";

export const useGetSavedProducts = () => {
  const getSavedProducts = async () => {
    const res = await axiosInstance.get("/saves", { showToast: false });
    return res.data.savedProducts;
  };

  return useQuery({
    queryKey: ["Saves"],
    queryFn: getSavedProducts,
  });
};

export const useSaveProduct = () => {
  return useMutation({
    mutationFn: (productId) => {
      return axiosInstance.post("/saves", {
        productId,
      });
    },
  });
};
