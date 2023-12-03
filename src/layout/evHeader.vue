<script lang="ts" setup>
import { Rank } from '@element-plus/icons-vue'
import { AppSettingStore } from '@/stores/common/index'

import EvHeaderBanner from '@/layout/EvHeaderBanner.vue'
import EvHeaderNavigation from '@/layout/EvHeaderNavigation.vue'

const AppSetting = AppSettingStore()
</script>

<template>
  <div class="ev-header">
    <EvHeaderNavigation />
    <EvHeaderBanner />
  </div>
</template>