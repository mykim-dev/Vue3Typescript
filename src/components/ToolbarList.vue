<script lang="ts" setup>
import { ref } from 'vue'
import { AppSettingStore } from '@/stores/common/index'
const AppSetting = AppSettingStore()
const isFull = AppSetting.screenIsFull
const screenGutter = AppSetting.screenGutter

const activeNames = ref(['1'])
const handleChange = (val: string[]) => {
  console.log(val)
}
const listData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
</script>

<template>
  <el-row class="ev-screen default" :gutter="screenGutter" :class="{ 'is-full': isFull }">
    <el-col class="ev-screen-item">
      <div class="ev-component">
        <el-scrollbar class="ev-component-scrollbar">
          <div class="ev-toolbarlist">
            <el-collapse v-model="activeNames" @change="handleChange">
              <el-collapse-item title="Consistency" name="1">
                <template #title>
                  <h4>Toolbar_List</h4>
                  <div class="button_wrap">
                    <div class="ev-form-button">
                      <el-button>FormButton</el-button>
                    </div>
                  </div>
                </template>
                <div class="ev-list">
                  <el-table :data="listData" style="width: 100%">
                    <el-table-column prop="date" label="Date" width="180" />
                    <el-table-column prop="name" label="Name" width="180" />
                    <el-table-column prop="address" label="Address" />
                  </el-table>
                </div>
              </el-collapse-item>
            </el-collapse>
          </div>
        </el-scrollbar>
      </div>
    </el-col>
  </el-row>
</template>