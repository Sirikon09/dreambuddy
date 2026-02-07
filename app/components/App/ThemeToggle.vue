<script setup lang="ts">
// สร้างตัวแปรและฟังก์ชันสำหรับการสลับธีม (ธีมมืด/สว่าง)
// useColorMode มาจาก Nuxt UI เพื่อจัดการโหมดสีของแอป
const colorMode = useColorMode()

// คอมพิวเต็ดพร็อพเพอร์ตี้เพื่อตรวจสอบและตั้งค่าธีมปัจจุบัน
const isDark = computed({
  // กำหนด getter และ setter สำหรับ isDark
  get() {
    return colorMode.value === 'dark'
  },
  set(value) {
    colorMode.preference = value ? 'dark' : 'light'
  }
})


// ฟังก์ชันสำหรับสลับธีม
const toggleTheme = () => {
  isDark.value = !isDark.value
}
</script>

<template>
    <button 
    @click="toggleTheme"
    class="relative w-10 h-10 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-all duration-300 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 group cursor-pointer"
    :title="isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'"
    aria-label="Toggle theme"
  >
    <!-- Sun Icon (Light Mode) -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 rotate-90 scale-50"
      enter-to-class="opacity-100 rotate-0 scale-100"
      leave-active-class="transition-all duration-300 ease-in"
      leave-from-class="opacity-100 rotate-0 scale-100"
      leave-to-class="opacity-0 -rotate-90 scale-50"
    >
      <Icon 
        v-if="!isDark"
        name="i-heroicons-sun" 
        class="absolute w-5 h-5 text-yellow-600 dark:text-yellow-500 group-hover:text-yellow-700 dark:group-hover:text-yellow-400"
      />
    </Transition>
    
    <!-- Moon Icon (Dark Mode) -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 -rotate-90 scale-50"
      enter-to-class="opacity-100 rotate-0 scale-100"
      leave-active-class="transition-all duration-300 ease-in"
      leave-from-class="opacity-100 rotate-0 scale-100"
      leave-to-class="opacity-0 rotate-90 scale-50"
    >
      <Icon 
        v-if="isDark"
        name="i-heroicons-moon" 
        class="absolute w-5 h-5 text-blue-500 dark:text-blue-400 group-hover:text-blue-600 dark:group-hover:text-blue-300"
      />
    </Transition>
  </button>
</template>

<style scoped>
/* Smooth hover effects */
button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

button:active {
  transform: translateY(0);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Icon glow effect on hover */
button:hover .absolute {
  filter: drop-shadow(0 0 8px currentColor);
}
</style>