<script lang="ts" setup>
import { ArrowRight } from '@element-plus/icons-vue'
</script>

<template>
  <div class="ev-breadcrumb">
    <el-breadcrumb :separator-icon="ArrowRight">
      <el-breadcrumb-item>
        <RouterLink :to="{ path: '/' }">홈</RouterLink>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <RouterLink :to="{ path: '/Default' }">Default</RouterLink>
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>