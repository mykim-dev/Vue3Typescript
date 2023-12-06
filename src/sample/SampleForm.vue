<script lang="ts" setup>
import { AppSettingStore } from '@/stores/common/index'
import EvForm from '@/components/Form.vue'

const AppSetting = AppSettingStore()
const isFull = AppSetting.screenIsFull
</script>

<template>
  <div class="ev-screen horizontal" :class="{ 'is-full': isFull }">
    <div class="ev-screen-item" v-for="index in 2" :span="12">
      <EvForm />
    </div>
  </div>
</template>