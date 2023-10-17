<script lang="ts" setup>
import { ref } from 'vue'

const tags = ref([
  { name: 'Home', link: '/' },
  { name: 'Default', link: '/Default' },
  { name: 'Horizontal', link: '/Horizontal' },
  { name: 'Vertical', link: '/Vertical' },
  { name: 'Horizontal2', link: '/Horizontal2' },
  { name: 'Vertical2', link: '/Vertical2' },
  { name: 'Horizontal3', link: '/Horizontal3' },
  { name: 'Dashboard', link: '/Dashboard' },
  { name: 'Dashboard1', link: '/Dashboard1' },
  { name: 'Dashboard2', link: '/Dashboard2' },
  { name: 'Dashboard3', link: '/Dashboard3' },
  { name: 'Dynamic', link: '/Dynamic' },
])
</script>

<template>
  <!-- <el-scrollbar class="ev-tags-scrollbar"> -->
  <div class="ev-tags">
    <el-tag v-for="tag in tags" :key="tag.name" closable class="ev-tags__item">
      <RouterLink :to="`${tag.link}`">{{ tag.name }}</RouterLink>
    </el-tag>
  </div>
  <!-- </el-scrollbar> -->
</template>