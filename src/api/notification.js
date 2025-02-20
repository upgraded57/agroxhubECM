import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "./axiosInstance";

export const useGetNotifications = () => {
  const getNotifications = async () => {
    const res = await axiosInstance.get("notifications", { showToast: false });
    return res.data.notifications;
  };

  return useQuery({
    queryKey: ["Notifications"],
    queryFn: getNotifications,
  });
};

export const useGetSingleNotification = (id) => {
  const getSingleNotifications = async () => {
    const res = await axiosInstance.get(`notifications/${id}`, {
      showToast: false,
    });
    return res.data.notification;
  };

  return useQuery({
    queryKey: ["Notification", id],
    queryFn: getSingleNotifications,
  });
};
