<script lang="ts" setup>
import defaultData from '@/defaultData'

const list = 12
</script>

<template>
  <div class="ev-screen horizontal">
    <div class="ev-component">
      <el-row v-for="idx in list" class="type-block">
        <el-col>
          <div class="block-item">{{ idx }}</div>
        </el-col>
      </el-row>
    </div>
    <el-row class="type-grid">
      <el-col>
        <div class="grid-item"></div>
      </el-col>
    </el-row>
  </div>
</template>