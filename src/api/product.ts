import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";
import { axiosInstance } from "./axiosInstance";

export const useGetProductCategories = () => {
  const getProductCategories = async () => {
    const res = await axiosInstance.get("/product/categories", {
      showToast: false,
    });
    return res.data.categories as Category[];
  };

  return useQuery({
    queryKey: ["Product Categories"],
    queryFn: getProductCategories,
  });
};

export const useGetProducts = (queryParams: URLSearchParams) => {
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

export const useGetRecentProducts = (slugs: string[]) => {
  const getRecentProducts = async () => {
    const queryString = new URLSearchParams({
      slugs: JSON.stringify(slugs),
    }).toString();
    const res = await axiosInstance.get(`/product/recent?${queryString}`, {
      showToast: false,
    });
    return res.data.products as Product[];
  };

  return useQuery({
    queryKey: ["Recent Products", slugs],
    queryFn: getRecentProducts,
    enabled: !!(slugs?.length > 0),
  });
};

export const useGetSingleProduct = (slug: string) => {
  const getSingleProduct = async () => {
    const res = await axiosInstance.get(`/product/${slug}`, {
      showToast: false,
    });
    return res.data.product as Product;
  };

  return useQuery({
    queryKey: ["Product", slug],
    queryFn: getSingleProduct,
    enabled: !!slug,
  });
};

export const useGetSimilarProducts = (slug: string) => {
  const getSimilarProducts = async () => {
    const res = await axiosInstance.get(`/product/${slug}/similar`, {
      showToast: false,
    });
    return res.data.products as Product[];
  };

  return useQuery({
    queryKey: ["Similar Product", slug],
    queryFn: getSimilarProducts,
    enabled: !!slug,
  });
};

export const useCreateProduct = () => {
  return useMutation({
    mutationFn: (data: FormData) => {
      return axiosInstance.post("/product/create", data);
    },
  });
};

export const UseDeleteProduct = (
  queryClient: QueryClient,
  sellerId: string
) => {
  return useMutation({
    mutationFn: (slug: string) => {
      return axiosInstance.delete(`/product/${slug}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["Seller Products", sellerId],
      });
    },
  });
};
