<template>
  <v-sheet class="mt-3 pa-3" color="surface-inverse" rounded elevation="1">
    <pre class="mb-0 overflow-x-auto">
      <code class="font-mono text-body-2">
        <slot />
      </code>
    </pre>
  </v-sheet>
</template>

<script setup lang="ts">
  //
</script>

<style scoped>
  pre {
    white-space: pre-wrap;
    word-break: break-word;
  }
</style>
