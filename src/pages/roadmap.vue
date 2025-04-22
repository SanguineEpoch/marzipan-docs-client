<template>
  <RoadmapVisualizer
    :steps="content.roadmap.steps"
    :heading="content.roadmap.headline"
  />
</template>

<script setup lang="ts">
  import { useContentStore } from '@/stores/content'
  const content = useContentStore()
</script>
