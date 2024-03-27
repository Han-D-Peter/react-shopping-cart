import { http, HttpResponse } from "msw";
import { DELETE_API, GET_API, METHOD, POST_API } from "./api/types";
import { cartsAPI } from "./api/carts";
import { productsAPI } from "./api/products";
import { ordersAPI } from "./api/orders";

export const handlers = [
  ...convertAPIs(cartsAPI),
  ...convertAPIs(productsAPI),
  ...convertAPIs(ordersAPI),
];

// const request = {
//   get: convertGetAPI,
//   post: convertPostAPI,
//   delete: convertDeleteAPI,
// };

function convertAPIs(apis: (GET_API | DELETE_API | POST_API)[]) {
  return apis.map((api) => {
    switch (api.method) {
      case METHOD.GET:
        return convertGetAPI(api as GET_API);
      case METHOD.POST:
        return convertPostAPI(api as POST_API);
      case METHOD.DELETE:
        return convertDeleteAPI(api as DELETE_API);
      default:
        throw new Error("Unhandled method type");
    }
  });
}

function convertGetAPI(api: GET_API) {
  return http[api.method](api.uri as string, () => {
    return HttpResponse.json(api.response);
  });
}
function convertPostAPI(api: POST_API) {
  return http.post(api.uri, async ({ request, params }) => {
    const keys = getParams(api.uri).map((param) => params[param]);
    const info = await request.formData();
    console.log("keys", keys);
    console.log("info", info);
    return HttpResponse.json({ status: "Success" });
  });
}
function convertDeleteAPI(api: DELETE_API) {
  return http.delete(api.uri, () => {
    return HttpResponse.json({ status: "Success" });
  });
}

function getParams(uri: string) {
  const uriNames = uri.split("/").filter((uri) => uri.includes(":"));
  return uriNames;
}
