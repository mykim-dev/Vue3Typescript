<script lang="ts" setup>
</script>

<template>
  <div class="form-item ev-image-view">
    <div class="form-item-label">
      <label>ImageView</label>
    </div>
    <div class="form-item-data">
      <el-carousel>
        <el-carousel-item v-for="item in 4" :key="item">
          {{ item }}
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>