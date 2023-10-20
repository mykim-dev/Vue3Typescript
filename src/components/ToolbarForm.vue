<script lang="ts" setup>
import { ref } from 'vue'
import Form from '@/components/Form.vue'

const activeNames = ref(['1'])
const handleChange = (val: string[]) => {
  console.log(val)
}
</script>

<template>
  <div class="ev-component">
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
  </div>
</template>