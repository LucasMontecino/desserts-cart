import { reactive } from "vue";
import data from "../data.json";
import type { IStore } from "./types";

export const store = reactive<IStore>({
  dessert: data,
  cart: [],
  addItemToCart(dessert) {
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

  removeItemFromCart(dessert) {
    let cpyCart = [...this.cart];

    const findItem = cpyCart.find((c) => c.name === dessert.name);

    if (findItem && findItem.quantity > 1) {
      cpyCart = cpyCart.map((c) =>
        c.name === dessert.name ? { ...c, quantity: c.quantity - 1 } : c
      );
    } else {
      cpyCart = cpyCart.filter((c) => c.name !== dessert.name);
    }

    this.cart = cpyCart;
  },

  removeItem(dessert) {
    let cpyCart = [...this.cart];

    cpyCart = cpyCart.filter((item) => item.name !== dessert.name);

    this.cart = cpyCart;
  },
});
