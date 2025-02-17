import { useMutation, useQuery } from "@tanstack/react-query";
import { axiosInstance } from "./axiosInstance";

export const useGetSeller = (id) => {
  const getSeller = async () => {
    const res = await axiosInstance.get(`/seller/${id}`, { showToast: false });
    return res.data.seller;
  };

  return useQuery({
    queryKey: ["Seller", id],
    queryFn: getSeller,
  });
};

export const useGetSellers = () => {
  const getSellers = async () => {
    const res = await axiosInstance.get("/seller", { showToast: false });
    return res.data.sellers;
  };

  return useQuery({
    queryKey: ["Sellers"],
    queryFn: getSellers,
  });
};

export const useGetSimilarSellers = (id) => {
  const getSimilarSellers = async () => {
    const res = await axiosInstance.get(`/seller/${id}/similar`, {
      showToast: false,
    });
    return res.data.sellers;
  };

  return useQuery({
    queryKey: ["Similar Sellers", id],
    queryFn: getSimilarSellers,
  });
};

export const useGetSellerProducts = (sellerId, params) => {
  const getSellerProducts = async () => {
    const res = await axiosInstance.get(
      `/seller/${sellerId}/products?${params}`,
      {
        showToast: false,
      }
    );
    return res.data;
  };
  return useQuery({
    queryKey: ["Seller Products", sellerId],
    queryFn: getSellerProducts,
  });
};

export const useGetSellerMostPurchasedProducts = (sellerId) => {
  const getSellerMostPurchasedProducts = async () => {
    if (!sellerId) return null;
    const res = await axiosInstance.get(
      `/seller/${sellerId}/products/mostPurchased`,
      {
        showToast: false,
      }
    );
    return res.data.products;
  };
  return useQuery({
    queryKey: ["Seller Most Purchased Products", sellerId],
    queryFn: getSellerMostPurchasedProducts,
    enabled: !!sellerId,
  });
};

export const useGetSellerNewestProducts = (sellerId) => {
  const getSellerNewestProducts = async () => {
    const res = await axiosInstance.get(`/seller/${sellerId}/products/newest`, {
      showToast: false,
    });
    return res.data.products;
  };
  return useQuery({
    queryKey: ["Seller Newest Products", sellerId],
    queryFn: getSellerNewestProducts,
  });
};
