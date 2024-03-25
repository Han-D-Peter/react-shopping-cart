import { useQuery } from "@tanstack/react-query";
import { createLazyFileRoute } from "@tanstack/react-router";
import { z } from "zod";

export const Route = createLazyFileRoute("/")({
  component: About,
});

function About() {
  return <div className="p-2">Hello from About!</div>;
}
