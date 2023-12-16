<script lang="ts" setup>
import { useAppStore } from '@/stores/appSetting'
const AppSetting = useAppStore()
</script>
<template>
  <div class="ev-header-banner" v-if="AppSetting.topBanner">
    <img src="@/assets/img/header-banner.png" alt="" />
  </div>
</template>