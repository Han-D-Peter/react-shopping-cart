import { DELETE_API, GET_API, METHOD, POST_API } from "./types";

const URI = {
  orders: {
    uri: "/orders",
    orderId: {
      uri: "/orders/:id",
    },
  },
};

export const ordersAPI: (GET_API | DELETE_API | POST_API)[] = [
  {
    method: METHOD.GET,
    uri: URI.orders.orderId.uri,
    response: {
      id: 1,
      orderDetails: [
        {
          id: 1,
          price: 10000,
          name: "치킨",
          imageUrl: "http://example.com/chicken.jpg",
          quantity: 5,
        },
        {
          id: 2,
          price: 20000,
          name: "피자",
          imageUrl: "http://example.com/pizza.jpg",
          quantity: 3,
        },
      ],
    },
  },
  {
    method: METHOD.POST,
    uri: URI.orders.uri,
    requestBody: {
      orderDetails: [
        {
          id: 1,
          price: 10000,
          name: "치킨",
          imageUrl: "http://example.com/chicken.jpg",
          quantity: 5,
        },
        {
          id: 2,
          price: 20000,
          name: "피자",
          imageUrl: "http://example.com/pizza.jpg",
          quantity: 3,
        },
      ],
    },
  },
  {
    method: METHOD.GET,
    uri: URI.orders.uri,
    response: [
      {
        id: 1,
        orderDetails: [
          {
            id: 1,
            price: 10000,
            name: "치킨",
            imageUrl: "http://example.com/chicken.jpg",
            quantity: 5,
          },
          {
            id: 2,
            price: 20000,
            name: "피자",
            imageUrl: "http://example.com/pizza.jpg",
            quantity: 3,
          },
        ],
      },
      {
        id: 2,
        orderDetails: [
          {
            id: 1,
            price: 10000,
            name: "치킨",
            imageUrl: "http://example.com/chicken.jpg",
            quantity: 5,
          },
          {
            id: 2,
            price: 20000,
            name: "피자",
            imageUrl: "http://example.com/pizza.jpg",
            quantity: 3,
          },
        ],
      },
    ],
  },
];
