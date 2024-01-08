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
</script>

<template>
    <el-form class="el-row" :gutter="16">
      <el-form-item :label="formControl.item.label" :class="[`el-col-${formControl.span}`, formControl.item.type, { 'is-left': formControl.isLeft === true }]" v-for="formControl in formData.formControls">
        <evText v-if="formControl.item.type === 'ev-text'" :attribute="formControl.item.attribute" />
        <evPassword v-if="formControl.item.type === 'ev-password'" :attribute="formControl.item.attribute" />
        <evNumber v-if="formControl.item.type === 'ev-number'" :attribute="formControl.item.attribute" />
        <evLookup v-if="formControl.item.type === 'ev-lookup'" :attribute="formControl.item.attribute" />
        <evDatePicker v-if="formControl.item.type === 'ev-date-picker'" :attribute="formControl.item.attribute" />
        <evDateTimePicker v-if="formControl.item.type === 'ev-date-time-picker'" :attribute="formControl.item.attribute" />
        <evSelect v-if="formControl.item.type === 'ev-select'" :attribute="formControl.item.attribute" />
        <evColorPicker v-if="formControl.item.type === 'ev-color-picker'" :attribute="formControl.item.attribute" />
        <evSwitch v-if="formControl.item.type === 'ev-switch'" :attribute="formControl.item.attribute" />
        <evCheckbox v-if="formControl.item.type === 'ev-checkbox'" :attribute="formControl.item.attribute" />
        <evRadio v-if="formControl.item.type === 'ev-radio'" :attribute="formControl.item.attribute" />
        <evTextarea v-if="formControl.item.type === 'ev-textarea'" :attribute="formControl.item.attribute" />
        <evFileUpload v-if="formControl.item.type === 'ev-file-upload'" :attribute="formControl.item.attribute" />
        <evImageUpload v-if="formControl.item.type === 'ev-image-upload'" :attribute="formControl.item.attribute" />
        <evImageView v-if="formControl.item.type === 'ev-image-view'" :attribute="formControl.item.attribute" />
        <evDivider v-if="formControl.item.type === 'ev-divider'" />
      </el-form-item>
    </el-form>
  <!-- </div> -->
</template>
