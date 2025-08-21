<script setup lang="ts">
import { store } from "../../store.ts";
</script>

<template>
  <h5 class="cart__title">
    Your Cart ({{ store.cart.reduce((acc, el) => acc + el.quantity, 0) }})
  </h5>
</template>

<style scoped>
.cart__title {
  color: var(--red);
  font-size: 1.25rem;
}
</style>
