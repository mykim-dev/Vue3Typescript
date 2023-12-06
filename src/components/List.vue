<script lang="ts" setup>
import { AppSettingStore } from '@/stores/common/index'
import { listDataStore } from '@/stores/components/listData'

const AppSetting = AppSettingStore()
const isFull = AppSetting.screenIsFull

const listData = listDataStore()
</script>

<template>
  <div class="ev-screen default" :class="{ 'is-full': isFull }">
    <div class="ev-screen-item">
      <div class="ev-component">
        <div class="ev-list">
          <el-table :data="listData.listItems" show-summary height="300" style="width: 100%" border>
            <el-table-column type="selection" width="100" align="right" header-align="center" />
            <el-table-column fixed type="index" label="No" width="100" align="right" header-align="center" />
            <el-table-column prop="date" label="Date" width="300" />
            <el-table-column prop="name" label="Name" sortable width="300" />
            <el-table-column prop="amount" label="Amount" width="300" align="center" header-align="right" />
            <el-table-column fixed="right" prop="fixed" label="fixed" width="300">
              <el-button link type="primary" @click.prevent="">Remove</el-button>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
  </div>
</template>