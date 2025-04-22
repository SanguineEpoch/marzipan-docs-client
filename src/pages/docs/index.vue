<template>
  <v-container class="py-12">
    <v-row justify="center" class="mb-6">
      <v-col cols="12" md="8">
        <h1 class="text-h3 font-weight-bold mb-4">
          Welcome to the Marzipan Docs
        </h1>
        <p class="text-body-1">
          These docs will help you understand Marzipan’s design, purpose, and
          how to use it effectively.
        </p>
      </v-col>
    </v-row>

    <v-row justify="center" class="mb-6">
      <v-col cols="12" md="8">
        <CalloutBox
          title="Docs are under construction"
          :text="[
            'This documentation isn’t complete yet.',
            'Content will be added and updated automatically over time.',
          ]"
          icon="mdi-alert-circle-outline"
          backgroundColor="info"
          textColor="primary"
        />
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="12" md="8" class="text-center">
        <v-btn
          color="marzipan"
          variant="flat"
          append-icon="mdi-arrow-right"
          @click="goToDocs"
        >
          Enter Documentation
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
  const goToDocs = () => {
    // Placeholder: hook this into your router later
    console.log('Go to actual docs page – not yet implemented')
  }
</script>
