<script setup lang="ts">
import { store } from "../store.ts";
import EmptyCart from "../assets/images/illustration-empty-cart.svg";
</script>

<template>
  <div class="cart">
    <h5 class="cart__title">Your Cart ({{ store.cart.length }})</h5>

    <div v-if="store.cart.length === 0" class="cart__empty">
      <img :src="EmptyCart" />
      <p>Your added items will appear here</p>
    </div>

    <div v-else>
      <ul>
        <li v-for="item in store.cart" :key="item.name">{{ item.name }} - {{ item.quantity }}</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.cart {
  background-color: var(--rose-50);
  padding: 1rem;
  border-radius: 0.5rem;
}

.cart__title {
  color: var(--red);
  font-size: 1rem;
}

.cart__empty {
  display: grid;
  justify-content: center;
  justify-items: center;
}

.cart__empty p {
  font-size: 0.75rem;
  color: var(--rose-500);
  font-weight: 600;
}
</style>
