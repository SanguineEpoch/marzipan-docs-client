<template>
  <v-container class="py-8">
    <SectionHeader>
      <v-icon icon="mdi-flag-outline" />
      {{ title }}
      <v-icon icon="mdi-flag-outline" />
    </SectionHeader>

    <v-row>
      <v-col cols="12" md="10" lg="8" class="mx-auto">
        <BulletList :items="items" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
  defineProps<{
    title: string
    items: Array<{ title: string; icon: string }>
  }>()
</script>
