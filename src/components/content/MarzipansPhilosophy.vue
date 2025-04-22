<template>
  <v-container class="py-8">
    <v-sheet>
      <SectionHeader>{{ title }}</SectionHeader>
      <v-row>
        <v-col cols="12" md="10" lg="8" class="mx-auto" v-if="intro">
          <p class="text-body-1 mb-6">{{ intro }}</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="10" lg="8" class="mx-auto">
          <p
            v-for="(paragraph, i) in paragraphs"
            :key="i"
            class="text-body-1 mb-6"
          >
            {{ paragraph }}
          </p>
        </v-col>
      </v-row>
    </v-sheet>
  </v-container>
</template>

<script setup lang="ts">
  import type { Button } from '@/types/card'

  defineProps<{
    title: string
    intro: string
    paragraphs: string[]
    cta: Button[]
  }>()
</script>
