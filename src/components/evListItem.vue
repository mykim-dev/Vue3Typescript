<script lang="ts" setup>
import { useListStore } from '@/stores/listData'
const listData = useListStore()
</script>

<template>
  <div class="ev-list-item">
    <el-table :data="listData.listItems" show-summary height="300" style="width: 100%" border>
      <el-table-column type="selection" width="100" align="right" header-align="center" />
      <el-table-column fixed type="index" label="No" width="100" align="right" header-align="center" />
      <el-table-column prop="date" label="Date" width="300" />
      <el-table-column prop="name" label="Name" sortable width="300" />
      <el-table-column prop="amount" label="Amount" width="300" align="center" header-align="right" />
      <el-table-column fixed="right" prop="fixed" label="fixed" width="300">
        <div class="ev-button">
          <el-button link type="primary" @click.prevent="">Remove</el-button>
        </div>
      </el-table-column>
    </el-table>
  </div>
</template>
