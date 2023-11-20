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
            { name: 'Home', link: '/', icon: 'HomeFilled', menus: [] },
            { name: 'Setting', link: '/Setting', icon: 'Setting', menus: [] },
            {
                name: 'Screen', link: '/Default', icon: 'FullScreen',
                menus: [
                    { name: 'Default', link: '/Default', icon: '', menus: [] },
                    {
                        name: 'Horizontal', link: '/Horizontal', icon: '', menus: [
                            { name: 'Default', link: '/Default', icon: '', menus: [] },
                            {
                                name: 'Horizontal',
                                link: '/Horizontal',
                                icon: 'Location',
                                menus: [],
                            }
                        ],
                    },
                    { name: 'Vertical', link: '/Vertical', icon: '', menus: [] },
                    { name: 'Horizontal2', link: '/Horizontal2', icon: '', menus: [] },
                    { name: 'Vertical2', link: '/Vertical2', icon: '', menus: [] },
                    {
                        name: 'Horizontal3',
                        link: '/Horizontal3',
                        icon: '',
                        menus: [],
                    },
                    { name: 'Dashboard', link: '/Dashboard', icon: '', menus: [] },
                    {
                        name: 'Dashboard1',
                        link: '/Dashboard1',
                        icon: '',
                        menus: [],
                    },
                    { name: 'Dashboard2', link: '/Dashboard2', icon: '', menus: [] },
                    { name: 'Dashboard3', link: '/Dashboard3', icon: '', menus: [] },
                    { name: 'Dynamic', link: '/Dynamic', icon: '', menus: [] },
                ],
            },
            {
                name: 'Component', link: '/', icon: 'Grid', menus: [
                    { name: 'Form', link: '/Form', icon: '', menus: [] },
                    { name: 'List', link: '/List', icon: '', menus: [] },
                    { name: 'ToolbarForm', link: '/ToolbarForm', icon: '', menus: [] },
                    { name: 'ToolbarList', link: '/ToolbarList', icon: '', menus: [] },
                    { name: 'Tabs', link: '/Tabs', icon: '', menus: [] },
                ]
            },
            { name: 'Control', link: '/', icon: 'Mouse', menus: [] },

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