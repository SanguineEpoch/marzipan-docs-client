<template>
  <v-navigation-drawer
    v-model="sidebarOpen"
    app
    :permanent="!isMobile"
    :temporary="isMobile"
    :width="drawerWidth"
    class="pa-2"
  >
    <div class="overflow-y-auto h-100">
      <v-list nav dense>
        <v-list-item
          icon="mdi-close"
          variant="flat"
          @click="sidebarOpen = !sidebarOpen"
          append-icon="mdi-close"
          class="text-uppercase text-subtitle-2"
        >
          Pages
        </v-list-item>
        <v-divider />

        <template v-for="(item, i) in navigation">
          <v-list-group
            v-if="item.children"
            :key="`group-${i}`"
            v-model="openGroup"
            :value="i"
            prepend-icon="mdi-chevron-down"
          >
            <template #activator="{ props }">
              <v-list-item v-bind="props" :prepend-icon="item.icon">
                <v-list-item-title class="text-wrap">{{
                  item.title
                }}</v-list-item-title>
              </v-list-item>
            </template>

            <div
              v-for="(child, j) in item.children"
              :key="`child-${i}-${j}`"
              class="d-flex align-center"
            >
              <v-list-item
                :to="!child.disabled ? child.to : undefined"
                :title="child.title"
                :prepend-icon="child.icon"
                :disabled="child.disabled"
                class="flex-grow-1"
              />
              <v-tooltip v-if="child.disabled" location="end">
                <template #activator="{ props }">
                  <v-icon
                    v-bind="props"
                    icon="mdi-lock-outline"
                    size="small"
                    class="me-2"
                  />
                </template>
                <span class="text-primary">Coming soon</span>
              </v-tooltip>
            </div>
          </v-list-group>

          <div v-else :key="`item-${i}`" class="d-flex align-center">
            <v-list-item
              :to="!item.disabled ? item.to : undefined"
              :title="item.title"
              :prepend-icon="item.icon"
              :disabled="item.disabled"
              class="flex-grow-1"
            />
            <v-tooltip v-if="item.disabled" location="end">
              <template #activator="{ props }">
                <v-icon
                  v-bind="props"
                  icon="mdi-lock-outline"
                  size="small"
                  class="me-2"
                />
              </template>
              <span class="text-primary">Coming soon</span>
            </v-tooltip>
          </div>
        </template>
      </v-list>
    </div>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
  import { ref, watch, computed } from 'vue'
  import { storeToRefs } from 'pinia'
  import { useDisplay } from 'vuetify'
  import { useAppStore } from '@/stores/app'

  const appStore = useAppStore()
  const display = useDisplay()

  const isMobile = computed(() => display.smAndDown.value)

  watch(isMobile, (mobile) => {
    if (mobile) appStore.setSidebar(false)
  })
  const { sidebarOpen } = storeToRefs(appStore)

  const drawerWidth = computed(() => {
    const width = windowWidth.value

    if (width < 400) return Math.round(width * 0.92) // Very small phones
    if (width < 600) return Math.round(width * 0.85) // Small phones
    if (width < 768) return Math.round(width * 0.78) // Large phones / small tablets
    if (width < 1024) return Math.round(width * 0.72) // Tablets and small laptops
    if (width < 1440) return 280 // Standard desktops
    return 300 // XL screens
  })
  const windowWidth = ref(window.innerWidth)

  onMounted(() => {
    window.addEventListener('resize', () => {
      windowWidth.value = window.innerWidth
    })
  })

  const openGroup = ref<number | null>(null)

  interface NavItem {
    title: string
    icon?: string
    to?: string
    children?: NavItem[]
    disabled: boolean
  }

  const navigation: NavItem[] = [
    { title: 'Home', to: '/', icon: 'mdi-home', disabled: false },
    {
      title: 'Playground',
      to: '/playground',
      icon: 'mdi-flask-outline',
      disabled: true,
    },
    {
      title: 'Docs',
      icon: 'mdi-book-open-variant',
      children: [
        {
          title: 'Overview',
          to: '/docs',
          icon: 'mdi-file-document-outline',
          disabled: false,
        },
        {
          title: 'Syntax',
          to: '/docs/syntax',
          icon: 'mdi-code-tags',
          disabled: false,
        },
        {
          title: 'Types',
          to: '/docs/types',
          icon: 'mdi-shape',
          disabled: false,
        },
        {
          title: 'Control Flow',
          to: '/docs/control-flow',
          icon: 'mdi-ray-vertex',
          disabled: false,
        },
      ],
      disabled: false,
    },
    {
      title: 'Runtime Docs',
      icon: 'mdi-graph-outline',
      children: [
        {
          title: 'Introspection',
          to: '/runtime/introspection',
          icon: 'mdi-eye-outline',
          disabled: false,
        },
        {
          title: 'Mutation API',
          to: '/runtime/mutate',
          icon: 'mdi-function-variant',
          disabled: false,
        },
        {
          title: 'Architecture',
          to: '/compiler/architecture',
          icon: 'mdi-chip',
          disabled: false,
        },
        {
          title: 'IR & Optimizations',
          to: '/compiler/ir',
          icon: 'mdi-tune',
          disabled: false,
        },
      ],
      disabled: false,
    },
    {
      title: 'Roadmap',
      to: '/roadmap',
      icon: 'mdi-telescope',
      disabled: false,
    },
    {
      title: 'Contribute',
      to: '/contribute',
      icon: 'mdi-account-plus',
      disabled: false,
    },
    {
      title: 'License',
      icon: 'mdi-certificate-outline',
      disabled: false,
      children: [
        {
          title: 'License',
          to: '/license/',
          icon: 'mdi-certificate-outline',
          disabled: false,
        },
        {
          title: 'Philosophy',
          to: '/license/philosophy',
          icon: 'mdi-brain',
          disabled: false,
        },
      ],
    },
  ]
</script>

<style scoped lang="scss">
  .v-navigation-drawer {
    transition: width 0.2s ease;
  }
</style>
