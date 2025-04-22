<script setup lang="ts">
defineOptions({ name: "NotFoundPage" });
</script>

<template>
  <v-container class="text-center py-12">
    <v-icon size="96" color="error">mdi-alert-circle-outline</v-icon>
    <h1 class="text-h4 mt-4 mb-2">404 — Page Not Found</h1>
    <p class="text-body-1 mb-6">
      The page you’re looking for doesn’t exist. Maybe you mistyped the URL?
    </p>
    <v-btn to="/home" color="primary" variant="flat"> Go to Homepage </v-btn>
  </v-container>
</template>
