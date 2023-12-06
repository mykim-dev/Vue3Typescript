<script lang="ts" setup>
import { AppSettingStore } from '@/stores/common/index'
import EvForm from '@/components/Form.vue'
import EvList from '@/components/List.vue'

const AppSetting = AppSettingStore()
const isFull = AppSetting.screenIsFull
</script>

<template>
  <div class="ev-screen horizontal" :class="{ 'is-full': isFull }">
    <div class="ev-screen-item" :span="12">
      <EvForm />
    </div>
    <div class="ev-screen-item" :span="12">
      <EvList />
    </div>
  </div>
</template>