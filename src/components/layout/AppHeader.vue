<template>
  <v-app-bar flat color="background" :elevation="24">
    <v-container class="d-flex justify-space-between align-center">
      <div>
        <v-btn icon @click="toggleSidebar()">
          <v-icon>mdi-menu</v-icon>
        </v-btn>

        <v-btn
          to="/home"
          variant="plain"
          class="text-h6 font-weight-bold"
          color="primary"
          ><span class="mono"> Marzipan{} </span>
        </v-btn>
      </div>
      <div>
        <ThemeToggle />

        <v-btn
          icon
          href="https://github.com/SanguineEpoch/marzipan"
          target="_blank"
          aria-label="GitHub"
        >
          <v-icon>mdi-github</v-icon>
        </v-btn>
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
