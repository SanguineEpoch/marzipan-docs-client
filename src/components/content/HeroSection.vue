<template>
  <v-sheet>
    <v-container class="text-center py-16 mb-16">
      <h1 class="text-h2 font-weight-bold mb-4">{{ title }}</h1>
      <p class="text-h6 text-medium-emphasis mb-2">{{ subtitle }}</p>

      <div class="my-8">
        <SafeButton
          v-for="(button, i) in cta"
          :key="i"
          :url="button.url"
          :newTab="!isInternalRoute(button.url)"
          :variant="button.variant || 'flat'"
          :color="button.color || 'primary'"
          class="me-2 mb-4"
        >
          <v-icon v-if="button.prependIcon" start>{{
            button.prependIcon
          }}</v-icon>
          {{ button.text }}
          <v-icon v-if="button.appendIcon" end>{{ button.appendIcon }}</v-icon>
        </SafeButton>
      </div>
    </v-container>
  </v-sheet>
</template>

<script setup lang="ts">
  import type { Button } from '@/types/card'
  import { useRouter } from 'vue-router'

  const router = useRouter()

  function isInternalRoute(url: string): boolean {
    if (url.startsWith('http://') || url.startsWith('https://')) return false

    const resolved = router.resolve(url)
    return resolved.matched.length > 0
  }

  defineProps<{
    title: string
    subtitle: string
    cta: Button[]
  }>()
</script>
