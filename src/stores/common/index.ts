import { defineStore } from 'pinia';
import { ref } from 'vue'

export const AppSettingStore = defineStore('AppSetting', {
    state: () => ({
        appLayoutType: ref('horizontal'),
        appTheme: ref('green'),  // green_1, yellow, green_2
        screenGutter: ref(20),
        screenIsFull: ref(false),
        menuType: ref('vertical'),
        menuCollapse: ref(false),
        menus: [
            { name: 'Home', link: '/', icon: '', submenu: [] },
            { name: 'Setting', link: '/Setting', icon: 'Setting', submenu: [] },
            {
                name: 'Screen',
                link: '/Default',
                icon: 'Menu',
                submenu: [
                    { name: 'Default', link: '/Default', icon: 'Menu', submenu: [] },
                    {
                        name: 'Horizontal',
                        link: '/Horizontal',
                        icon: 'Location',
                        submenu: [],
                    },
                    { name: 'Vertical', link: '/Vertical', icon: 'Setting', submenu: [] },
                    { name: 'Horizontal2', link: '/Horizontal2', icon: 'Menu', submenu: [] },
                    { name: 'Vertical2', link: '/Vertical2', icon: 'Location', submenu: [] },
                    {
                        name: 'Horizontal3',
                        link: '/Horizontal3',
                        icon: 'Setting',
                        submenu: [],
                    },
                    { name: 'Dashboard', link: '/Dashboard', icon: 'Menu', submenu: [] },
                    {
                        name: 'Dashboard1',
                        link: '/Dashboard1',
                        icon: 'Location',
                        submenu: [],
                    },
                    { name: 'Dashboard2', link: '/Dashboard2', icon: 'Setting', submenu: [] },
                    { name: 'Dashboard3', link: '/Dashboard3', icon: 'Menu', submenu: [] },
                    { name: 'Dynamic', link: '/Dynamic', icon: 'Location', submenu: [] },
                ],
            },
            {
                name: 'Component', link: '/', icon: 'Setting', submenu: [
                    { name: 'Form', link: '/Form', icon: '', submenu: [] },
                    { name: 'List', link: '/List', icon: '', submenu: [] },
                    { name: 'ToolbarForm', link: '/ToolbarForm', icon: '', submenu: [] },
                    { name: 'ToolbarList', link: '/ToolbarList', icon: '', submenu: [] },
                    { name: 'Tabs', link: '/Tabs', icon: '', submenu: [] },
                ]
            },
            { name: 'Control', link: '/', icon: 'Menu', submenu: [] },
        ],
        tags: [
            { name: 'SampleForm', link: '/SampleForm' },
            { name: 'SampleList', link: '/SampleList' },
            { name: 'SampleFormList', link: '/SampleFormList' },
        ],
    }),
    getters: {},
    actions: {
        changeTheme(theme: string) {
            if (this.appTheme !== theme) {
                this.appTheme = theme
                document.querySelector('body')?.setAttribute('class', theme)
            }
        },

        changeLayout(layout: string) {
            this.appLayoutType = layout
            this.menuType = (layout === 'vertical' || layout === 'vertical2') ? 'horizontal' : 'vertical'
        },

        changeMenuCollapse() {
            this.menuCollapse = !this.menuCollapse
        },

        mainExpand() {

        },
    }
})