<template>
  <v-container>
    <v-alert
      :color="backgroundColor"
      variant="tonal"
      border="start"
      class="my-8 pa-6 rounded-lg"
    >
      <div :class="['mb-3', textClass, 'text-h5']">
        <v-icon v-if="icon" :icon="icon" class="me-2" :color="textColor" />
        <span class="font-weight-medium text-h5">
          {{ title }}
        </span>
      </div>

      <div class="text-body-2" :class="textClass" v-if="Array.isArray(text)">
        <p v-for="(paragraph, index) in text" :key="index" class="mb-2">
          {{ paragraph }}
        </p>
      </div>

      <div class="text-body-2" :class="textClass" v-else>
        {{ text }}
      </div>
      <!-- need to cycle though ctas here -->
    </v-alert>
  </v-container>
</template>

<script setup lang="ts">
  import { computed } from 'vue'

  const props = defineProps<{
    title: string
    text: string | string[]
    backgroundColor?: string
    textColor?: string
    icon?: string
  }>()

  const backgroundColor = props.backgroundColor ?? 'warning'
  const textColor = props.textColor ?? 'primary'
  const textClass = computed(() => `text-${textColor}`)
</script>
