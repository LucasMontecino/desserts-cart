<script setup lang="ts">
import CartEmpty from "./CartEmpty.vue";
import CartList from "./CartList.vue";
import CartTotal from "./CartTotal.vue";
import CartFooter from "./CartFooter.vue";
import CartTitle from "./CartTitle.vue";
import { store } from "../../store.ts";
</script>

<template>
  <div class="cart">
    <CartTitle />

    <CartEmpty v-if="store.cart.length === 0" />

    <CartList v-else />

    <CartTotal v-if="store.cart.length > 0" />

    <CartFooter v-if="store.cart.length > 0" />
  </div>
</template>

<style scoped>
.cart {
  background-color: var(--rose-50);
  padding: 1rem;
  border-radius: 0.5rem;
}
</style>
