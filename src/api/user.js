import { useMutation, useQuery } from "@tanstack/react-query";
import { axiosInstance } from "./axiosInstance";

export const useGetUser = (id) => {
  const userId = localStorage.getItem("userId");
  const getUser = async () => {
    const res = await axiosInstance.get(`/user/${id}`, { showToast: false });
    return res.data.user;
  };
  return useQuery({
    queryKey: ["User", id],
    queryFn: getUser,
    enabled: !!userId,
    retry: false,
  });
};

export const useEditUser = (id) => {
  return useMutation({
    mutationFn: (data) => {
      return axiosInstance.patch(`/user/${id}`, data);
    },
  });
};
