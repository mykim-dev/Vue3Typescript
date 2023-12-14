<script lang="ts" setup>
import { Rank } from '@element-plus/icons-vue'
import { useAppStore } from '@/stores/appSetting'

import EvHeaderBreadcrumb from '@/layout/evBreadcrumb.vue'
import EvHeaderBanner from '@/layout/evHeaderBanner.vue'
import EvHeaderNavigation from '@/layout/evHeaderNavigation.vue'

const AppSetting = useAppStore()
</script>

<template>
  <div class="ev-header">
    <EvHeaderBreadcrumb />
    <EvHeaderNavigation />
    <EvHeaderBanner />
  </div>
</template>
