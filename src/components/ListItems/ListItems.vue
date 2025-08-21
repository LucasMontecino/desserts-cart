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
}
</style>
