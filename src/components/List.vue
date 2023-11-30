<script lang="ts" setup>
import { listDataStore } from '@/stores/components/listData'
const listData = listDataStore()
</script>

<template>
  <div class="ev-component">
    <el-scrollbar view-class="ev-component-scrollbar">
      <div class="ev-list">
        <el-table :data="listData.listItems" show-summary height="300" style="width: 100%" border>
          <el-table-column type="selection" width="100" align="right" header-align="center" />
          <el-table-column fixed type="index" label="No" width="100" align="right" header-align="center" />
          <el-table-column prop="date" label="Date" width="300" />
          <el-table-column prop="name" label="Name" sortable width="300" />
          <el-table-column prop="amount" label="Amount" width="300" align="center" header-align="right" />
          <el-table-column fixed="right" prop="fixed" label="fixed" width="300">
            <el-button link type="primary" size="small" @click.prevent="">Remove</el-button>
          </el-table-column>
        </el-table>
      </div>
    </el-scrollbar>
  </div>
</template>