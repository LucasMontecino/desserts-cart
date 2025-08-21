<script setup lang="ts">
import type { CartDessert } from "@/types";
import IconRemove from "../../assets/images/icon-remove-item.svg";
import { store } from "../../store.ts";

const { item } = defineProps<{ item: CartDessert }>();
</script>

<template>
  <li class="cart__list-item">
    <div class="cart__main">
      <h5 class="cart__main-title">{{ item.name }}</h5>
      <p class="cart__main-info">
        <span class="cart__quantity">{{ item.quantity }}x</span>
        <span class="cart__price">@ ${{ item.price.toFixed(2) }}</span>
        <span class="cart__total">${{ (item.price * item.quantity).toFixed(2) }}</span>
      </p>
    </div>

    <button class="cart__btn" @click="store.removeItem(item)"><img :src="IconRemove" /></button>
  </li>
</template>

<style scoped>
.cart__list-item {
  list-style: none;

  padding-block: 0.875rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid var(--rose-100);
}

.cart__main {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.cart__main-title {
  color: var(--rose-900);
}

.cart__main-info {
  display: flex;
  gap: 0.875rem;

  font-size: 0.875rem;
  font-weight: 600;
}

.cart__quantity {
  color: var(--red);
}

.cart__price {
  color: var(--rose-300);
  font-weight: 500;
}

.cart__total {
  color: var(--rose-400);
}

.cart__btn {
  aspect-ratio: 1;

  border-radius: 50%;
  background-color: transparent;
  border: 3px solid var(--rose-300);
}
</style>
