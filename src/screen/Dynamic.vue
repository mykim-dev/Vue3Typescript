<script lang="ts" setup>
const isFull = true
</script>

<template>
  <div class="ev-screen dynamic" :class="{ 'is-full': isFull }">
    <div class="ev-screen-item">
      <el-scrollbar class="ev-component-scrollbar">
        dynamic
      </el-scrollbar>
    </div>
  </div>
</template>