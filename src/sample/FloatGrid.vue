<script lang="ts" setup>
</script>

<template>
  <div class="ev-screen horizontal">
    <div class="ev-component">
      <el-scrollbar class="ev-component-scrollbar">
        <el-row v-for="idx in 12" class="type-block">
          <el-col>
            <div class="block-item">{{ idx }}</div>
          </el-col>
        </el-row>
      </el-scrollbar>
    </div>
    <div class="ev-component">
      <el-scrollbar class="ev-component-scrollbar">
        <el-row class="type-grid">
          <el-col>
            <div class="grid-item"></div>
          </el-col>
        </el-row>
      </el-scrollbar>
    </div>
  </div>
</template>