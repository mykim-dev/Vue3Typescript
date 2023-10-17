<script lang="ts" setup>
const isFull = true
</script>

<template>
  <div class="ev-screen vertical2">
    <div class="ev-component" :class="{ 'is-full': isFull }">component_1</div>
    <div class="ev-component" :class="{ 'is-full': isFull }">component_2</div>
    <div class="ev-component" :class="{ 'is-full': isFull }">component_3</div>
  </div>
</template>