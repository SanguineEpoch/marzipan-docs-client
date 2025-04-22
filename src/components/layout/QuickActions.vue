<template>
  <div class="fab-container">
    <v-fab v-model="open" icon color="primary">
      <v-icon>{{ open ? 'mdi-close' : 'mdi-share-variant' }}</v-icon>

      <v-speed-dial
        activator="parent"
        location="top center"
        transition="scale-transition"
      >
        <v-btn icon @click="openShareModal('Reddit')">
          <v-icon>mdi-reddit</v-icon>
        </v-btn>
        <v-btn icon @click="openShareModal('Twitter')">
          <v-icon>mdi-twitter</v-icon>
        </v-btn>
        <v-btn icon @click="openShareModal('Bluesky')">
          <v-icon>mdi-cloud</v-icon>
        </v-btn>
        <v-btn icon @click="openShareModal('Message')">
          <v-icon>mdi-message-text</v-icon>
        </v-btn>
        <v-btn icon @click="openShareModal('Copy')">
          <v-icon>mdi-content-copy</v-icon>
        </v-btn>
      </v-speed-dial>
    </v-fab>

    <v-dialog v-model="dialog" max-width="500">
      <v-card>
        <v-card-title class="text-h6"
          >Share to {{ selectedPlatform }}?</v-card-title
        >
        <v-card-text>
          <div class="my-2">
            <strong>Title:</strong>
            <div>{{ pageTitle }}</div>
          </div>
          <div class="my-2">
            <strong>URL:</strong>
            <div>{{ pageUrl }}</div>
          </div>
          <div v-if="selectedPlatform === 'Copy'" class="text-caption mt-4">
            This will copy the link to your clipboard.
          </div>
          <div v-else class="text-caption mt-4">
            This will open a new tab for sharing.
          </div>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn text @click="dialog = false">Cancel</v-btn>
          <v-btn color="primary" @click="confirmShare">Share</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
  import { ref } from 'vue'

  const open = ref(false)
  const dialog = ref(false)
  const selectedPlatform = ref('')

  const pageUrl = window.location.href
  const pageTitle = document.title

  function openShareModal(platform) {
    selectedPlatform.value = platform
    dialog.value = true
    open.value = false
  }

  function confirmShare() {
    const url = encodeURIComponent(pageUrl)
    const title = encodeURIComponent(pageTitle)

    switch (selectedPlatform.value) {
      case 'Reddit':
        window.open(
          `https://www.reddit.com/submit?url=${url}&title=${title}`,
          '_blank'
        )
        break
      case 'Twitter':
        window.open(
          `https://twitter.com/intent/tweet?url=${url}&text=${title}`,
          '_blank'
        )
        break
      case 'Bluesky':
        window.open(
          `https://bsky.app/intent/compose?text=${title}%20${url}`,
          '_blank'
        )
        break
      case 'Message':
        window.open(`sms:?body=${title}%20${pageUrl}`, '_blank')
        break
      case 'Copy':
        navigator.clipboard.writeText(pageUrl)
        alert('Link copied!')
        break
    }

    dialog.value = false
  }
</script>

<style scoped>
  .fab-container {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    z-index: 2000;
  }
</style>
