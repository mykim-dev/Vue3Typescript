<script lang="ts" setup>
// import defaultData from '@/defaultData'
import { useAppStore } from '@/stores/appSetting'
const AppSetting = useAppStore()
</script>

<template>
  <div class="ev-tags">
    <el-scrollbar view-class="ev-tags-scrollbar">
      <div class="ev-tags-group">
        <el-tag v-for="tag in AppSetting.tags" :key="tag.name" closable>
          <RouterLink :to="`${tag.link}`">{{ tag.name }}</RouterLink>
        </el-tag>
      </div>
    </el-scrollbar>
  </div>
</template>