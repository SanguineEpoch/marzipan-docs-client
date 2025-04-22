<template>
  <v-app-bar flat color="background" :elevation="24">
    <v-container class="d-flex justify-space-between align-center">
      <div>
        <v-btn icon @click="toggleSidebar()">
          <v-icon>mdi-menu</v-icon>
        </v-btn>

        <SafeButton
          url="/home"
          variant="plain"
          class="text-h6 font-weight-bold"
          color="primary"
        >
          <span class="mono"> Marzipan{} </span>
        </SafeButton>
      </div>

      <div>
        <ThemeToggle />

        <SafeButton
          url="https://github.com/SanguineEpoch/marzipan"
          aria-label="GitHub"
          icon
          variant="plain"
        >
          <v-icon>mdi-github</v-icon>
        </SafeButton>
      </div>
    </v-container>
  </v-app-bar>
</template>

<script setup lang="ts">
  import { useAppStore } from '@/stores/app'

  const appStore = useAppStore()
  defineOptions({ name: 'AppHeader' })

  function toggleSidebar() {
    appStore.toggleSidebar()
  }
</script>
