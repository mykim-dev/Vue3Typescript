<script lang="ts" setup>
// import defaultData from '@/defaultData'
import { AppSettingStore } from '@/stores/common/index'
const AppSetting = AppSettingStore()
</script>

<template>
  <div class="ev-tags">
    <el-scrollbar class="ev-tags-scrollbar">
      <div class="ev-tags-group">
        <el-tag v-for="tag in AppSetting.tags" :key="tag.name" Plain="Plain" disable-transitions="true" closable>
          <RouterLink :to="`${tag.link}`">{{ tag.name }}</RouterLink>
        </el-tag>
      </div>
    </el-scrollbar>
  </div>
</template>