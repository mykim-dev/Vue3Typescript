<script lang="ts" setup>
import List from '@/components/List.vue'
const isFull = true
</script>

<template>
  <div class="ev-screen horizontal" :class="{ 'is-full': isFull }">
    <div class="ev-screen-item" v-for="index in 2">
      <el-scrollbar class="ev-component-scrollbar">
        <List />
      </el-scrollbar>
    </div>
  </div>
</template>