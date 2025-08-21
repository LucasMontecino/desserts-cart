<script setup lang="ts">
import { store } from "../../store.ts";
import { computed } from "vue";

const totalOrder = computed(() => {
  const total = store.cart.reduce((acc, el) => acc + el.quantity * el.price, 0);
  return total;
});
</script>

<template>
  <div class="cart__total">
    <p class="cart__total-order">Order Total</p>
    <p class="cart__total-content">${{ totalOrder.toFixed(2) }}</p>
  </div>
</template>

<style scoped>
.cart__total {
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-top: 1rem;
}

.cart__total-order {
  font-size: 1rem;
  color: var(--rose-500);
  font-weight: 500;
}

.cart__total-content {
  font-size: 1.5rem;
  color: var(--rose-900);
  font-weight: 700;
}
</style>
