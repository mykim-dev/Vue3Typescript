<script lang="ts" setup>
import { useFormStroe } from '@/stores/formData'

import evText from '@/controls/evText.vue'
import evLabel from '@/controls/evLabel.vue'
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
import evDivider from '@/controls/evDivider.vue'

const formData = useFormStroe()
// import { ref } from 'vue'
// const input1 = ref('default')
// const input2 = ref('disabled')
// const input3 = ref('readonly')
</script>

<template>
  <div class="ev-form-item">
    <el-row>
      <!-- <el-input v-model="input1" />
      <el-input v-model="input2" disabled />
      <el-input v-model="input3" readonly /> -->

      <el-col v-for="formItem in formData.formItems" :span="formItem.span">
        <el-form-item :label="formItem.item.itemLabel" label-width="120px" :class="[formItem.item.itemType, { 'is-left': formItem.isLeft === true }]">
          <evText v-if="formItem.item.itemType === 'ev-text'" />
          <evPassword v-if="formItem.item.itemType === 'ev-password'" />
          <evNumber v-if="formItem.item.itemType === 'ev-number'" />
          <evLookup v-if="formItem.item.itemType === 'ev-lookup'" />
          <evDatePicker v-if="formItem.item.itemType === 'ev-date-picker'" />
          <evDateTimePicker v-if="formItem.item.itemType === 'ev-date-time-picker'" />
          <evSelect v-if="formItem.item.itemType === 'ev-select'" />
          <evColorPicker v-if="formItem.item.itemType === 'ev-color-picker'" />
          <evSwitch v-if="formItem.item.itemType === 'ev-switch'" />
          <evCheckbox v-if="formItem.item.itemType === 'ev-checkbox'" />
          <evRadio v-if="formItem.item.itemType === 'ev-radio'" />
          <evTextarea v-if="formItem.item.itemType === 'ev-textarea'" />
          <evFileUpload v-if="formItem.item.itemType === 'ev-file-upload'" />
          <evImageUpload v-if="formItem.item.itemType === 'ev-image-upload'" />
          <evImageView v-if="formItem.item.itemType === 'ev-image-view'" />
        </el-form-item>
      </el-col>
    </el-row>
  </div>
</template>
