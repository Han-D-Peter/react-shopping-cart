import { BASE_URL } from "./../../domains/shared/constants";
import { DELETE_API, GET_API, METHOD, POST_API } from "./types";

export const ORDERS_URI = {
  orders: {
    uri: `${BASE_URL}orders`,
    orderId: {
      uri: `${BASE_URL}orders/:id`,
    },
  },
};

export const ordersAPI: (GET_API | DELETE_API | POST_API)[] = [
  {
    method: METHOD.GET,
    uri: ORDERS_URI.orders.orderId.uri,
    response: {
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
  },
  {
    method: METHOD.POST,
    uri: ORDERS_URI.orders.uri,
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
    uri: ORDERS_URI.orders.uri,
    response: {
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
  },
];
