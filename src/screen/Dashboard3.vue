<script lang="ts" setup>
const isFull = true
</script>

<template>
  <div class="ev-screen dashboard3" :class="{ 'is-full': isFull }">
    <div class="ev-component" v-for="index in 10">
      <el-scrollbar class="ev-component-scrollbar">component_{{ index }}</el-scrollbar>
    </div>
  </div>
</template>