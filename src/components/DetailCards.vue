<template>
  <v-row dense justify="center">
    <v-col
      v-for="(item, index) in props.items"
      :key="index"
      cols="12"
      lg="6"
      class="d-flex align-stretch my-1"
    >
      <DetailCard
        :icon="item.icon"
        :title="item.title"
        :content="item.description"
        :code="item.code"
        :buttons="item.button"
      />
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
  import type { Card } from '@/types/card'

  const props = defineProps<{ items: Card[] }>()
</script>
