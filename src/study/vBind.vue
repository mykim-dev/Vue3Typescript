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
</template>

<style lang="scss" scoped>
button.active {
    background: red;
}
</style>