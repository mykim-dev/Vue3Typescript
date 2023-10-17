<script lang="ts" setup>
import { ref } from 'vue'

const activeNames = ref(['1'])
const handleChange = (val: string[]) => {
  console.log(val)
}

const tableData = [
  {
    date: '2016-05-08',
    name: 'Tom',
    amount: 8000,
    fixed: 'Fixed',
  },
  {
    date: '2016-05-07',
    name: 'Tom',
    amount: 7000,
    fixed: 'Fixed',
  },
  {
    date: '2016-05-06',
    name: 'Tom',
    amount: 6000,
    fixed: 'Fixed',
  },
  {
    date: '2016-05-05',
    name: 'Tom',
    amount: 5000,
    fixed: 'Fixed',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    amount: 4000,
    fixed: 'Fixed',
  },
  {
    date: '2016-05-03',
    name: 'Tom',
    amount: 3000,
    fixed: 'Fixed',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    amount: 2000,
    fixed: 'Fixed',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    amount: 1000,
    fixed: 'Fixed',
  },
]
</script>

<template>
  <div class="ev-component">
    <div class="ev-list">
      <el-table :data="tableData" show-summary height="300" style="width: 100%">
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
</template>