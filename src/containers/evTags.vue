<script lang="ts" setup>
import { ref } from 'vue'
import defaultData from '@/defaultData'
</script>

<template>
  <div class="ev-tags">
    <el-scrollbar class="ev-tags-scrollbar">
      <div class="ev-tags-wrap">
        <el-tag
          v-for="tag in defaultData.tags"
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