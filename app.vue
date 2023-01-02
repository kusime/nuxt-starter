<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup lang="ts">
// initialize the theme
onMounted(async () => {
  document.documentElement.dataset.theme =
    useStateTheme().currentTheme === 'system' ? 'light' : 'dark'

  // setting up the scoring behavior
  document.documentElement.classList.add('scroll-smooth')
  setTimeout(async () => {
    // trigger autoUpdate
    console.log('triggering')
    const { data } = await useFetch('/auto_refresh')
    console.log(data)
  }, 1000)
})
</script>
