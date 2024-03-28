import { BASE_URL } from "../../domains/shared/constants";
import { DELETE_API, GET_API, METHOD, POST_API } from "./types";

export const PRODUCTS_URI = {
  products: {
    uri: `${BASE_URL}products`,
    productId: {
      uri: `${BASE_URL}products/:id`,
    },
  },
};

export const productsAPI: (GET_API | DELETE_API | POST_API)[] = [
  {
    method: METHOD.POST,
    uri: PRODUCTS_URI.products.uri,
    requestBody: {
      products: {
        price: 10000,
        name: "치킨",
        imageUrl: "http://example.com/chicken.jpg",
      },
    },
  },
  { method: METHOD.DELETE, uri: PRODUCTS_URI.products.productId.uri },
  {
    method: METHOD.GET,
    uri: PRODUCTS_URI.products.productId.uri,
    response: {
      response: {
        id: 1,
        price: 10000,
        name: "치킨",
        imageUrl: "http://example.com/chicken.jpg",
      },
    },
  },
  {
    method: METHOD.GET,
    uri: PRODUCTS_URI.products.uri,
    response: {
      response: [
        {
          id: 1,
          price: 10000,
          name: "치킨",
          imageUrl: "http://example.com/chicken.jpg",
        },
        {
          id: 2,
          price: 20000,
          name: "피자",
          imageUrl: "http://example.com/pizza.jpg",
        },
      ],
    },
  },
];
