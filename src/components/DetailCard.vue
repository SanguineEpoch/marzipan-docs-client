<template>
  <v-card
    class="pa-4 mx-1 flex-grow-1 d-flex flex-column h-100"
    color="surface"
    :elevation="24"
  >
    <v-card-title class="pa-0 mb-2 d-flex flex-wrap align-center">
      <v-icon size="36" class="me-2" color="primary" :icon />
      <h3 class="text-h6 font-weight-medium mb-2">
        {{ title }}
      </h3>
    </v-card-title>

    <div class="flex-grow-1">
      <template v-if="Array.isArray(content)">
        <p
          v-for="(paragraph, index) in content"
          :key="index"
          class="text-body-2 text-medium-emphasis mb-2"
        >
          {{ paragraph }}
        </p>
      </template>
      <p v-else class="text-body-2 text-medium-emphasis mb-2">
        {{ content }}
      </p>
    </div>

    <CodeBlock v-if="code">
      {{ code }}
    </CodeBlock>

    <div v-if="buttons?.length" class="mt-4 d-flex flex-wrap gap-2">
      <SafeButton v-for="(btn, index) in buttons" :key="index" v-bind="btn">
        {{ btn.text }}
      </SafeButton>
    </div>
  </v-card>
</template>

<script setup lang="ts">
  import type { Button } from '@/types/card'
  import CodeBlock from '@/components/CodeBlock.vue'

  defineProps<{
    icon: string
    title: string
    content: string | string[]
    code?: string
    buttons?: Button[]
  }>()
</script>
