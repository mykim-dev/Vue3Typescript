<script lang="ts" setup>
import { AppSettingStore } from '@/stores/common/index'
import EvLogo from '@/layout/evLogo.vue'
import EvBreadcrumb from '@/layout/evBreadcrumb.vue'
import EvHeaderNavigation from '@/layout/evHeaderNavigation.vue'
import EvHeaderBanner from '@/layout/evHeaderBanner.vue'
import EvMenu from '@/layout/evMenu.vue'
import EvMenuBanner from '@/layout/evMenuBanner.vue'
import EvTags from '@/layout/evTags.vue'
import EvMain from '@/layout/evMain.vue'

const AppSetting = AppSettingStore()
</script>

<template>
  <div class="ev-layout" :data-layout="AppSetting.appLayoutType" :data-collapse="AppSetting.menuCollapse">
    <EvLogo />
    <el-header class="ev-header">
      <EvBreadcrumb />
      <EvHeaderNavigation />
      <EvHeaderBanner />
    </el-header>
    <div class="ev-sidebar">
      <EvMenu />
      <EvMenuBanner />
    </div>
    <EvTags />
    <EvMain />
  </div>
</template>