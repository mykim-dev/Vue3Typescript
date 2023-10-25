<script lang="ts" setup>
import { ref } from 'vue'
import defaultData from '@/defaultData'

import EvLogo from '@/containers/evLogo.vue'
import EvBreadcrumb from '@/containers/evBreadcrumb.vue'
import EvHeaderNavigation from '@/containers/evHeaderNavigation.vue'
import EvMenu from '@/containers/evMenu.vue'
import EvTags from '@/containers/evTags.vue'
import EvMain from '@/containers/evMain.vue'
</script>

<template>
  <div class="ev-layout horizontal" v-if="defaultData.layout === 'horizontal'">
    <EvLogo />
    <el-header class="ev-header">
      <EvBreadcrumb />
      <EvHeaderNavigation />
    </el-header>
    <EvMenu />
    <EvTags />
    <EvMain />
  </div>
  <div class="ev-layout vertical" v-if="defaultData.layout === 'vertical'">
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