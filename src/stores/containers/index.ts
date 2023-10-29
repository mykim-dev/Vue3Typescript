import { defineStore } from 'pinia';

export const layoutSettingStore = defineStore('layoutSetting', {
    state: () => ({
        layoutType: 'horizontal'
    }),
    getters: {},
    actions: {
        changeLayout() {
            this.layoutType === 'horizontal' ? 'vertical' : 'horizontal'
        },
    }
})