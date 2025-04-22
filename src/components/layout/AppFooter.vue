<template>
  <v-footer app color="background" class="text-center" :elevation="24">
    <v-container>
      <v-row justify="center" align="center">
        <v-col
          cols="12"
          md="auto"
          class="d-flex justify-center align-center gap-2"
        >
          <SafeButton url="/license" variant="plain" size="small">
            © {{ currentYear }} Marzipan. View License.
          </SafeButton>

          <SafeButton
            url="https://github.com/SanguineEpoch/marzipan"
            variant="plain"
            size="small"
            aria-label="GitHub"
          >
            <v-icon icon="mdi-github" />
          </SafeButton>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script setup lang="ts">
  defineOptions({ name: 'AppFooter' })

  const currentYear = new Date().getFullYear()
</script>
