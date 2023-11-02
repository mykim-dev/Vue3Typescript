import { defineStore } from 'pinia';

export const listDataStore = defineStore('listData', {
    state: () => ({
        listItems: [
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
    }),
    getters: {},
    actions: {}
})