<script setup lang="ts">
  defineOptions({ name: 'AboutPage' })
</script>

<template>
  <v-container>
    <CalloutBox
      title="Why Marzipan?"
      color="primary"
      text=" Marzipan is for developers building systems that evolve over time. It
      offers structural introspection, layered execution, and runtime
      awareness—without sacrificing readability."
    />

    <quote-block>
      “Code should be able to understand itself — and be understood.”
    </quote-block>
  </v-container>
</template>
