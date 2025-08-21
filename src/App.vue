<script setup lang="ts">
import HeaderComponent from "./components/HeaderComponent.vue";
import ListItems from "./components/ListItems/ListItems.vue";
import CartComponent from "./components/Cart/CartComponent.vue";
</script>

<template>
  <div class="container">
    <HeaderComponent title="Desserts" />
    <ListItems />
    <CartComponent />
  </div>
</template>
