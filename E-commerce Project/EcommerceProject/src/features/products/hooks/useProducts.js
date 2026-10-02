import { useQuery } from "@tanstack/react-query";
import { getProductsDataApi } from "../api/getProductsDataApi";

// implement useQuery and QueryFn from react-query
export const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: getProductsDataApi,
  });
};


