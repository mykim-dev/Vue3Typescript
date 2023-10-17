<script lang="ts" setup>
const isFull = true
</script>

<template>
  <div class="ev-screen dashboard1">
    <div class="ev-component" :class="{ 'is-full': isFull }">component_1</div>
    <div class="ev-component" :class="{ 'is-full': isFull }">component_2</div>
    <div class="ev-component" :class="{ 'is-full': isFull }">component_3</div>
    <div class="ev-component" :class="{ 'is-full': isFull }">component_4</div>
    <div class="ev-component" :class="{ 'is-full': isFull }">component_5</div>
    <div class="ev-component" :class="{ 'is-full': isFull }">component_6</div>
    <div class="ev-component" :class="{ 'is-full': isFull }">component_7</div>
  </div>
</template>