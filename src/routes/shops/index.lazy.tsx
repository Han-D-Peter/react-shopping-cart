import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/shops/")({
  component: Shops,
});

function Shops() {
  return <div className="p-2">Shops</div>;
}
