import { useMutation, useQuery } from "@tanstack/react-query";
import { axiosInstance } from "./axiosInstance";

export const useGetUser = (id: string) => {
  const userId = localStorage.getItem("userId");
  const getUser = async () => {
    const res = await axiosInstance.get(`/user/${id}`, { showToast: false });
    return res.data.user as User;
  };
  return useQuery({
    queryKey: ["User", id],
    queryFn: getUser,
    enabled: !!userId,
    retry: false,
  });
};

export const useEditUser = (id: string) => {
  return useMutation({
    mutationFn: (data: FormData) => {
      return axiosInstance.patch(`/user/${id}`, data);
    },
  });
};
