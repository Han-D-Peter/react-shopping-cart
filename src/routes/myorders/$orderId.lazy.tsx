import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/myorders/$orderId")({
  component: () => <div>Hello /myorders/$orderId!</div>,
});
