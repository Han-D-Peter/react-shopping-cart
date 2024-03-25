import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/detail/$detailId")({
  component: () => <div>Hello /detail/$detailId!</div>,
});
