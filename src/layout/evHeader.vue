<script lang="ts" setup>
import { Rank } from '@element-plus/icons-vue'
import { useAppStore } from '@/stores/appSetting'

import EvHeaderBanner from '@/layout/EvHeaderBanner.vue'
import EvHeaderNavigation from '@/layout/EvHeaderNavigation.vue'

const AppSetting = useAppStore()
</script>

<template>
  <div class="ev-header">
    <EvHeaderNavigation />
    <EvHeaderBanner />
  </div>
</template>