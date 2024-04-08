import { useMutation, useQuery } from "@tanstack/react-query";
import cartsRepository from "./carts.clents";

export function useCarts() {
  return useQuery({
    queryKey: ["carts"],
    queryFn: cartsRepository.getCarts,
  });
}

export function useAddProductToCart() {
  return useMutation({
    mutationKey: ["addProductToCart"],
    mutationFn: cartsRepository.addToCart,
    onSuccess() {
      alert("카트 이동 성공");
    },
  });
}

export function useDeleteProductFromCart() {
  return useMutation({
    mutationKey: ["deleteProductFromCart"],
    mutationFn: cartsRepository.deleteProductFromCart,
  });
}
