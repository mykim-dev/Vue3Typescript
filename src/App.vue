<script lang="ts" setup>
import evLayoutAdmin from '@/layout/evLayoutAdmin.vue'
import evLayoutDefault from '@/layout/evLayoutDefault.vue'
</script>

<template>
  <evLayoutAdmin v-if="$route.meta.layout === 'LayoutAdmin'" />
  <evLayoutDefault v-else />
</template>
<style lang="scss" scoped></style>
