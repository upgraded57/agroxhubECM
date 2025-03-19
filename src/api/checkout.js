import { useMutation, useQuery } from "@tanstack/react-query";
import { axiosInstance } from "./axiosInstance";

export const useGetOrder = (orderNumber) => {
  const getOrder = async () => {
    const res = await axiosInstance.get(`/checkout/${orderNumber}`, {
      showToast: false,
    });
    return res.data.order;
  };

  return useQuery({
    queryKey: ["Order"],
    queryFn: getOrder,
    enabled: !!orderNumber,
    retry: 2,
  });
};

export const useUpdateOrderItem = () => {
  return useMutation({
    mutationFn: (data) => {
      return axiosInstance.patch("/checkout", data);
    },
  });
};

export const useCreateOrder = () => {
  return useMutation({
    mutationFn: (data) => {
      return axiosInstance.post("/checkout", data);
    },
  });
};
