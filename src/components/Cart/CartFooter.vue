<script setup lang="ts">
import IconCarbon from "../../assets/images/icon-carbon-neutral.svg";
</script>

<template>
  <div class="cart__footer">
    <div class="cart__carbon">
      <img :src="IconCarbon" />
      <p>This is a <span>carbon-neutral</span> delivery</p>
    </div>
    <button class="cart__footer-btn">Confirm Order</button>
  </div>
</template>

<style scoped>
.cart__footer {
  margin-top: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.cart__carbon {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.375rem;

  width: 100%;
  background-color: var(--rose-100);
  border-radius: 0.375rem;
  color: var(--rose-900);

  padding: 0.875rem 1rem;
}

.cart__carbon span {
  font-weight: 600;
}

.cart__footer-btn {
  width: 100%;

  border-radius: 100px;
  border: none;

  font-family: inherit;
  color: var(--rose-50);
  background-color: var(--red);
  font-weight: 500;

  padding-block: 1rem;
}
</style>
