<script setup>
import setting from '@/index'

const Title = setting.title
console.log(Title)
</script>

<template>
  <div class="ev-screen default">TEST</div>
  <div>{{ Title }}</div>
</template>