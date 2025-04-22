<template>
  <v-app :theme="appStore.appTheme">
    <router-view />
  </v-app>
</template>

<script lang="ts" setup>
import { Theme, useAppStore } from "./stores/app";
import { onMounted } from "vue";

const appStore = useAppStore();
onMounted(() => {
  const currentTheme = localStorage.getItem("appTheme") as Theme;
  if (currentTheme) {
    appStore.setTheme(currentTheme);
  }
});
</script>
