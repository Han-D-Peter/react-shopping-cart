import { BASE_URL } from "../../domains/shared/constants";
import { DELETE_API, GET_API, METHOD, POST_API } from "./types";

export const CART_URI = {
  carts: {
    uri: `${BASE_URL}carts`,
    cartId: {
      uri: `${BASE_URL}carts/:id`,
    },
  },
};

export const cartsAPI: (GET_API | DELETE_API | POST_API)[] = [
  {
    method: METHOD.POST,
    uri: CART_URI.carts.uri,
    requestBody: {
      products: {
        id: 10,
        name: "tes11111t",
        price: 1234,
        imageUrl: "test.com",
      },
    },
  },
  { method: METHOD.DELETE, uri: CART_URI.carts.cartId.uri },
  {
    method: METHOD.GET,
    uri: CART_URI.carts.uri,
    response: {
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
  },
];
