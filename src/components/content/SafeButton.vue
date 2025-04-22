<template>
  <v-btn
    v-bind="btnProps"
    :to="isInternal ? url : undefined"
    :href="!isInternal ? url : undefined"
    :target="!isInternal ? '_blank' : undefined"
    :rel="!isInternal ? 'noopener noreferrer' : undefined"
  >
    <slot />
  </v-btn>
</template>

<script setup lang="ts">
  import { computed, toRefs } from 'vue'
  import { useRouter } from 'vue-router'

  const props = defineProps<{
    url: string
    variant?: string
    color?: string
    prependIcon?: string
    appendIcon?: string
    class?: string
    icon?: boolean
    size?: string
    ariaLabel?: string
    [key: string]: unknown
  }>()

  const { url, ...rest } = toRefs(props)
  const router = useRouter()

  const isInternal = computed(() => {
    if (!url.value) return false
    if (url.value.startsWith('http://') || url.value.startsWith('https://'))
      return false
    return router.resolve(url.value).matched.length > 0
  })

  const btnProps = computed(() => {
    const out: Record<string, unknown> = {}
    for (const key in rest) {
      out[key] = rest[key].value
    }
    return out
  })
</script>
