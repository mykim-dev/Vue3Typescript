<script lang="ts" setup>
import { ref } from 'vue'
import defaultData from '@/defaultData'

const listData = defaultData.listData
</script>

<template>
  <div class="ev-component">
    <div class="ev-list">
      <el-table :data="listData" show-summary height="300" style="width: 100%">
        <el-table-column type="selection" width="100" />
        <el-table-column fixed type="index" label="No" width="100" />
        <el-table-column prop="date" label="Date" width="300" />
        <el-table-column prop="name" label="Name" sortable width="300" />
        <el-table-column prop="amount" label="Amount" width="300" />
        <el-table-column fixed="right" prop="fixed" label="fixed" width="300">
          <el-button link type="primary" size="small" @click.prevent="">
            Remove
          </el-button>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>@/defaultData