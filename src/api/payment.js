import { useMutation, useQuery } from "@tanstack/react-query";
import { axiosInstance } from "./axiosInstance";

export const useInitiatePayment = () => {
  return useMutation({
    mutationFn: (orderNumber) => {
      return axiosInstance.post("/pay", { orderNumber });
    },
  });
};
