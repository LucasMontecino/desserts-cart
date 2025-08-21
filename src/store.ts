import { reactive } from "vue";
import data from "../data.json";
import type { Dessert, CartDessert } from "./types";

export const store = reactive<{ dessert: Dessert[]; cart: CartDessert[] }>({
  dessert: data,
  cart: [],
  addItemToCart(dessert: Dessert) {
    let cpyCart = [...this.cart];

    const findItem = cpyCart.find((c) => c.name === dessert.name);

    if (!findItem) {
      cpyCart.push({ ...dessert, quantity: 1 });
    } else {
      cpyCart = cpyCart.map((c) =>
        c.name === findItem.name ? { ...c, quantity: c.quantity + 1 } : c
      );
    }

    this.cart = cpyCart;
  },

  removeItemFromCart(dessert: Dessert) {
    let cpyCart = [...this.cart];

    const findItem = cpyCart.find((c) => c.name === dessert.name);

    if (findItem.quantity > 1) {
      cpyCart = cpyCart.map((c) =>
        c.name === dessert.name ? { ...c, quantity: c.quantity - 1 } : c
      );
    } else {
      cpyCart = cpyCart.filter((c) => c.name !== dessert.name);
    }

    this.cart = cpyCart;
  },
});
