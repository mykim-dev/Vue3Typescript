import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAppStore = defineStore('AppSetting', {
  state: () => ({
    appEditMode: ref(false),
    appDarkMode: ref(false),
    appLayoutType: ref('horizontal'),
    appTheme: ref('green'), // green_1, yellow, green_2
    topBanner: ref(true),
    asideBanner: ref(true),
    panelPopup: ref(false),
    panelRight: ref(false),
    panelBottom: ref(false),
    screenExpand: ref(false),
    componentType: ref('basic'),
    progressIcon: ref('basic'),
    menuType: ref('vertical'),
    menuCollapse: ref(false),
    menusTree: [
      { name: 'Home', link: '/', icon: 'HomeFilled', menus: [] },
      {
        name: 'Setting',
        link: '/ThemeSetting',
        icon: 'Setting',
        menus: [
          { name: 'ThemeSetting', link: '/ThemeSetting', icon: '', menus: [] },
          { name: 'AppSetting', link: '/AppSetting', icon: '', menus: [] },
        ],
      },
      {
        name: 'Screen',
        link: '/Default',
        icon: 'FullScreen',
        menus: [
          { name: 'Default', link: '/Default', icon: '', menus: [] },
          { name: 'Horizontal', link: '/Horizontal', icon: '', menus: [] },
          { name: 'Vertical', link: '/Vertical', icon: '', menus: [] },
          { name: 'Horizontal2', link: '/Horizontal2', icon: '', menus: [] },
          { name: 'Vertical2', link: '/Vertical2', icon: '', menus: [] },
          { name: 'Horizontal3', link: '/Horizontal3', icon: '', menus: [] },
          { name: 'Dashboard', link: '/Dashboard', icon: '', menus: [] },
          { name: 'Dashboard1', link: '/Dashboard1', icon: '', menus: [] },
          { name: 'Dashboard2', link: '/Dashboard2', icon: '', menus: [] },
          { name: 'Dashboard3', link: '/Dashboard3', icon: '', menus: [] },
          { name: 'Dynamic', link: '/Dynamic', icon: '', menus: [] },
        ],
      },
      {
        name: 'Component',
        link: '/Form',
        icon: 'Grid',
        menus: [
          { name: 'ToolbarForm', link: '/ToolbarForm', icon: '', menus: [] },
          { name: 'ToolbarList', link: '/ToolbarList', icon: '', menus: [] },
          { name: 'Toolbar', link: '/Toolbar', icon: '', menus: [] },
          // { name: 'Form', link: '/Form', icon: '', menus: [] },
          // { name: 'List', link: '/List', icon: '', menus: [] },
        ],
      },
      {
        name: 'Sample',
        link: '/SampleComponent',
        icon: 'HelpFilled',
        menus: [
          { name: 'SampleComponent', link: '/SampleComponent', icon: '', menus: [] },
          { name: 'SampleBlockGrid', link: '/SampleBlockGrid', icon: '', menus: [] },
          { name: 'SampleOverlayAction', link: '/SampleOverlayAction', icon: '', menus: [] },
        ],
      },
    ],
    tags: [
      { name: 'Application Setting', link: '/AppSetting' },
      { name: 'Screen Display', link: '/SampleBlockGrid' },
      { name: 'Screen', link: '/Default' },
      { name: 'Studio', link: '/StudioHome' },
      // { name: 'ThemeSetting', link: '/ThemeSetting' },
      // { name: 'AppSetting', link: '/AppSetting' },
      // { name: 'SampleComponent', link: '/SampleComponent' },
      // { name: 'SampleBlockGrid', link: '/SampleBlockGrid' },
      // { name: 'SampleOverlayAction', link: '/SampleOverlayAction' },
    ],
  }),
  getters: {},
  actions: {
    changeMode() {
      console.log(this.appDarkMode)
      if (this.appDarkMode) {
        document.querySelector('html')?.classList.add('dark')
      } else {
        document.querySelector('html')?.classList.remove('dark')
      }
    },

    changeTheme(theme: string) {
      if (this.appTheme !== theme) {
        document.querySelector('html')?.classList.remove(this.appTheme)
        this.appTheme = theme
        document.querySelector('html')?.classList.add(theme)
      }
    },

    changeLayout(layout: string) {
      if (this.appLayoutType !== layout) {
        console.log(layout)
        if (layout == 'vertical') {
          this.appLayoutType = 'vertical'
          this.menuType = 'horizontal'
          this.menuCollapse = false
        } else {
          this.appLayoutType = 'horizontal'
          this.menuType = 'vertical'
          this.menuCollapse = false
        }
      }
    },

    toggleMenuCollapse() {
      this.menuCollapse = !this.menuCollapse
    },

    togglePopup() {
      this.panelPopup = !this.panelPopup
    },

    toggleRightPanel() {
      this.panelRight = !this.panelRight
    },

    toggleBottomPanel() {
      this.panelBottom = !this.panelBottom
    },

    toggleScreenExpand() {
      this.screenExpand = !this.screenExpand
    },

    changeComponentType(type: string) {
      this.componentType = type
    },

    changeProgressIcon(type: string) {
      this.progressIcon = type
    },

    toggleAppEditMode() {
      this.appEditMode = !this.appEditMode
    }
  },
})
