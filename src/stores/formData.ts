import { defineStore } from 'pinia';

export const useFormStroe = defineStore('formData', {
    state: () => ({
        formItems: [
            { span: 8, isLeft: false, item: { itemType: 'ev-text', itemLabel: 'text', itemData: 'Default', attribute: { disabled: false, focus: false } } },
            { span: 8, isLeft: false, item: { itemType: 'ev-text', itemLabel: 'text', itemData: 'disabled', attribute: { disabled: true, focus: false } } },
            { span: 8, isLeft: false, item: { itemType: 'ev-text', itemLabel: 'text', itemData: 'focus', attribute: { disabled: false, focus: true } } },

            { span: 8, isLeft: false, item: { itemType: 'ev-password', itemLabel: 'password', itemData: 'Default', attribute: { disabled: false, focus: false } } },
            { span: 8, isLeft: false, item: { itemType: 'ev-password', itemLabel: 'password', itemData: 'disabled', attribute: { disabled: true, focus: false } } },
            { span: 8, isLeft: false, item: { itemType: 'ev-password', itemLabel: 'password', itemData: 'focus', attribute: { disabled: false, focus: true } } },

            { span: 8, isLeft: false, item: { itemType: 'ev-number', itemLabel: 'number', itemData: 'Default', attribute: { disabled: false, focus: false } } },
            { span: 8, isLeft: false, item: { itemType: 'ev-number', itemLabel: 'number', itemData: 'disabled', attribute: { disabled: true, focus: false } } },
            { span: 8, isLeft: false, item: { itemType: 'ev-number', itemLabel: 'number', itemData: 'focus', attribute: { disabled: false, focus: true } } },

            { span: 8, isLeft: false, item: { itemType: 'ev-lookup', itemLabel: 'lookup', itemData: 'Default', attribute: { disabled: false, focus: false } } },
            { span: 8, isLeft: false, item: { itemType: 'ev-lookup', itemLabel: 'lookup', itemData: 'disabled', attribute: { disabled: true, focus: false } } },
            { span: 8, isLeft: false, item: { itemType: 'ev-lookup', itemLabel: 'lookup', itemData: 'focus', attribute: { disabled: false, focus: true } } },

            { span: 8, isLeft: false, item: { itemType: 'ev-date-picker', itemLabel: 'date-picker', itemData: 'Default', attribute: { disabled: false, focus: false } } },
            { span: 8, isLeft: false, item: { itemType: 'ev-date-picker', itemLabel: 'date-picker', itemData: 'disabled', attribute: { disabled: true, focus: false } } },
            { span: 8, isLeft: false, item: { itemType: 'ev-date-picker', itemLabel: 'date-picker', itemData: 'focus', attribute: { disabled: false, focus: true } } },

            { span: 8, isLeft: false, item: { itemType: 'ev-date-time-picker', itemLabel: 'date-time-picker', itemData: 'Default', attribute: { disabled: false, focus: false } } },
            { span: 8, isLeft: false, item: { itemType: 'ev-date-time-picker', itemLabel: 'date-time-picker', itemData: 'disabled', attribute: { disabled: true, focus: false } } },
            { span: 8, isLeft: false, item: { itemType: 'ev-date-time-picker', itemLabel: 'date-time-picker', itemData: 'focus', attribute: { disabled: false, focus: true } } },

            { span: 8, isLeft: false, item: { itemType: 'ev-select', itemLabel: 'select', itemData: 'Default', attribute: { disabled: false, focus: false } } },
            { span: 8, isLeft: false, item: { itemType: 'ev-select', itemLabel: 'select', itemData: 'disabled', attribute: { disabled: true, focus: false } } },
            { span: 8, isLeft: false, item: { itemType: 'ev-select', itemLabel: 'select', itemData: 'focus', attribute: { disabled: false, focus: true } } },

            { span: 8, isLeft: false, item: { itemType: 'ev-color-picker', itemLabel: 'color-picker', itemData: 'Default', attribute: { disabled: false, focus: false } } },
            { span: 8, isLeft: false, item: { itemType: 'ev-color-picker', itemLabel: 'color-picker', itemData: 'disabled', attribute: { disabled: true, focus: false } } },
            { span: 8, isLeft: false, item: { itemType: 'ev-color-picker', itemLabel: 'color-picker', itemData: 'focus', attribute: { disabled: false, focus: true } } },

            { span: 8, isLeft: false, item: { itemType: 'ev-switch', itemLabel: 'switch', itemData: 'Default', attribute: { disabled: false, focus: false } } },
            { span: 8, isLeft: false, item: { itemType: 'ev-switch', itemLabel: 'switch', itemData: 'disabled', attribute: { disabled: true, focus: false } } },
            { span: 8, isLeft: false, item: { itemType: 'ev-switch', itemLabel: 'switch', itemData: 'focus', attribute: { disabled: false, focus: true } } },

            { span: 24, isLeft: false, item: { itemType: 'ev-checkbox', itemLabel: 'checkbox', itemData: 'Default', attribute: { disabled: false, focus: false } } },

            { span: 24, isLeft: false, item: { itemType: 'ev-radio', itemLabel: 'radio', itemData: 'Default', attribute: { disabled: false, focus: false } } },

            { span: 8, isLeft: false, item: { itemType: 'ev-textarea', itemLabel: 'textarea', itemData: 'Default', attribute: { disabled: false, focus: false } } },
            { span: 8, isLeft: false, item: { itemType: 'ev-textarea', itemLabel: 'textarea', itemData: 'disabled', attribute: { disabled: true, focus: false } } },
            { span: 8, isLeft: false, item: { itemType: 'ev-textarea', itemLabel: 'textarea', itemData: 'focus', attribute: { disabled: false, focus: true } } },

            { span: 8, isLeft: false, item: { itemType: 'ev-file-upload', itemLabel: 'file-upload', itemData: 'Default', attribute: { disabled: false, focus: false } } },
            { span: 8, isLeft: false, item: { itemType: 'ev-file-upload', itemLabel: 'file-upload', itemData: 'disabled', attribute: { disabled: true, focus: false } } },
            { span: 8, isLeft: false, item: { itemType: 'ev-file-upload', itemLabel: 'file-upload', itemData: 'focus', attribute: { disabled: false, focus: true } } },

            { span: 8, isLeft: false, item: { itemType: 'ev-image-upload', itemLabel: 'image-upload', itemData: 'Default', attribute: { disabled: false, focus: false } } },
            { span: 8, isLeft: false, item: { itemType: 'ev-image-upload', itemLabel: 'image-upload', itemData: 'disabled', attribute: { disabled: true, focus: false } } },
            { span: 8, isLeft: false, item: { itemType: 'ev-image-upload', itemLabel: 'image-upload', itemData: 'focus', attribute: { disabled: false, focus: true } } },

            { span: 24, isLeft: false, item: { itemType: 'ev-image-view', itemLabel: 'image-view', itemData: 'Default', attribute: { disabled: false, focus: false } } },
            { span: 24, isLeft: false, item: { itemType: 'ev-image-view', itemLabel: 'image-view', itemData: 'disabled', attribute: { disabled: true, focus: false } } },
            { span: 24, isLeft: false, item: { itemType: 'ev-image-view', itemLabel: 'image-view', itemData: 'focus', attribute: { disabled: false, focus: true } } },
        ],
    }),
    getters: {},
    actions: {}
})