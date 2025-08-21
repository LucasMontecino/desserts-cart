<script setup lang="ts">
import { store } from "../../store.ts";
import CartEmpty from "./CartEmpty.vue";
import CartList from "./CartList.vue";
</script>

<template>
  <div class="cart">
    <h5 class="cart__title">Your Cart ({{ store.cart.length }})</h5>

    <CartEmpty v-if="store.cart.length === 0" />
    <CartList v-else />
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
</style>
