<script lang="ts" setup>
// import defaultData from '@/defaultData'
import { layoutSettingStore } from '@/stores/common/index'
const layoutSetting = layoutSettingStore()
</script>

<template>
  <div class="ev-tags">
    <el-scrollbar class="ev-tags-scrollbar" always>
      <div class="ev-tags-wrap">
        <el-tag
          v-for="tag in layoutSetting.tags"
          :key="tag.name"
          Plain="Plain"
          disable-transitions="true"
          closable
          class="ev-tags__item"
        >
          <RouterLink :to="`${tag.link}`">{{ tag.name }}</RouterLink>
        </el-tag>
      </div>
    </el-scrollbar>
  </div>
</template>