<script lang="ts" setup>
const test = () => {
  console.log('test')
}
</script>

<template>
  <div class="ev-toolbar">
    <h4 class="ev-toolbar__title">Toolbar</h4>
    <div class="ev-toolbar__wrap">
      <div class="ev-button">
        <el-button @click.prevent="test">조회</el-button>
      </div>
    </div>
  </div>
</template>
