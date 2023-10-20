<script lang="ts" setup>
const isFull = true
const componentHeight =
  document.getElementsByClassName('ev-main')[0].clientHeight
console.log(componentHeight)
</script>

<template>
  <div class="ev-screen horizontal">
    <div class="ev-component" :class="{ 'is-full': isFull }">
      <div class="ev-tmp">component_1</div>
    </div>
    <div class="ev-component" :class="{ 'is-full': isFull }">
      <div class="ev-tmp">component_1</div>
    </div>
  </div>
</template>