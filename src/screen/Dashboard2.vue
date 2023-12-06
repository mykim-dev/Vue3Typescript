<script lang="ts" setup>
import { AppSettingStore } from '@/stores/common/index'
import Form from '@/components/Form.vue'

const AppSetting = AppSettingStore()
const isFull = AppSetting.screenIsFull
</script>

<template>
  <div class="ev-screen dashboard2" :class="{ 'is-full': isFull }">
    <div class="ev-screen-item" v-for="index in 11">
      <!-- <Form /> -->
    </div>
  </div>
</template>