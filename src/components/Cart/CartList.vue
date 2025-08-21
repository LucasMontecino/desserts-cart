<script setup lang="ts">
import CartItem from "./CartItem.vue";
import { store } from "../../store.ts";
</script>

<template>
  <ul class="cart__list">
    <CartItem v-for="item in store.cart" :key="item.name" :item="item" />
  </ul>
</template>

<style scope>
.cart__list {
  margin-top: 1.25rem;
}
</style>
