<script lang="ts" setup>
import { formDataStroe } from '@/stores/components/formData'

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
import evBlank from '@/controls/evBlank.vue'

const formData = formDataStroe()
</script>

<template>
  <div class="ev-component" style="">
    <el-scrollbar class="ev-component-scrollbar">
      <div class="ev-form">
        <el-row class="type-grid">
          <el-col v-for="formItem in formData.formItems" :span="formItem.span">
            <div class="form-item" :class="[formItem.item.itemType, { 'is-left': formItem.isLeft === true }]">
              <div class="form-item-label">
                <evLabel :value="formItem.item.itemLabel" />
              </div>
              <div class="form-item-data">
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
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </el-scrollbar>
  </div>
</template>