import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    // {
    //   path: '/',
    //   name: 'home',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/_AboutView.vue')
    // },
    {
      path: '/FloatGrid',
      name: 'FloatGrid',
      component: () => import('@/setting/FloatGrid.vue'),
      meta: { layout: 'LayoutSetting' }
    },
    {
      path: '/ThemeColor',
      name: 'ThemeColor',
      component: () => import('@/setting/ColorList.vue'),
      meta: { layout: 'LayoutSetting' }
    },
    {
      path: '/OverlayAction',
      name: 'OverlayAction',
      component: () => import('@/setting/overlayAction.vue')
    },
    {
      path: '/Default',
      name: 'Default',
      component: () => import('@/screen/Default.vue'),
    },
    {
      path: '/Horizontal',
      name: 'Horizontal',
      component: () => import('@/screen/Horizontal.vue'),
    },
    {
      path: '/Vertical',
      name: 'Vertical',
      component: () => import('@/screen/Vertical.vue'),
    },
    {
      path: '/Horizontal2',
      name: 'Horizontal2',
      component: () => import('@/screen/Horizontal2.vue'),
    },
    {
      path: '/Vertical2',
      name: 'Vertical2',
      component: () => import('@/screen/Vertical2.vue'),
    },
    {
      path: '/Horizontal3',
      name: 'Horizontal3',
      component: () => import('@/screen/Horizontal3.vue'),
    },
    {
      path: '/Dashboard',
      name: 'Dashboard',
      component: () => import('@/screen/Dashboard.vue'),
    },
    {
      path: '/Dashboard1',
      name: 'Dashboard1',
      component: () => import('@/screen/Dashboard1.vue'),
    },
    {
      path: '/Dashboard2',
      name: 'Dashboard2',
      component: () => import('@/screen/Dashboard2.vue'),
    },
    {
      path: '/Dashboard3',
      name: 'Dashboard3',
      component: () => import('@/screen/Dashboard3.vue'),
    },
    {
      path: '/Dynamic',
      name: 'Dynamic',
      component: () => import('@/screen/Dynamic.vue'),
    },
    {
      path: '/Form',
      name: 'Form',
      component: () => import('@/components/Form.vue'),
    },
    {
      path: '/List',
      name: 'List',
      component: () => import('@/components/List.vue'),
    },
    {
      path: '/ToolbarForm',
      name: 'ToolbarForm',
      component: () => import('@/components/ToolbarForm.vue'),
    },
    {
      path: '/ToolbarList',
      name: 'ToolbarList',
      component: () => import('@/components/ToolbarList.vue'),
    },
    {
      path: '/Control',
      name: 'Control',
      component: () => import('@/controls/evControl.vue'),
    },
    {
      path: '/Tabs',
      name: 'Tabs',
      component: () => import('@/components/Tabs.vue'),
    },
    {
      path: '/SampleForm',
      name: 'SampleForm',
      component: () => import('@/sample/SampleForm.vue'),
    },
    {
      path: '/SampleList',
      name: 'SampleList',
      component: () => import('@/sample/SampleList.vue'),
    },
    {
      path: '/SampleFormList',
      name: 'SampleFormList',
      component: () => import('@/sample/SampleFormList.vue'),
    },
  ]
})

export default router
