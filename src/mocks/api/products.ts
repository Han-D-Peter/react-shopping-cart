import { DELETE_API, GET_API, METHOD, POST_API } from "./types";

const URI = {
  products: {
    uri: "/products",
    productId: {
      uri: "/products/:id",
    },
  },
};

export const productsAPI: (GET_API | DELETE_API | POST_API)[] = [
  {
    method: METHOD.POST,
    uri: URI.products.uri,
    requestBody: {
      products: {
        price: 10000,
        name: "치킨",
        imageUrl: "http://example.com/chicken.jpg",
      },
    },
  },
  { method: METHOD.DELETE, uri: URI.products.productId.uri },
  {
    method: METHOD.GET,
    uri: URI.products.productId.uri,
    response: {
      id: 1,
      price: 10000,
      name: "치킨",
      imageUrl: "http://example.com/chicken.jpg",
    },
  },
  {
    method: METHOD.GET,
    uri: URI.products.uri,
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
];
