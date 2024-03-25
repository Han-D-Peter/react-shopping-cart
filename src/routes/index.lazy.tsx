import { useQuery } from "@tanstack/react-query";
import { createLazyFileRoute } from "@tanstack/react-router";
import { z } from "zod";

export const Route = createLazyFileRoute("/")({
  component: About,
});

const testScheme = z.object({
  status: z.number(),
  msg: z.string(),
});

type Test = z.infer<typeof testScheme>;

function About() {
  const { data } = useQuery<Test>({
    queryKey: ["test"],
    queryFn: () => fetch("/test").then((res) => res.json()),
  });

  if (data) {
    testScheme.parse(data);
  }

  console.log("data", data);

  console.log("data", data);
  return <div className="p-2">Hello from About!</div>;
}
