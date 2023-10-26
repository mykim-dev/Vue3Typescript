<script lang="ts" setup>
const isFull = true
</script>

<template>
  <div class="ev-screen horizontal3" :class="{ 'is-full': isFull }">
    <div class="ev-component" v-for="index in 2">
      <el-scrollbar class="ev-component-scrollbar">
        <div class="ev-tmp">component_{{ index }}</div>
      </el-scrollbar>
    </div>
  </div>
</template>