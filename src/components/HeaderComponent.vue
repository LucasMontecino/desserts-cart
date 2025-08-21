<script setup lang="ts">
const props = defineProps({
  title: String,
});
</script>

<template>
  <header>
    <h1>{{ props.title || "New Title" }}</h1>
  </header>
</template>

<style scoped>
h1 {
  font-size: 2rem;
  color: var(--rose-900);
}
</style>
