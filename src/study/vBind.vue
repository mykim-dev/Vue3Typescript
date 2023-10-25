<script lang="ts" setup>
import { reactive } from 'vue'

const tmpData = reactive({
    page: 'page1',
    pages: ['page1', 'page2', 'page3', 'page4']
})

const TabChange = (current) => {
    console.log(current);
    tmpData.page = current
}
</script>

<template>
    <button v-for="p in tmpData.pages" :class="{ 'active': tmpData.page === p }" @click="TabChange(p)">
        {{ p }}
    </button>
    <div v-for="c in tmpData.pages" v-if="tmpData.page === c">
        <div>{{ c }} contents</div>
    </div>
    <!-- <code>
                        부모 -> 자식 = props 이용
                        부모 :nameofChild="name" -> 자식 = props: ['nameofChild']

                        props: ['nameofChild']
                        props: {
                            nameofChild: String
                        }

                        props: {
                            nameofChild: {
                                type: String,
                                required: true,
                                default: 'Lego'
                            }
                        }


                        부모 -> 자식 = emit 이용


                        자식 -> 부모
                        자식 - this.$emit('child', 전달할 값)
                        부모 - @child="parents"



                        형제 -> 형제
                        eventBus.on

                        컴포넌트에서 공통적으로 사용하는함수 모아놓는것 mixin
                        </code> -->
</template>

<style lang="scss" scoped>
button.active {
    background: red;
}
</style>