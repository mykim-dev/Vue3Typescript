<script lang="ts" setup>
import { useAppStore } from '@/stores/appSetting'
const AppSetting = useAppStore()
</script>
<template>
  <div class="ev-menu-banner" v-if="AppSetting.asideBanner">
    <img src="@/assets/img/menu-banner.png" alt="하단배너" />
  </div>
</template>