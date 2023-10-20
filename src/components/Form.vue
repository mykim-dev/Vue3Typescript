<script lang="ts" setup>
import evText from '@/controls/evText.vue'
import evPassword from '@/controls/evPassword.vue'
import evNumber from '@/controls/evNumber.vue'
import evLookup from '@/controls/evLookup.vue'
import evDatePicker from '@/controls/evDatePicker.vue'
import evDateTimePicker from '@/controls/evDateTimePicker.vue'
import evSelect from '@/controls/evSelect.vue'
import evCheckbox from '@/controls/evCheckbox.vue'
import evRadio from '@/controls/evRadio.vue'
import evFileUpload from '@/controls/evFileUpload.vue'
import evImageUpload from '@/controls/evImageUpload.vue'
import evImageView from '@/controls/evImageView.vue'
import evTextarea from '@/controls/evTextarea.vue'
import evSwitch from '@/controls/evSwitch.vue'
import evColorPicker from '@/controls/evColorPicker.vue'

const onSubmit = () => {
  console.log('submit!')
}
</script>

<template>
  <div class="ev-component">
    <div class="ev-form">
      <el-row class="type-grid">
        <el-col :span="6"><evText /></el-col>
        <el-col :span="6"><evPassword /></el-col>
        <el-col :span="6"><evNumber /></el-col>
        <el-col :span="6"><evLookup /></el-col>
        <el-col :span="6"><evDatePicker /></el-col>
        <el-col :span="6"><evDateTimePicker /></el-col>
        <el-col :span="6"><evSelect /></el-col>
        <el-col :span="12"><evCheckbox /></el-col>
        <el-col :span="12"><evRadio /></el-col>
        <el-col :span="24"><evTextarea /></el-col>
        <el-col :span="8"><evFileUpload /></el-col>
        <el-col :span="8"><evImageUpload /></el-col>
        <el-col :span="8"><evImageView /></el-col>
        <el-col :span="8"><evSwitch /></el-col>
        <el-col :span="8"><evColorPicker /></el-col>
      </el-row>
    </div>
  </div>
</template>