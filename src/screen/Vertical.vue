<script lang="ts" setup>
const isFull = true
</script>

<template>
  <div class="ev-screen vertical">
    <div class="ev-component" :class="{ 'is-full': isFull }">component_1</div>
    <div class="ev-component" :class="{ 'is-full': isFull }">component_2</div>
  </div>
</template>