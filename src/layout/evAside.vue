<script lang="ts" setup>
import { useAppStore } from '@/stores/appSetting'
import EvMenu from '@/layout/evMenu.vue'
import EvMenuBanner from '@/layout/evMenuBanner.vue'

const AppSetting = useAppStore()
</script>

<template>
  <div class="ev-aside">
    <EvMenu />
    <EvMenuBanner />
  </div>
</template>