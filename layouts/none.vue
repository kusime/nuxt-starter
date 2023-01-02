<template>
  <div
    :theme="theme.currentTheme"
    class="flex min-h-screen justify-center items-center bg-base-100"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
const theme = useStateTheme()
</script>
