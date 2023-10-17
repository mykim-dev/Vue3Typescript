<script setup>
import setting from '@/index'
import EvLogo from '@/containers/ev-logo.vue'
import EvHeader from '@/containers/ev-header.vue'
import EvMenu from '@/containers/ev-menu.vue'
import EvTags from '@/containers/ev-tags.vue'
import EvMain from '@/containers/ev-main.vue'
</script>

<template>
  <div class="ev-layout" :class="setting.layout">
    <EvLogo />
    <EvHeader />
    <EvMenu />
    <EvTags />
    <EvMain />
  </div>
</template>