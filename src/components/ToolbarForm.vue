<script lang="ts" setup>
import { ref } from 'vue'
import { AppSettingStore } from '@/stores/common/index'
import Form from '@/components/Form.vue'

const AppSetting = AppSettingStore()
const isFull = AppSetting.screenIsFull

const activeNames = ref(['1'])
const handleChange = (val: string[]) => {
  console.log(val)
}
</script>

<template>
  <div class="ev-screen default" :class="{ 'is-full': isFull }">
    <div class="ev-screen-item">
      <div class="ev-component">
        <div class="ev-toolbarform">
          <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item title="Consistency" name="1">
              <template #title>
                <h4 class="ev-toolbar__title">Toolbar_Form</h4>
                <div class="ev-form-button">
                  <el-button>조회</el-button>
                </div>
              </template>
              <Form />
            </el-collapse-item>
          </el-collapse>
        </div>
      </div>
    </div>
  </div>
</template>