<template>
  <v-container class="py-8">
    <SectionHeader>{{ title }}</SectionHeader>

    <v-timeline align="start" side="end" line-inset="10" class="w-100">
      <v-timeline-item
        v-for="step in steps"
        :key="step.id"
        :dot-color="statusColor(step.status)"
        fill-dot
        style="width: 100%"
      >
        <v-card elevation="12" class="pa-4 d-flex flex-column h-100 w-100">
          <div
            class="d-flex flex-wrap justify-space-between align-center mb-2 gap-2"
          >
            <h3 class="text-subtitle-1 font-weight-medium mb-3">
              {{ step.title }}
            </h3>

            <v-chip
              :color="statusColor(step.status)"
              variant="flat"
              size="small"
              class="text-caption font-weight-medium"
            >
              {{ statusLabel(step.status) }}
            </v-chip>
          </div>

          <p
            v-if="!short"
            class="text-body-2 text-medium-emphasis"
            style="white-space: pre-wrap"
          >
            {{ step.description }}
          </p>
        </v-card>
      </v-timeline-item>
    </v-timeline>

    <v-row justify="center" class="mt-6" v-if="cta?.length">
      <v-btn
        v-for="(button, i) in cta"
        :key="i"
        :to="button.url"
        :variant="button.variant || 'flat'"
        :color="button.color || 'primary'"
        class="ma-2"
      >
        <v-icon v-if="button.prependIcon" start>{{
          button.prependIcon
        }}</v-icon>
        {{ button.text }}
        <v-icon v-if="button.appendIcon" end>{{ button.appendIcon }}</v-icon>
      </v-btn>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
  import type { RoadmapStep } from '@/types/roadmap'
  import { RoadmapStatus } from '@/types/roadmap'
  import type { Button } from '@/types/card'

  defineProps<{
    title: string
    steps: RoadmapStep[]
    cta?: Button[]
    short?: boolean
  }>()

  function statusLabel(status: RoadmapStatus): string {
    switch (status) {
      case RoadmapStatus.Done:
        return 'Completed'
      case RoadmapStatus.InProgress:
        return 'In Progress'
      case RoadmapStatus.PlannedNotStarted:
        return 'Planned'
      case RoadmapStatus.NotStarted:
        return 'Not Started'
      default:
        return 'Unknown'
    }
  }

  function statusColor(status: RoadmapStatus): string {
    switch (status) {
      case RoadmapStatus.Done:
        return 'success'
      case RoadmapStatus.InProgress:
        return 'warning'
      case RoadmapStatus.PlannedNotStarted:
        return 'grey'
      case RoadmapStatus.NotStarted:
        return 'grey'
      default:
        return 'default'
    }
  }
</script>
