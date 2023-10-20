<script lang="ts" setup>
import { ref } from 'vue'
import defaultData from '@/defaultData'
</script>

<template>
  <div class="ev-tags">
    <el-tag
      v-for="tag in defaultData.tags"
      :key="tag.name"
      closable
      class="ev-tags__item"
    >
      <RouterLink :to="`${tag.link}`">{{ tag.name }}</RouterLink>
    </el-tag>
  </div>
</template>