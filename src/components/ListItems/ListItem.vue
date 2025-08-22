<script setup lang="ts">
import type { Dessert } from "@/types";
import IconAddToCart from "../../assets/images/icon-add-to-cart.svg";
import IncrementQuantity from "../../assets/images/icon-increment-quantity.svg";
import DecrementQuantity from "../../assets/images/icon-decrement-quantity.svg";
import { store } from "../../store.ts";
import { computed } from "vue";
import { getImageUrl } from "../../utils/imageMapping";

const { item } = defineProps<{ item: Dessert }>();

const cartCurrentItem = computed(() => {
  const cartItem = store.cart.find((i) => i.name === item.name);
  return cartItem ? cartItem : null;
});
</script>

<template>
  <div class="card">
    <div class="card__img-content">
      <img
        :src="getImageUrl(item.image.mobile)"
        :alt="item.name"
        class="card__img"
        :class="{ 'card-selected': cartCurrentItem }"
      />
      <button
        v-if="store.cart.findIndex((i) => i.name === item.name) === -1"
        class="card__btn"
        @click="store.addItemToCart(item)"
      >
        <img :src="IconAddToCart" /> Add to Cart
      </button>
      <button v-else class="card__btn card__btn--active">
        <img :src="DecrementQuantity" @click="store.removeItemFromCart(item)" />
        {{ cartCurrentItem?.quantity }}
        <img :src="IncrementQuantity" @click="store.addItemToCart(item)" />
      </button>
    </div>
    <div class="card__main">
      <h4 class="card__category">{{ item.category }}</h4>
      <h3 class="card__name">{{ item.name }}</h3>
      <h5 class="card__price">${{ item.price.toFixed(2) }}</h5>
    </div>
  </div>
</template>

<style scoped>
.card__img-content {
  position: relative;
}

.card__btn {
  position: absolute;
  bottom: -1rem;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  align-items: center;
  gap: 0.5rem;

  font-family: inherit;
  color: var(--rose-900);
  background-color: var(--rose-50);
  font-weight: 600;
  border: none;
  border-radius: 100px;
  padding: 0.5rem 1rem;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.3);

  min-width: 135px;
}

.card__btn--active {
  background-color: var(--red);
  color: var(--rose-100);

  justify-content: space-between;
}

.card__img {
  border-radius: 0.5rem;
}

.card-selected {
  border: 3px solid var(--red);
}

.card__main {
  margin-block: 1.5rem;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.card__category {
  color: var(--rose-300);
  font-weight: 400;
  font-size: 1rem;
}

.card__name {
  color: var(--rose-900);
  font-weight: 600;
}

.card__price {
  color: var(--red);
  font-weight: 600;
  font-size: 1.125rem;
}
</style>
