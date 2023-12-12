<script lang="ts" setup>
import { Close } from '@element-plus/icons-vue'
import { useAppStore } from '@/stores/appSetting'
const AppSetting = useAppStore()
</script>

<template>
  <dl class="ev-panel ev-panel-popup">
    <dt>
      <h3>Panel Popup</h3>
      <div class="ev-button">
        <el-button plain :icon="Close" @click="AppSetting.togglePopup" />
      </div>
    </dt>
    <dd></dd>
  </dl>
</template>

<style lang="scss" scoped></style>
