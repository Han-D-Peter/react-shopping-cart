import { useQuery } from "@tanstack/react-query";
import { createLazyFileRoute } from "@tanstack/react-router";
import {
  useAddProductToCart,
  useCarts,
  useDeleteProductFromCart,
} from "../domains/shared/queryHook/carts/carts.query";
import {
  useCreateOrder,
  useOrder,
  useOrders,
} from "../domains/shared/queryHook/orders/orders.query";
import {
  useCreateProduct,
  useDeleteProduct,
  useProduct,
  useProducts,
} from "../domains/shared/queryHook/products/products.query";

export const Route = createLazyFileRoute("/")({
  component: About,
});

function About() {
  const { mutate } = useDeleteProduct();

  function onMutate() {
    mutate(1, {
      onSuccess() {
        alert("success");
      },
    });
  }

  return (
    <div className="p-2">
      Hello from About
      <button onClick={onMutate}>mutate</button>
    </div>
  );
}
