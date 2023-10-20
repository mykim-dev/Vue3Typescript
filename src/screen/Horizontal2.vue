<script lang="ts" setup>
const isFull = true
</script>

<template>
  <div class="ev-screen horizontal2">
    <div class="ev-component" :class="{ 'is-full': isFull }">
      <div class="ev-tmp">component_1</div>
    </div>
    <div class="ev-component" :class="{ 'is-full': isFull }">
      <div class="ev-tmp">component_1</div>
    </div>
    <div class="ev-component" :class="{ 'is-full': isFull }">
      <div class="ev-tmp">component_1</div>
    </div>
  </div>
</template>