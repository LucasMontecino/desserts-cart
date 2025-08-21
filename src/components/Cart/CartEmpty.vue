<script setup lang="ts">
import EmptyCart from "../../assets/images/illustration-empty-cart.svg";
</script>

<template>
  <div class="cart__empty">
    <img :src="EmptyCart" />
    <p>Your added items will appear here</p>
  </div>
</template>

<style scoped>
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
