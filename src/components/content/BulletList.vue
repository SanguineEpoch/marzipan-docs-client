<template>
  <ul class="bullet-list pa-0 ma-0">
    <li
      v-for="(item, index) in items"
      :key="index"
      class="d-flex align-start mb-2"
    >
      <v-icon :icon="item.icon" color="primary" class="me-2 mt-0_5" />
      <span class="text-body-1 text-wrap">{{ item.title }}</span>
    </li>
  </ul>
</template>

<script setup lang="ts">
  defineProps<{
    items: Array<{ title: string; icon: string }>
  }>()
</script>

<style scoped>
  .bullet-list {
    list-style-type: none;
  }
</style>
