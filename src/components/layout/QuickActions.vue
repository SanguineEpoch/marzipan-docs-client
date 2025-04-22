<template>
  <div class="fab-container">
    <v-fab v-model="open" icon color="primary">
      <v-icon>{{ open ? 'mdi-close' : 'mdi-share-variant' }}</v-icon>

      <v-speed-dial
        activator="parent"
        location="top center"
        transition="scale-transition"
      >
        <v-btn
          icon
          v-for="(platform, i) in sharePlatforms"
          :key="i"
          @click="openShareModal(platform.name)"
          :aria-label="`Share on ${platform.name}`"
        >
          <v-icon>{{ platform.icon }}</v-icon>
        </v-btn>
      </v-speed-dial>
    </v-fab>

    <v-dialog v-model="dialog" max-width="500">
      <v-card>
        <v-card-title class="text-h6">
          Share to {{ selectedPlatform }}?
        </v-card-title>
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

<script setup lang="ts">
  import { ref } from 'vue'

  const open = ref(false)
  const dialog = ref(false)
  const selectedPlatform = ref('')
  const pageUrl = window.location.href
  const pageTitle = document.title

  const sharePlatforms = [
    { name: 'Reddit', icon: 'mdi-reddit' },
    { name: 'Twitter', icon: 'mdi-twitter' },
    { name: 'Bluesky', icon: 'mdi-cloud' },
    { name: 'Message', icon: 'mdi-message-text' },
    { name: 'Copy', icon: 'mdi-content-copy' },
  ]

  function openShareModal(platform: string) {
    if (platform === 'Copy') {
      copyToClipboard()
      return
    }

    selectedPlatform.value = platform
    dialog.value = true
    open.value = false
  }

  function confirmShare() {
    const url = encodeURIComponent(pageUrl)
    const title = encodeURIComponent(pageTitle)

    const handlers: Record<string, string> = {
      Reddit: `https://www.reddit.com/submit?url=${url}&title=${title}`,
      Twitter: `https://twitter.com/intent/tweet?url=${url}&text=${title}`,
      Bluesky: `https://bsky.app/intent/compose?text=${title}%20${url}`,
      Message: `sms:?body=${title}%20${pageUrl}`,
    }

    const shareUrl = handlers[selectedPlatform.value]
    if (shareUrl) {
      window.open(shareUrl, '_blank')
    }

    dialog.value = false
  }

  async function copyToClipboard() {
    try {
      await navigator.clipboard.writeText(pageUrl)
      alert('Link copied to clipboard!')
    } catch {
      prompt('Copy this link manually:', pageUrl)
    }
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
