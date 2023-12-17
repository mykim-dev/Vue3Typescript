<script lang="ts" setup>
import { ref } from 'vue'
import Toolbar from '@/components/evToolbar.vue'
import FormItem from '@/components/evFormItem.vue'

const activeNames = ref(['1'])
const handleChange = (val: string[]) => {
  console.log(val)
}
</script>

<template>
  <el-row class="ev-screen-row default" :gutter="16">
    <el-col class="ev-screen-col">      
      <div class="ev-component ev-toolbarform">
        <el-collapse v-model="activeNames">
          <el-collapse-item title="" name="1">
            <template #title>
              <Toolbar />
            </template>
            <FormItem />
          </el-collapse-item>
        </el-collapse>
      </div>
    </el-col>
  </el-row>
</template>

<style lang="scss" scoped></style>
