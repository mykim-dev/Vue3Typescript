<script lang="ts" setup>
import { ref } from 'vue'
import { AppSettingStore } from '@/stores/common/index'

const AppSetting = AppSettingStore()
const isFull = AppSetting.screenIsFull
</script>

<template>
  <div class="ev-screen default" :class="{ 'is-full': isFull }">
    <div class="ev-screen-item">
      <div class="ev-component">
        <div class="ev-toolbar">
          <h4 class="ev-toolbar__title">Toolbar</h4>
          <div class="ev-form-button">
            <el-button>조회</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>