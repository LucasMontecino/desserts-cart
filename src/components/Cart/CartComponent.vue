<script setup lang="ts">
import { store } from "../../store.ts";
import CartEmpty from "./CartEmpty.vue";
import CartList from "./CartList.vue";
import { computed } from "vue";

const totalOrder = computed(() => {
  const total = store.cart.reduce((acc, el) => acc + el.quantity * el.price, 0);
  return total;
});
</script>

<template>
  <div class="cart">
    <h5 class="cart__title">
      Your Cart ({{ store.cart.reduce((acc, el) => acc + el.quantity, 0) }})
    </h5>

    <CartEmpty v-if="store.cart.length === 0" />
    <CartList v-else />

    <div v-if="store.cart.length > 0" class="cart__total">
      <p class="cart__total-order">Order Total</p>
      <p class="cart__total-content">${{ totalOrder.toFixed(2) }}</p>
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
  font-size: 1.25rem;
}

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
