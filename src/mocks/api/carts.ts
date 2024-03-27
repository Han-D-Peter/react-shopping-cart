import { DELETE_API, GET_API, METHOD, POST_API } from "./types";

const URI = {
  carts: {
    uri: "/carts",
  },
};

export const cartsAPI: (GET_API | DELETE_API | POST_API)[] = [
  {
    method: METHOD.POST,
    uri: URI.carts.uri,
    requestBody: {
      products: {
        id: 10,
        name: "tes11111t",
        price: 1234,
        imageUrl: "test.com",
      },
    },
  },
  { method: METHOD.DELETE, uri: URI.carts.uri },
  {
    method: METHOD.GET,
    uri: URI.carts.uri,
    response: [
      {
        id: 1,
        product: {
          name: "test",
          price: 1234,
          imageUrl: "test.com",
          id: 1,
        },
      },
      {
        id: 5,
        product: {
          name: "tes11111t",
          price: 1234,
          imageUrl: "test.com",
          id: 10,
        },
      },
    ],
  },
];
