<script setup lang="ts">
import { store } from "../../store.ts";
import ListItem from "./ListItem.vue";
</script>

<template>
  <div class="list-items">
    <ListItem v-for="item in store.dessert" :key="item.name" :item="item" />
  </div>
</template>

<style scoped>
.list-items {
  margin-top: 2rem;

  display: grid;
}

@media (min-width: 700px) {
  .list-items {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
}

@media (min-width: 1440px) {
  .list-items {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
