import { defineStore } from 'pinia';

export const mainTaskList = defineStore('taskList', {
    state: () => ({
        tasks: [
            { id: 1, title: 'toolbar - title, button_wrap', isDo: false },
            { id: 2, title: 'action overlay 움직이는 아이콘 깨지는 현상 - svg animation 으로 수정', isDo: true },
            { id: 3, title: 'console, demo 스타일 맞추기 위한 Token 정리 (범위는 Element Pluse에서 제공되는 정도 + demo asis에 적용되었던 스타일)', isDo: false },
            { id: 4, title: 'screen, conponent(form) - float, grid 배치 샘플', isDo: false },
            { id: 5, title: 'title 컨트롤 (현재 config시 label로 사용하고 있음), blank 컨트롤(다음줄로 이동) 샘플', isDo: false },
            { id: 6, title: '정리된 테마요소를 UI로 변경 할 수 있는지 확인 (setting)', isDo: false },
            { id: 7, title: '설정(logo, banner, progressUI로 변경 할 수 있는지 확인 (setting)', isDo: false },
            { id: 8, title: 'form label 정렬 기능', isDo: false },
            { id: 9, title: 'vertical Layout 샘플', isDo: false },
        ],
        name: 'Todo List'
    })
})