import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/carts/")({
  component: Index,
});

function Index() {
  return (
    <div className="p-2">
      <h3>carts</h3>
    </div>
  );
}
