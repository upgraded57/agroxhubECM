import axios from "axios";
import toast from "react-hot-toast";

const baseURL = import.meta.env.VITE_BASE_URL || "http://localhost:8800/api/v1";

export const axiosInstance = axios.create({
  baseURL,
});

let toastId;

axiosInstance.interceptors.request.use(
  (config) => {
    // Check for the showToast flag
    if (config.showToast !== false) {
      toastId = toast.loading("Loading");
    }
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    if (error.config?.showToast !== false) {
      toast.error(error?.response?.data?.message || "Request error", {
        id: toastId,
      });
    }
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    if (response.config.showToast !== false) {
      toast.success(response.data?.message || "Success", { id: toastId });
    }
    return response;
  },
  (error) => {
    if (error.config?.showToast !== false) {
      toast.error(error?.response?.data?.message || "Something went wrong", {
        id: toastId,
      });
    }

    if (
      error.status === 401 &&
      error.response.data.message === "Session expired. Please login again"
    ) {
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
    }
    return Promise.reject(error);
  }
);
