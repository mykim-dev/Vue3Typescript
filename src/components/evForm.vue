<script lang="ts" setup>
import { useAppStore } from '@/stores/appSetting'
const AppSetting = useAppStore()
import FormItem from '@/components/evFormItem.vue'
</script>

<template>
  <div class="ev-component ev-form" :class="{ 'is-glassmorphism': AppSetting.glassmorphism }">
    <FormItem />
  </div>
</template>
