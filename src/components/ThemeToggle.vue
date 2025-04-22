<template>
  <v-btn
    icon
    variant="text"
    class="mx-2"
    @click="toggleTheme"
    :aria-label="`Switch to ${isDark ? 'light' : 'dark'} mode`"
  >
    <v-icon>{{ isDark ? "mdi-weather-sunny" : "mdi-weather-night" }}</v-icon>
  </v-btn>
</template>

<script setup lang="ts">
import { useTheme } from "vuetify";
import { Theme, useAppStore } from "@/stores/app";

const appStore = useAppStore();
const theme = useTheme();
const isDark = computed(() => appStore.appTheme === Theme.Dark);

function toggleTheme() {
  const nextTheme = isDark.value ? Theme.Light : Theme.Dark;
  theme.global.name.value = nextTheme;
  appStore.setTheme(nextTheme);
}
</script>

<style scoped>
.v-icon {
  transition: transform 0.4s ease;
}

.v-btn:hover .v-icon {
  transform: rotate(30deg);
}
</style>
