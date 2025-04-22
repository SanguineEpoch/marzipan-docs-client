<template>
  <v-container class="py-8">
    <SectionHeader>Getting Started with Marzipan</SectionHeader>

    <v-row>
      <v-col cols="12" md="10" lg="8" class="mx-auto">
        <p class="text-body-1 mb-6">{{ data.intro }}</p>

        <h4 class="text-subtitle-1 font-weight-medium mb-2">
          What we're focused on now:
        </h4>
        <BulletList
          class="mb-8"
          :items="
            data.currentFocus.map((text) => ({
              title: text,
              icon: 'mdi-lightbulb-outline',
            }))
          "
        />

        <h4 class="text-subtitle-1 font-weight-medium mb-2">
          We're looking for contributors who care about:
        </h4>
        <BulletList
          class="mb-8"
          :items="
            data.contributorInvites.map((text) => ({
              title: text,
              icon: 'mdi-account-heart-outline',
            }))
          "
        />
      </v-col>
    </v-row>

    <v-row justify="center" v-if="data.cta?.length">
      <v-btn
        v-for="(button, i) in data.cta"
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
  import type { Button } from '@/types/card'

  defineProps<{
    data: {
      intro: string
      currentFocus: string[]
      contributorInvites: string[]
      cta: Button[]
    }
  }>()
</script>
