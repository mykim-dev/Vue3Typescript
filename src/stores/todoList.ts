import { defineStore } from 'pinia';

export const todoListStore = defineStore('todoList', {
    state: () => ({
        todo: [
            { title: 'action overlay 움직이는 아이콘 깨지는 현상 - svg animation 으로 수정', link: '/SampleOverlayAction', isDo: true },
            { title: 'console, demo 스타일 맞추기 위한 Token 정리', link: '/ThemeSetting', isDo: false },            
            { title: 'screen, conponent(form) - float, grid 배치 샘플', link: '/SampleBlockGrid', isDo: false },            
            { title: '컨틀롤 추가(title, divider)', link: '/AppSetting', isDo: false },
            { title: 'Attribute', link: '/AppSetting', isDo: false },
            { title: '추가기능', link: '/AppSetting', isDo: false },            
        ],
        name: 'Todo List'
    })
})