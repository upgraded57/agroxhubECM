import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "./axiosInstance";

export const useLoginMutation = () => {
  return useMutation({
    mutationFn: (data) => {
      return axiosInstance.post("/auth/login", data);
    },
  });
};

export const useSignupMutation = () => {
  return useMutation({
    mutationFn: (data) => {
      return axiosInstance.post("/auth/signup", data);
    },
  });
};

export const useVerifyOtpMutation = () => {
  return useMutation({
    mutationFn: (data) => {
      return axiosInstance.post("/auth/verify-otp", data);
    },
  });
};

export const useResendOtpMutation = () => {
  return useMutation({
    mutationFn: (data) => {
      return axiosInstance.post("/auth/resend-otp", data);
    },
  });
};
