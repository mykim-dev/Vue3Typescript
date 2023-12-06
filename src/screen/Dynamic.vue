<script lang="ts" setup>
import { AppSettingStore } from '@/stores/common/index'
const AppSetting = AppSettingStore()
const isFull = AppSetting.screenIsFull
</script>

<template>
  <div class="ev-screen dynamic" :class="{ 'is-full': isFull }">
    <div class="ev-screen-item">
      <!-- dynamic -->
    </div>
  </div>
</template>