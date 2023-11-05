<script lang="ts" setup>
import { AppSettingStore } from '@/stores/common/index'
import EvLogo from '@/containers/evLogo.vue'
import EvBreadcrumb from '@/containers/evBreadcrumb.vue'
import EvHeaderNavigation from '@/containers/evHeaderNavigation.vue'
import EvMenu from '@/containers/evMenu.vue'
import EvTags from '@/containers/evTags.vue'
import EvMain from '@/containers/evMain.vue'

const AppSetting = AppSettingStore()
</script>

<template>
  <!-- {{ layout }} -->
  <div class="ev-layout" :data-layout="AppSetting.appLayoutType" :data-collapse="AppSetting.menuCollapse">
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
</template>