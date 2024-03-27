import { useQuery } from "@tanstack/react-query";
import { createLazyFileRoute } from "@tanstack/react-router";
import { z } from "zod";

export const Route = createLazyFileRoute("/")({
  component: About,
});

function About() {
  const { data } = useQuery({
    queryKey: ["products"],
    queryFn: async () => (await fetch("/carts")).json(),
  });

  console.log("data", data);
  return <div className="p-2">Hello from About!</div>;
}
