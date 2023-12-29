<script lang="ts" setup>
import { useListStore } from '@/stores/listData'
const listData = useListStore()
</script>

<template>
  <div class="ev-list-item">
    <el-table :data="listData.listItems" highlight-current-row border style="width: 100%; height: 100%;">
      <el-table-column type="selection" width="60" align="center" header-align="center" />
      <el-table-column type="index" label="No" fixed width="60" align="center" header-align="center" />
      <el-table-column prop="date" label="Date" />
      <el-table-column prop="name" label="Name" sortable />
      <el-table-column prop="amount" label="Amount" align="right" header-align="center" />
      <el-table-column prop="fixed" label="fixed" fixed="right" align="center" header-align="center">
        <div class="ev-button">
          <el-button link type="primary" @click.prevent="">Remove</el-button>
        </div>
      </el-table-column>
    </el-table>
  </div>
</template>
