<template>
  <v-container class="py-8">
    <SectionHeader>{{ title }}</SectionHeader>
    <DetailCards :items="items" />
  </v-container>
</template>

<script setup lang="ts">
  import type { Card } from '@/types/card'

  defineProps<{
    title: string
    items: Card[]
  }>()
</script>
