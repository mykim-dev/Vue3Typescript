import { defineStore } from 'pinia';

export const useFormStroe = defineStore('formData', {
    state: () => ({
        formItems: [
            { span: 8, isLeft: false, item: { itemType: 'ev-text', itemLabel: 'ev-text', attribute: { disabled: false, focus: false } } },
            { span: 8, isLeft: false, item: { itemType: 'ev-text', itemLabel: 'ev-text disabled', attribute: { disabled: true, focus: false } } },
            { span: 8, isLeft: false, item: { itemType: 'ev-text', itemLabel: 'ev-text focus', attribute: { disabled: false, focus: true } } },

            { span: 8, isLeft: false, item: { itemType: 'ev-password', itemLabel: 'ev-password', attribute: { disabled: false, focus: false } } },
            { span: 8, isLeft: false, item: { itemType: 'ev-password', itemLabel: 'ev-password disabled', attribute: { disabled: true, focus: false } } },
            { span: 8, isLeft: false, item: { itemType: 'ev-password', itemLabel: 'ev-password focus', attribute: { disabled: false, focus: true } } },

            { span: 8, isLeft: false, item: { itemType: 'ev-number', itemLabel: 'ev-number', attribute: { disabled: false, focus: false } } },
            { span: 8, isLeft: false, item: { itemType: 'ev-number', itemLabel: 'ev-number disabled', attribute: { disabled: true, focus: false } } },
            { span: 8, isLeft: false, item: { itemType: 'ev-number', itemLabel: 'ev-number focus', attribute: { disabled: false, focus: true } } },

            { span: 8, isLeft: false, item: { itemType: 'ev-lookup', itemLabel: 'ev-lookup', attribute: { disabled: false, focus: false } } },
            { span: 8, isLeft: false, item: { itemType: 'ev-lookup', itemLabel: 'ev-lookup disabled', attribute: { disabled: true, focus: false } } },
            { span: 8, isLeft: false, item: { itemType: 'ev-lookup', itemLabel: 'ev-lookup focus', attribute: { disabled: false, focus: true } } },

            { span: 8, isLeft: false, item: { itemType: 'ev-date-picker', itemLabel: 'ev-date-picker', attribute: { disabled: false, focus: false } } },
            { span: 8, isLeft: false, item: { itemType: 'ev-date-picker', itemLabel: 'ev-date-picker disabled', attribute: { disabled: true, focus: false } } },
            { span: 8, isLeft: false, item: { itemType: 'ev-date-picker', itemLabel: 'ev-date-picker focus', attribute: { disabled: false, focus: true } } },

            { span: 8, isLeft: false, item: { itemType: 'ev-date-time-picker', itemLabel: 'ev-date-time-picker', attribute: { disabled: false, focus: false } } },
            { span: 8, isLeft: false, item: { itemType: 'ev-date-time-picker', itemLabel: 'ev-date-time-picker disabled', attribute: { disabled: true, focus: false } } },
            { span: 8, isLeft: false, item: { itemType: 'ev-date-time-picker', itemLabel: 'ev-date-time-picker focus', attribute: { disabled: false, focus: true } } },

            { span: 8, isLeft: false, item: { itemType: 'ev-select', itemLabel: 'ev-select', attribute: { disabled: false, focus: false } } },
            { span: 8, isLeft: false, item: { itemType: 'ev-select', itemLabel: 'ev-select disabled', attribute: { disabled: true, focus: false } } },
            { span: 8, isLeft: false, item: { itemType: 'ev-select', itemLabel: 'ev-select focus', attribute: { disabled: false, focus: true } } },

            { span: 8, isLeft: false, item: { itemType: 'ev-color-picker', itemLabel: 'ev-color-picker', attribute: { disabled: false, focus: false } } },
            { span: 8, isLeft: false, item: { itemType: 'ev-color-picker', itemLabel: 'ev-color-picker disabled', attribute: { disabled: true, focus: false } } },
            { span: 8, isLeft: false, item: { itemType: 'ev-color-picker', itemLabel: 'ev-color-picker focus', attribute: { disabled: false, focus: true } } },

            { span: 8, isLeft: false, item: { itemType: 'ev-switch', itemLabel: 'ev-switch', attribute: { disabled: false, focus: false } } },
            { span: 8, isLeft: false, item: { itemType: 'ev-switch', itemLabel: 'ev-switch disabled', attribute: { disabled: true, focus: false } } },
            { span: 8, isLeft: false, item: { itemType: 'ev-switch', itemLabel: 'ev-switch focus', attribute: { disabled: false, focus: true } } },

            { span: 24, isLeft: false, item: { itemType: 'ev-checkbox', itemLabel: 'ev-checkbox', attribute: { disabled: false, focus: false } } },

            { span: 24, isLeft: false, item: { itemType: 'ev-radio', itemLabel: 'ev-radio', attribute: { disabled: false, focus: false } } },

            { span: 8, isLeft: false, item: { itemType: 'ev-textarea', itemLabel: 'ev-textarea', attribute: { disabled: false, focus: false } } },
            { span: 8, isLeft: false, item: { itemType: 'ev-textarea', itemLabel: 'ev-textarea disabled', attribute: { disabled: true, focus: false } } },
            { span: 8, isLeft: false, item: { itemType: 'ev-textarea', itemLabel: 'ev-textarea focus', attribute: { disabled: false, focus: true } } },

            { span: 8, isLeft: false, item: { itemType: 'ev-file-upload', itemLabel: 'ev-file-upload', attribute: { disabled: false, focus: false } } },
            { span: 8, isLeft: false, item: { itemType: 'ev-file-upload', itemLabel: 'ev-file-upload disabled', attribute: { disabled: true, focus: false } } },
            { span: 8, isLeft: false, item: { itemType: 'ev-file-upload', itemLabel: 'ev-file-upload focus', attribute: { disabled: false, focus: true } } },

            { span: 8, isLeft: false, item: { itemType: 'ev-image-upload', itemLabel: 'ev-image-upload', attribute: { disabled: false, focus: false } } },
            { span: 8, isLeft: false, item: { itemType: 'ev-image-upload', itemLabel: 'ev-image-upload disabled', attribute: { disabled: true, focus: false } } },
            { span: 8, isLeft: false, item: { itemType: 'ev-image-upload', itemLabel: 'ev-image-upload focus', attribute: { disabled: false, focus: true } } },

            { span: 24, isLeft: false, item: { itemType: 'ev-image-view', itemLabel: 'ev-image-view', attribute: { disabled: false, focus: false } } },
            { span: 24, isLeft: false, item: { itemType: 'ev-image-view', itemLabel: 'ev-image-view disabled', attribute: { disabled: true, focus: false } } },
            { span: 24, isLeft: false, item: { itemType: 'ev-image-view', itemLabel: 'ev-image-view focus', attribute: { disabled: false, focus: true } } },
        ],
    }),
    getters: {},
    actions: {}
})