<template>
  <RoadmapVisualizer
    :title="content.roadmap.title"
    :steps="content.roadmap.steps"
    :heading="content.roadmap.title"
    :cta="content.roadmap.cta"
  />
</template>

<script setup lang="ts">
  import { useContentStore } from '@/stores/content'
  const content = useContentStore()
</script>
