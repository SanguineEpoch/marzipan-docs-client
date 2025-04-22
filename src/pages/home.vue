<template>
  <v-container fluid class="pa-0">
    <HeroSection
      :title="content.hero.title"
      :subtitle="content.hero.subtitle"
      :cta="content.hero.cta"
    />
    <CalloutBox
      :title="content.disclaimer.title"
      :text="content.disclaimer.text"
      icon="mdi-alert-circle-outline"
      backgroundColor="info"
      textColor="primary"
    />

    <ValueProposition :content="content.valueProposition" />

    <WhoIsMarzipanFor
      :items="content.personas.items"
      :title="content.personas.title"
    />

    <ArchitectureOverview
      :title="content.architectureOverview.title"
      :intro="content.architectureOverview.intro"
      :items="content.architectureOverview.items"
    />

    <DesignPrinciples
      :title="content.designPrinciples.title"
      :principles="content.designPrinciples.principles"
    />

    <RoadmapVisualizer
      :steps="content.roadmap.steps"
      :title="content.roadmap.title"
      :cta="content.roadmap.callToAction"
      short
    />

    <MarzipanSummary
      :title="content.summary.title"
      :items="content.summary.items"
    />

    <GettingStarted :data="content.gettingStarted" />

    <MarzipansPhilosophy
      :title="content.philosophy.title"
      :intro="content.philosophy.intro"
      :paragraphs="content.philosophy.paragraphs"
      :cta="content.philosophy.cta"
    />
    <MarzipansImpact
      :title="content.future.title"
      :paragraphs="content.future.paragraphs"
    />
  </v-container>
</template>

<script setup lang="ts">
  import { useContentStore } from '@/stores/content'
  const content = useContentStore()
</script>
