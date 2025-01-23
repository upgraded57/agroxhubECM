import { useMutation, useQuery } from "@tanstack/react-query";
import { axiosInstance } from "./axiosInstance";

export const useGetProductCategories = () => {
  const getProductCategories = async () => {
    const res = await axiosInstance.get("/product/categories", {
      showToast: false,
    });
    return res.data.categories;
  };

  return useQuery({
    queryKey: ["Product Categories"],
    queryFn: getProductCategories,
  });
};

export const useGetProducts = (queryParams) => {
  const getProducts = async () => {
    const res = await axiosInstance.get(`/product?${queryParams}`, {
      showToast: false,
    });
    return res.data;
  };

  return useQuery({
    queryKey: ["Products", JSON.stringify(Object.fromEntries(queryParams))],
    queryFn: getProducts,
  });
};

export const useGetRecentProducts = (slugs) => {
  const getRecentProducts = async () => {
    const queryString = new URLSearchParams({
      slugs: JSON.stringify(slugs),
    }).toString();
    const res = await axiosInstance.get(`/product/recent?${queryString}`, {
      showToast: false,
    });
    return res.data.products;
  };

  return useQuery({
    queryKey: ["Recent Products", slugs],
    queryFn: getRecentProducts,
    enabled: !!slugs?.length,
  });
};

export const useGetSingleProduct = (slug) => {
  const getSingleProduct = async () => {
    const res = await axiosInstance.get(`/product/${slug}`, {
      showToast: false,
    });
    return res.data.product;
  };

  return useQuery({
    queryKey: ["Product", slug],
    queryFn: getSingleProduct,
  });
};

export const useGetSimilarProducts = (slug) => {
  const getSimilarProducts = async () => {
    const res = await axiosInstance.get(`/product/${slug}/similar`, {
      showToast: false,
    });
    return res.data.products;
  };

  return useQuery({
    queryKey: ["Similar Product", slug],
    queryFn: getSimilarProducts,
  });
};

export const useCreateProduct = () => {
  return useMutation({
    mutationFn: (data) => {
      return axiosInstance.post("/product/create", data);
    },
  });
};

export const UseDeleteProduct = (queryClient, sellerId) => {
  return useMutation({
    mutationFn: (slug) => {
      return axiosInstance.delete(`/product/${slug}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["Seller Products", sellerId],
      });
    },
  });
};
