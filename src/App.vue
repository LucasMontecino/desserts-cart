<script setup lang="ts">
import HeaderComponent from "./components/HeaderComponent.vue";
import ListItems from "./components/ListItems/ListItems.vue";
import CartComponent from "./components/Cart/CartComponent.vue";
import ModalComponent from "./components/Modal/ModalComponent.vue";
</script>

<template>
  <div class="container">
    <HeaderComponent title="Desserts" />
    <div class="row">
      <ListItems />
      <CartComponent />
    </div>
  </div>
  <ModalComponent />
</template>

<style scoped>
@media (min-width: 1440px) {
  .row {
    display: flex;
    align-items: flex-start;

    gap: 1rem;
  }
}
</style>
