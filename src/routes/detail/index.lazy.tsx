import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/detail/")({
  component: Index,
});

function Index() {
  return (
    <div className="p-2">
      <h3>detail</h3>
    </div>
  );
}
