<script lang="ts" setup>
const isFull = true
</script>

<template>
  <div class="ev-screen dashboard2" :class="{ 'is-full': isFull }">
    <div class="ev-component" v-for="index in 9">
      <el-scrollbar class="ev-component-scrollbar">component_{{ index }}</el-scrollbar>
    </div>
  </div>
</template>