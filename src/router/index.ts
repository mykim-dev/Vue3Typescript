import { createRouter, createWebHistory } from 'vue-router'
import AppHome from '@/views/AppHome.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'AppHome',
      component: AppHome,
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
      component: () => import('@/components/evForm.vue'),
    },
    {
      path: '/List',
      name: 'List',
      component: () => import('@/components/evList.vue'),
    },
    {
      path: '/ToolbarForm',
      name: 'ToolbarForm',
      component: () => import('@/components/evToolbarForm.vue'),
    },
    {
      path: '/Toolbar',
      name: 'Toolbar',
      component: () => import('@/components/evToolbar.vue'),
    },
    {
      path: '/ToolbarList',
      name: 'ToolbarList',
      component: () => import('@/components/evToolbarList.vue'),
    },
    {
      path: '/ThemeSetting',
      name: 'ThemeSetting',
      component: () => import('@/setting/setThemeView.vue'),
    },
    {
      path: '/AppSetting',
      name: 'AppSetting',
      component: () => import('@/setting/setAppView.vue'),
    },
    {
      path: '/SampleBlockGrid',
      name: 'sampleBlockGrid',
      component: () => import('@/sample/sampleBlockGrid.vue'),
    },
    {
      path: '/SampleOverlayAction',
      name: 'SampleOverlayAction',
      component: () => import('@/sample/sampleOverlayAction.vue'),
    },
    {
      path: '/SampleComponent',
      name: 'SampleComponent',
      component: () => import('@/sample/sampleComponent.vue'),
    },
    {
      path: '/StudioHome',
      name: 'StudioHome',
      meta: { layout: 'LayoutAdmin' },
      component: () => import('@/studio/StudioHome.vue'),
    },    
  ],
})

export default router
