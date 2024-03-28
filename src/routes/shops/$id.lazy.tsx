import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/shops/$id")({
  component: () => <div>Hello /shops/$id!</div>,
});
