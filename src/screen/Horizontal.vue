<script lang="ts" setup>
const isFull = true
const componentHeight = document.getElementsByClassName('ev-main')[0].clientHeight
console.log(componentHeight)
</script>

<template>
  <div class="ev-screen horizontal" :class="{ 'is-full': isFull }">
    <div class="ev-component" v-for="index in 2">
      <el-scrollbar class="ev-component-scrollbar">
        <div class="ev-tmp">component_{{ index }}</div>
      </el-scrollbar>
    </div>
  </div>
</template>