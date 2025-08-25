<script setup lang="ts">
import { computed } from "vue";
import { store } from "../../store.ts";
import IconOrder from "../../assets/images/icon-order-confirmed.svg";
import { getImageUrl } from "../../utils/imageMapping.ts";

const showModal = computed(() => {
  return store.showModal;
});

const totalOrder = computed(() => {
  const total = store.cart.reduce((acc, el) => acc + el.quantity * el.price, 0);
  return total;
});

const handleClick = () => {
  store.setShowModal();
  store.resetCart();
};
</script>

<template>
  <div v-if="showModal" class="modal">
    <div class="modal__card">
      <img :src="IconOrder" />
      <h5 class="modal__card-title">Order Confirmed</h5>
      <p class="modal__card-subtitle">We hope you enjoy your food!</p>
      <div class="modal__cart">
        <ul class="modal__cart-list">
          <li v-for="value in store.cart" :key="value.name" class="modal__cart-item">
            <div class="modal__cart-main">
              <img :src="getImageUrl(value.image.thumbnail)" :alt="value.name" />
              <div class="cart__stats">
                <h3>{{ value.name }}</h3>
                <p>
                  <span class="cart__stats-quantity">{{ value.quantity }}x</span>
                  <span class="cart__stats-price">@ ${{ value.price.toFixed(2) }}</span>
                </p>
              </div>
            </div>

            <span class="modal__cart-price">${{ value.price.toFixed(2) }}</span>
          </li>
        </ul>
        <div class="cart__total">
          <p class="cart__total-text">Order Total</p>
          <p class="cart__total-price">${{ totalOrder.toFixed(2) }}</p>
        </div>
      </div>
      <button class="card__btn" @click="handleClick">Start new order</button>
    </div>
  </div>
</template>

<style scoped>
.modal {
  min-height: 100dvh;
  width: 100%;

  position: absolute;
  top: 0;

  background-color: rgba(0, 0, 0, 0.5);

  display: flex;
  justify-content: center;
  align-items: center;
}
.modal__card {
  width: 100%;
  max-width: 560px;

  background-color: var(--rose-50);
  border-radius: 0.5rem;
  padding: 1rem;
}

.modal__card-title {
  font-size: 1.875rem;
  color: var(--rose-900);
  margin-top: 1rem;
}

.modal__card-subtitle {
  color: var(--rose-500);
}

.modal__cart {
  margin-top: 1rem;

  background-color: var(--rose-100);
  padding: 0 1.5rem 1.5rem;
  border-radius: 0.375rem;
}

.modal__cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 2px solid var(--rose-300);
  padding-block: 1rem;
}

.modal__cart-main {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.modal__cart-main img {
  border-radius: 0.5rem;
}

.cart__stats {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.cart__stats h3 {
  color: var(--rose-900);
  font-size: 1rem;
}

.cart__stats p {
  display: flex;
  gap: 0.5rem;
}

.cart__stats-quantity {
  color: var(--red);
  font-weight: 500;
}

.cart__stats-price {
  color: var(--rose-500);
  font-weight: 500;
}

.modal__cart-price {
  color: var(--rose-900);
  font-weight: 600;
}

.cart__total {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1.5rem;
}

.cart__total-text {
  color: var(--rose-900);
  font-weight: 500;
}

.cart__total-price {
  font-weight: 700;
  color: var(--rose-900);
  font-size: 1.75rem;
}

.card__btn {
  margin-top: 1rem;

  font-family: inherit;
  text-transform: capitalize;
  border-radius: 100px;
  background-color: var(--red);
  color: var(--rose-50);
  font-weight: 500;
  border: none;
  width: 100%;
  padding-block: 1rem;
}
</style>
