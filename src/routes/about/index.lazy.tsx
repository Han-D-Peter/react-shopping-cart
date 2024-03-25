import { createLazyFileRoute } from "@tanstack/react-router";
import Button from "../../domains/shared/components/Button/Button";

export const Route = createLazyFileRoute("/about/")({
  component: Index,
});

function Index() {
  return (
    <div className="p-2">
      <h3>Welcome Home!</h3>
      <Button />
    </div>
  );
}
