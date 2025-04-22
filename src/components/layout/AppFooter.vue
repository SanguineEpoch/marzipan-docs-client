<template>
  <v-footer app color="background" class="text-center" :elevation="24">
    <v-container>
      <v-row justify="center" align="center">
        <v-col
          cols="12"
          md="auto"
          class="d-flex justify-center align-center gap-2"
        >
          <v-btn to="/license" variant="plain" size="small">
            © {{ currentYear }} Marzipan. View License.
          </v-btn>
          <v-btn
            icon="mdi-github"
            href="https://github.com/SanguineEpoch/marzipan"
            target="_blank"
            aria-label="GitHub"
            variant="plain"
            size="small"
          />
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script setup lang="ts">
defineOptions({ name: "AppFooter" });

const currentYear = new Date().getFullYear();
</script>
