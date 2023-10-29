<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { layoutSettingStore } from '@/stores/containers/index'
const layoutSetting = layoutSettingStore()

import EvLogo from '@/containers/evLogo.vue'
import EvBreadcrumb from '@/containers/evBreadcrumb.vue'
import EvHeaderNavigation from '@/containers/evHeaderNavigation.vue'
import EvMenu from '@/containers/evMenu.vue'
import EvTags from '@/containers/evTags.vue'
import EvMain from '@/containers/evMain.vue'

</script>

<template @change="layoutChange">
  <!-- {{ layout }} -->
  <div class="ev-layout horizontal" v-if="layoutSetting.layoutType === 'horizontal'">
    <EvLogo />
    <el-header class="ev-header">
      <!-- {{ layout }} -->
      <EvBreadcrumb />
      <EvHeaderNavigation />
    </el-header>
    <EvMenu />
    <EvTags />
    <EvMain />
  </div>
  <div class="ev-layout vertical" v-if="layoutSetting.layoutType === 'vertical'">
    <EvLogo />
    <el-header class="ev-header">
      <EvMenu />
      <EvHeaderNavigation />
    </el-header>
    <EvTags />
    <EvBreadcrumb />
    <EvMain />
  </div>
</template>