<script lang="ts" setup>
import { defineProps, defineEmits, ref } from 'vue'

import defaultData from '@/defaultData'
import EvLogo from '@/containers/evLogo.vue'
import EvHeader from '@/containers/evHeader.vue'
import EvMenu from '@/containers/evMenu.vue'
import EvTags from '@/containers/evTags.vue'
import EvMain from '@/containers/evMain.vue'
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