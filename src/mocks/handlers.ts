import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("/test", () => {
    return HttpResponse.json({ status: 200, msg: "test ok" });
  }),
];
