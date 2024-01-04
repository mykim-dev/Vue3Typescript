import { defineStore } from 'pinia';

export const useFormStroe = defineStore('formData', {
    state: () => ({
        formControls: [
            { span: 6, isLeft: false, item: { type: 'ev-text', label: 'text', data: 'Default', attribute: { disabled: false, readonly: false, focus: false } } },
            { span: 6, isLeft: false, item: { type: 'ev-text', label: 'text Disabled', data: 'disabled', attribute: { disabled: true, readonly: false, focus: false } } },
            { span: 6, isLeft: false, item: { type: 'ev-text', label: 'text Readonly', data: 'disabled', attribute: { disabled: false, readonly: true, focus: false } } },
            { span: 6, isLeft: false, item: { type: 'ev-text', label: 'text Focus', data: 'focus', attribute: { disabled: false, readonly: false, focus: true } } },

            { span: 8, isLeft: false, item: { type: 'ev-password', label: 'password', data: 'Default', attribute: { disabled: false, focus: false } } },
            { span: 8, isLeft: false, item: { type: 'ev-password', label: 'password', data: 'disabled', attribute: { disabled: true, focus: false } } },
            { span: 8, isLeft: false, item: { type: 'ev-password', label: 'password', data: 'focus', attribute: { disabled: false, focus: true } } },

            { span: 8, isLeft: false, item: { type: 'ev-number', label: 'number', data: 'Default', attribute: { disabled: false, focus: false } } },
            { span: 8, isLeft: false, item: { type: 'ev-number', label: 'number', data: 'disabled', attribute: { disabled: true, focus: false } } },
            { span: 8, isLeft: false, item: { type: 'ev-number', label: 'number', data: 'focus', attribute: { disabled: false, focus: true } } },

            { span: 8, isLeft: false, item: { type: 'ev-lookup', label: 'lookup', data: 'Default', attribute: { disabled: false, focus: false } } },
            { span: 8, isLeft: false, item: { type: 'ev-lookup', label: 'lookup', data: 'disabled', attribute: { disabled: true, focus: false } } },
            { span: 8, isLeft: false, item: { type: 'ev-lookup', label: 'lookup', data: 'focus', attribute: { disabled: false, focus: true } } },

            { span: 8, isLeft: false, item: { type: 'ev-date-picker', label: 'date-picker', data: 'Default', attribute: { disabled: false, focus: false } } },
            { span: 8, isLeft: false, item: { type: 'ev-date-picker', label: 'date-picker', data: 'disabled', attribute: { disabled: true, focus: false } } },
            { span: 8, isLeft: false, item: { type: 'ev-date-picker', label: 'date-picker', data: 'focus', attribute: { disabled: false, focus: true } } },

            { span: 8, isLeft: false, item: { type: 'ev-date-time-picker', label: 'date-time-picker', data: 'Default', attribute: { disabled: false, focus: false } } },
            { span: 8, isLeft: false, item: { type: 'ev-date-time-picker', label: 'date-time-picker', data: 'disabled', attribute: { disabled: true, focus: false } } },
            { span: 8, isLeft: false, item: { type: 'ev-date-time-picker', label: 'date-time-picker', data: 'focus', attribute: { disabled: false, focus: true } } },

            { span: 8, isLeft: false, item: { type: 'ev-select', label: 'select', data: 'Default', attribute: { disabled: false, focus: false } } },
            { span: 8, isLeft: false, item: { type: 'ev-select', label: 'select', data: 'disabled', attribute: { disabled: true, focus: false } } },
            { span: 8, isLeft: false, item: { type: 'ev-select', label: 'select', data: 'focus', attribute: { disabled: false, focus: true } } },

            { span: 8, isLeft: false, item: { type: 'ev-color-picker', label: 'color-picker', data: 'Default', attribute: { disabled: false, focus: false } } },
            { span: 8, isLeft: false, item: { type: 'ev-color-picker', label: 'color-picker', data: 'disabled', attribute: { disabled: true, focus: false } } },
            { span: 8, isLeft: false, item: { type: 'ev-color-picker', label: 'color-picker', data: 'focus', attribute: { disabled: false, focus: true } } },

            { span: 8, isLeft: false, item: { type: 'ev-switch', label: 'switch', data: 'Default', attribute: { disabled: false, focus: false } } },
            { span: 8, isLeft: false, item: { type: 'ev-switch', label: 'switch', data: 'disabled', attribute: { disabled: true, focus: false } } },
            { span: 8, isLeft: false, item: { type: 'ev-switch', label: 'switch', data: 'focus', attribute: { disabled: false, focus: true } } },

            { span: 24, isLeft: false, item: { type: 'ev-checkbox', label: 'checkbox', data: 'Default', attribute: { disabled: false, focus: false } } },

            { span: 24, isLeft: false, item: { type: 'ev-radio', label: 'radio', data: 'Default', attribute: { disabled: false, focus: false } } },

            { span: 8, isLeft: false, item: { type: 'ev-textarea', label: 'textarea', data: 'Default', attribute: { disabled: false, focus: false } } },
            { span: 8, isLeft: false, item: { type: 'ev-textarea', label: 'textarea', data: 'disabled', attribute: { disabled: true, focus: false } } },
            { span: 8, isLeft: false, item: { type: 'ev-textarea', label: 'textarea', data: 'focus', attribute: { disabled: false, focus: true } } },

            { span: 8, isLeft: false, item: { type: 'ev-file-upload', label: 'file-upload', data: 'Default', attribute: { disabled: false, focus: false } } },
            { span: 8, isLeft: false, item: { type: 'ev-file-upload', label: 'file-upload', data: 'disabled', attribute: { disabled: true, focus: false } } },
            { span: 8, isLeft: false, item: { type: 'ev-file-upload', label: 'file-upload', data: 'focus', attribute: { disabled: false, focus: true } } },

            { span: 8, isLeft: false, item: { type: 'ev-image-upload', label: 'image-upload', data: 'Default', attribute: { disabled: false, focus: false } } },
            { span: 8, isLeft: false, item: { type: 'ev-image-upload', label: 'image-upload', data: 'disabled', attribute: { disabled: true, focus: false } } },
            { span: 8, isLeft: false, item: { type: 'ev-image-upload', label: 'image-upload', data: 'focus', attribute: { disabled: false, focus: true } } },

            { span: 24, isLeft: false, item: { type: 'ev-image-view', label: 'image-view', data: 'Default', attribute: { disabled: false, focus: false } } },
            { span: 24, isLeft: false, item: { type: 'ev-image-view', label: 'image-view', data: 'disabled', attribute: { disabled: true, focus: false } } },
            { span: 24, isLeft: false, item: { type: 'ev-image-view', label: 'image-view', data: 'focus', attribute: { disabled: false, focus: true } } },
        ],
    }),
    getters: {},
    actions: {}
})