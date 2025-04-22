<template>
  <v-container class="py-8">
    <SectionHeader>{{ title }}</SectionHeader>

    <v-row>
      <v-col cols="12" md="10" lg="8" class="mx-auto" v-if="intro">
        <p class="text-body-1 mb-6">{{ intro }}</p>
      </v-col>
    </v-row>

    <DetailCards :items="items" />
  </v-container>
</template>

<script setup lang="ts">
  import type { Card } from '@/types/card'

  defineProps<{
    title: string
    intro?: string
    items: Card[]
  }>()
</script>
