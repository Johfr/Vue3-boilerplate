<script setup lang="ts">
defineProps<{btnTitle: string}>()
</script>

<template>
  <button @click.prevent>
    {{btnTitle}}
  </button>
</template>

<style lang="scss">

</style>