<script lang="ts" setup>
import { useAppStore } from '@/stores/appSetting'
import EvLogo from '@/layout/evLogo.vue'
import EvHeader from '@/layout/evHeader.vue'
import EvAside from '@/layout/evAside.vue'
import EvTags from '@/layout/evTags.vue'

const AppSetting = useAppStore()

</script>

<template>
  <div id="ev-layout" class="ev-layout" :data-layout="AppSetting.appLayoutType" :data-collapse="AppSetting.menuCollapse">
    <EvLogo />
    <EvHeader />
    <EvAside />
    <EvTags />
    <main class="ev-main">
      <!-- <el-scrollbar wrap-class="ev-main-scroll"> -->
        <RouterView />
      <!-- </el-scrollbar> -->
    </main>
  </div>
</template>

<style lang="scss" scoped></style>