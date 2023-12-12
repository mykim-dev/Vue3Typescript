<script lang="ts" setup>
import { Close } from '@element-plus/icons-vue'
import { useAppStore } from '@/stores/appSetting'
const AppSetting = useAppStore()
</script>
<template>
  <dl class="ev-panel ev-panel-bottom">
    <dt>
      <h3>Panel Bottom</h3>
      <div class="ev-button">
        <el-button plain :icon="Close" @click="AppSetting.toggleBottomPanel" />
      </div>
    </dt>
    <dd></dd>
  </dl>
</template>
