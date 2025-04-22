<template>
  <v-container class="py-8">
    <v-sheet>
      <SectionHeader>{{ title }}</SectionHeader>

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
  defineProps<{
    title: string
    paragraphs: string[]
  }>()
</script>
