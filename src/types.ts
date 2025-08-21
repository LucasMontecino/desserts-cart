export interface Dessert {
  image: {
    thumbnail: string;
    mobile: string;
    tablet: string;
    desktop: string;
  };
  name: string;
  category: string;
  price: number;
}

export interface CartDessert extends Dessert {
  quantity: number;
}

export interface IStore {
  dessert: Dessert[];
  cart: CartDessert[];
  addItemToCart: (dessert: Dessert) => void;
  removeItemFromCart: (dessert: Dessert) => void;
}
