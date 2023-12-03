<script lang="ts" setup>
import { AppSettingStore } from '@/stores/common/index'
import EvLogo from '@/layout/evLogo.vue'
import EvHeader from '@/layout/evHeader.vue'
import EvAside from '@/layout/evAside.vue'
import EvTags from '@/layout/evTags.vue'

const AppSetting = AppSettingStore()

</script>

<template>
  <template v-if="$route.meta.layout === 'LayoutSetting'">
    <div id="ev-layout" class="ev-layout" data-layout="setting" :data-collapse="AppSetting.menuCollapse">
      <EvLogo />
      <EvHeader />
      <main class="ev-main">
        <el-scrollbar view-class="ev-main-scrollbar">
          <RouterView />
        </el-scrollbar>
      </main>
    </div>
  </template>
  <template v-else>
    <div id="ev-layout" class="ev-layout" :data-layout="AppSetting.appLayoutType" :data-collapse="AppSetting.menuCollapse">
      <EvLogo />
      <EvHeader />
      <EvAside />
      <EvTags />
      <main class="ev-main">
        <el-scrollbar view-class="ev-main-scrollbar">
          <RouterView />
        </el-scrollbar>
      </main>
    </div>
  </template>
</template>

<style lang="scss" scoped></style>
