<script lang="ts" setup>
import ListItem from '@/components/evListItem.vue'
</script>

<template>
  <el-row class="ev-screen-row default" :gutter="16">
    <el-col class="ev-screen-col">
      <div class="ev-component ev-list">
        <ListItem />
      </div>
    </el-col>
  </el-row>
</template>
