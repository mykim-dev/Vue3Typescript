<script lang="ts" setup>
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

const controlItems = [
	{ span: 8, isLeft: false, itemType: 'ev-text', itemLabel: 'ev-text' },
	{ span: 8, isLeft: false, itemType: 'ev-password', itemLabel: 'ev-password' },
	{ span: 8, isLeft: false, itemType: 'ev-number', itemLabel: 'ev-number' },
	{ span: 8, isLeft: false, itemType: 'ev-lookup', itemLabel: 'ev-lookup' },
	{ span: 8, isLeft: false, itemType: 'ev-date-picker', itemLabel: 'ev-date-picker' },
	{ span: 8, isLeft: false, itemType: 'ev-date-time-picker', itemLabel: 'ev-date-time-picker' },
	{ span: 8, isLeft: false, itemType: 'ev-select', itemLabel: 'ev-select' },
	{ span: 8, isLeft: false, itemType: 'ev-color-picker', itemLabel: 'ev-color-picker' },
	{ span: 8, isLeft: false, itemType: 'ev-switch', itemLabel: 'ev-switch' },
	{ span: 24, isLeft: false, itemType: 'ev-checkbox', itemLabel: 'ev-checkbox' },
	{ span: 24, isLeft: false, itemType: 'ev-radio', itemLabel: 'ev-radio' },
	{ span: 24, isLeft: false, itemType: 'ev-textarea', itemLabel: 'ev-textarea' },
	{ span: 12, isLeft: false, itemType: 'ev-file-upload', itemLabel: 'ev-file-upload' },
	{ span: 12, isLeft: false, itemType: 'ev-image-upload', itemLabel: 'ev-image-upload' },
	{ span: 24, isLeft: false, itemType: 'ev-image-view', itemLabel: 'ev-image-view' },
];
</script>

<template>
	<div class="ev-component">
		<div class="ev-form">
			<el-row class="type-grid">
				<el-col v-for="controlItem in controlItems" :span="controlItem.span">
					<div class="form-item" :class="[controlItem.itemType, { 'is-left': controlItem.isLeft === true }]">
						<div class="form-item-label">
							<evLabel :value="controlItem.itemLabel" />
						</div>
						<div class="form-item-data">
							<template v-if="controlItem.itemType === 'ev-text'">
								<evText />
							</template>
							<template v-if="controlItem.itemType === 'ev-password'">
								<evPassword />
							</template>
							<template v-if="controlItem.itemType === 'ev-number'">
								<evNumber />
							</template>
							<template v-if="controlItem.itemType === 'ev-lookup'">
								<evLookup />
							</template>
							<template v-if="controlItem.itemType === 'ev-date-picker'">
								<evDatePicker />
							</template>
							<template v-if="controlItem.itemType === 'ev-date-time-picker'">
								<evDateTimePicker />
							</template>
							<template v-if="controlItem.itemType === 'ev-select'">
								<evSelect />
							</template>
							<template v-if="controlItem.itemType === 'ev-color-picker'">
								<evColorPicker />
							</template>
							<template v-if="controlItem.itemType === 'ev-switch'">
								<evSwitch />
							</template>
							<template v-if="controlItem.itemType === 'ev-checkbox'">
								<evCheckbox />
							</template>
							<template v-if="controlItem.itemType === 'ev-radio'">
								<evRadio />
							</template>
							<template v-if="controlItem.itemType === 'ev-textarea'">
								<evTextarea />
							</template>
							<template v-if="controlItem.itemType === 'ev-file-upload'">
								<evFileUpload />
							</template>
							<template v-if="controlItem.itemType === 'ev-image-upload'">
								<evImageUpload />
							</template>
							<template v-if="controlItem.itemType === 'ev-image-view'">
								<evImageView />
							</template>
						</div>
					</div>
				</el-col>
			</el-row>
		</div>
	</div>
</template>