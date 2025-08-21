<script setup lang="ts">
import type { CartDessert } from "@/types";

const { item } = defineProps<{ item: CartDessert }>();
</script>

<template>
  <li class="cart__list-item">{{ item.name }} - {{ item.quantity }}</li>
</template>

<style scoped></style>
