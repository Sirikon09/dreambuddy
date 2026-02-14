<script setup lang="ts">

// สำหรับการแปลภาษา
const { $getLocale, $switchLocale } = useI18n()

// ตัวแปรภาษาที่รองรับ
const languages = [
  { code: 'en', name: 'English', shortCode: 'US' },
  { code: 'th', name: 'ไทย', shortCode: 'TH' },
  { code: 'jp', name: '日本語', shortCode: 'JP' },
  { code: 'la', name: 'ລາວ', shortCode: 'LA' }
]

// ตัวแปรสถานะเปิด/ปิดเมนูภาษา
const isOpen = ref(false)

// ตัวแปรภาษาปัจจุบัน
const currentLocale = computed(() => $getLocale())

// ตัวแปรภาษาปัจจุบัน
const currentLanguage = computed(() => 
  languages.find(lang => lang.code === currentLocale.value) || languages[0]
)

// ฟังก์ชันเปลี่ยนภาษา
const handleChangeLanguage = (langCode: string) => {
  $switchLocale(langCode)
  // บันทึกลง localStorage
  if (import.meta.client) {
    localStorage.setItem('dreambuddy-locale', langCode)
  }
  isOpen.value = false
}
</script>

<template>
  <UPopover v-model:open="isOpen">
    <UButton
      color="neutral"
      variant="ghost"
      size="md"
      class="cursor-pointer"
    >
      <span class="font-medium">{{ currentLanguage?.shortCode }}</span>
      <span class="ml-2 hidden sm:inline">{{ currentLanguage?.name }}</span>
      <Icon name="i-heroicons-chevron-down" class="w-4 h-4 ml-1" />
    </UButton>

    <template #content>
      <div class="w-48 p-1">
        <button
          v-for="lang in languages"
          :key="lang.code"
          @click="handleChangeLanguage(lang.code)"
          class="w-full flex items-center space-x-3 px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors rounded-lg"
          :class="{ 'bg-primary-50 dark:bg-primary-950': lang.code === currentLocale }"
        >
          <span class="font-semibold text-gray-600 dark:text-gray-400">{{ lang.shortCode }}</span>
          <span class="font-medium">{{ lang.name }}</span>
          <Icon 
            v-if="lang.code === currentLocale"
            name="i-heroicons-check" 
            class="w-4 h-4 ml-auto text-primary-500" 
          />
        </button>
      </div>
    </template>
  </UPopover>
</template>

<style scoped>
</style>