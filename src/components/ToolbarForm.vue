<script lang="ts" setup>
import { ref } from 'vue'
import Toolbar from '@/components/Toolbar.vue'
import Form from '@/components/Form.vue'

const activeNames = ref(['1'])
const handleChange = (val: string[]) => {
  console.log(val)
}
</script>

<template>
  <div class="ev-toolbarform">
    <el-collapse v-model="activeNames">
      <toolbar />
      <el-collapse-item name="1">
        <Form />            
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<style lang="scss" scoped>
</style>