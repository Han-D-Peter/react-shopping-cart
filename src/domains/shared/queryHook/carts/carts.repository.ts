import { z } from "zod";
import { cartsScheme } from "./carts.type";
import { Product, Response, responseScheme } from "../types";
import { URI } from "../../URLs";

class CartsRepository {
  async getCarts() {
    try {
      const response = await fetch(URI.CART_URI);
      const responseData = await response.json();
      const zodParsed = responseScheme(cartsScheme).parse(responseData);
      return zodParsed;
    } catch (error) {
      throw new Error("getCarts api 의 오류.");
    }
  }

  async addToCart(product: Product) {
    const response = await fetch(URI.CART_URI, {
      method: "POST",
      body: JSON.stringify({ product }),
    });

    const responseData: Response<{}> = await response.json();
    const zodParsed = responseScheme(z.object({})).parse(responseData);
    return zodParsed;
  }

  async deleteProductFromCart({ id }: { id: number }) {
    return fetch(`${URI.CART_URI}/${id}`, { method: "DELETE" }).then<
      Response<{}>
    >((res) => {
      return responseScheme(z.object({})).parse(res.json());
    });
  }
}

export default new CartsRepository();
