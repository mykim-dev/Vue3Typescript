<script lang="ts" setup>
import { Close } from '@element-plus/icons-vue'
import { useAppStore } from '@/stores/appSetting'
const AppSetting = useAppStore()
</script>

<template>
  <dl class="ev-panel ev-panel-right">
    <dt>
      <h3>Panel Right</h3>
      <div class="ev-button">
        <el-button plain :icon="Close" @click="AppSetting.toggleRightPanel" />
      </div>
    </dt>
    <dd></dd>
  </dl>
</template>

<style lang="scss" scoped></style>
