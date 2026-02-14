<script setup lang="ts">
const { $switchLocale, $getLocale } = useI18n()

// โหลดภาษาจาก localStorage เมื่อแอพเริ่มต้น
onMounted(() => {
  if (import.meta.client) {
    const savedLocale = localStorage.getItem('dreambuddy-locale')
    if (savedLocale && savedLocale !== $getLocale()) {
      $switchLocale(savedLocale)
    }
  }
})
</script>

<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>