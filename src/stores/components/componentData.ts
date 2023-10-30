import { defineStore } from 'pinia';

export const tmpDataStroe = defineStore('tmpData', {
    state: () => ({
        listData: [
            {
                date: '2016-05-08',
                name: 'Tom',
                amount: 8000,
                fixed: 'Fixed',
            },
            {
                date: '2016-05-07',
                name: 'Tom',
                amount: 7000,
                fixed: 'Fixed',
            },
            {
                date: '2016-05-06',
                name: 'Tom',
                amount: 6000,
                fixed: 'Fixed',
            },
            {
                date: '2016-05-05',
                name: 'Tom',
                amount: 5000,
                fixed: 'Fixed',
            },
            {
                date: '2016-05-04',
                name: 'Tom',
                amount: 4000,
                fixed: 'Fixed',
            },
            {
                date: '2016-05-03',
                name: 'Tom',
                amount: 3000,
                fixed: 'Fixed',
            },
            {
                date: '2016-05-02',
                name: 'Tom',
                amount: 2000,
                fixed: 'Fixed',
            },
            {
                date: '2016-05-01',
                name: 'Tom',
                amount: 1000,
                fixed: 'Fixed',
            },
        ],
        formData: [
            { span: 8, isLeft: false, item: { itemType: 'ev-text', itemLabel: 'ev-text' } },
            { span: 8, isLeft: false, item: { itemType: 'ev-password', itemLabel: 'ev-password' } },
            { span: 8, isLeft: false, item: { itemType: 'ev-number', itemLabel: 'ev-number' } },
            { span: 8, isLeft: false, item: { itemType: 'ev-lookup', itemLabel: 'ev-lookup' } },
            { span: 8, isLeft: false, item: { itemType: 'ev-date-picker', itemLabel: 'ev-date-picker' } },
            { span: 8, isLeft: false, item: { itemType: 'ev-date-time-picker', itemLabel: 'ev-date-time-picker' } },
            { span: 8, isLeft: false, item: { itemType: 'ev-select', itemLabel: 'ev-select' } },
            { span: 8, isLeft: false, item: { itemType: 'ev-color-picker', itemLabel: 'ev-color-picker' } },
            { span: 8, isLeft: false, item: { itemType: 'ev-switch', itemLabel: 'ev-switch' } },
            { span: 24, isLeft: false, item: { itemType: 'ev-checkbox', itemLabel: 'ev-checkbox' } },
            { span: 24, isLeft: false, item: { itemType: 'ev-radio', itemLabel: 'ev-radio' } },
            { span: 24, isLeft: false, item: { itemType: 'ev-textarea', itemLabel: 'ev-textarea' } },
            { span: 12, isLeft: false, item: { itemType: 'ev-file-upload', itemLabel: 'ev-file-upload' } },
            { span: 12, isLeft: false, item: { itemType: 'ev-image-upload', itemLabel: 'ev-image-upload' } },
            { span: 24, isLeft: false, item: { itemType: 'ev-image-view', itemLabel: 'ev-image-view' } },
        ],
    }),
    getters: {},
    actions: {}
})