<script lang="ts" setup>
import defaultData from '@/defaultData'
import EvLogo from '@/containers/ev-logo.vue'
import EvHeader from '@/containers/ev-header.vue'
import EvMenu from '@/containers/ev-menu.vue'
import EvTags from '@/containers/ev-tags.vue'
import EvMain from '@/containers/ev-main.vue'
</script>

<template>
  <div class="ev-layout" :class="defaultData.layout">
    <EvLogo />
    <EvHeader />
    <EvMenu />
    <EvTags />
    <EvMain />
  </div>
</template>