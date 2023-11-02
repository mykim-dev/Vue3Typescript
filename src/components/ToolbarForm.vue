<script lang="ts" setup>
import { ref } from 'vue'
import { AppSettingStore } from '@/stores/common/index'
import Form from '@/components/Form.vue'

const AppSetting = AppSettingStore()
const isFull = AppSetting.screenIsFull
const screenGutter = AppSetting.screenGutter

const activeNames = ref(['1'])
const handleChange = (val: string[]) => {
  console.log(val)
}
</script>

<template>
  <el-row class="ev-screen default" :gutter="screenGutter" :class="{ 'is-full': isFull }">
    <el-col class="ev-screen-item">
      <div class="ev-component">
        <el-scrollbar class="ev-component-scrollbar">
          <div class="ev-toolbarform">
            <el-collapse v-model="activeNames" @change="handleChange">
              <el-collapse-item title="Consistency" name="1">
                <template #title>
                  <h6>Toolbar_Form</h6>
                  <div class="ev-form-button">
                    <el-button>조회</el-button>
                  </div>
                </template>
                <Form />
              </el-collapse-item>
            </el-collapse>
          </div>
        </el-scrollbar>
      </div>
    </el-col>
  </el-row>
</template>