<script lang="ts" setup>
</script>

<template>
  <div class="ev-image-view">
    <el-carousel :autoplay="false">
      <el-carousel-item v-for="item in 4" :key="item">
        {{ item }}
      </el-carousel-item>
    </el-carousel>
  </div>
</template>