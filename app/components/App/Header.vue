<script setup lang="ts">

// สำหรับการแปลภาษา
const { $t, $localePath } = useI18n()

// ตัวแปร state สำหรับ mobile menu
const isMobileMenuOpen = ref(false)

// ตัวแปรลิงก์การนำทาง
const navLinks = computed(() => [
  { name: $t('nav.features'), href: '#features' },
  { name: $t('nav.howItWorks'), href: '#how-it-works' },
  { name: $t('nav.community'), href: '#community' },
  { name: $t('nav.testimonials'), href: '#testimonials' },
])

// สำหรับการเลื่อนหน้าแบบนุ่มนวลพร้อมการชดเชยสำหรับส่วนหัวที่ติดอยู่
const scrollToSection = (e: Event, href: string) => {
  e.preventDefault()
  const targetId = href.substring(1) // Remove '#'
  const targetElement = document.getElementById(targetId)
  
  if (targetElement) {
    const headerOffset = 65 // Height of sticky header + some padding
    const elementPosition = targetElement.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
  
  // ปิด mobile menu หลังจากคลิก
  isMobileMenuOpen.value = false
}

// สำหรับการเลื่อนขึ้นบนสุดเมื่อคลิกโลโก้
const scrollToTop = (e: Event) => {
  e.preventDefault()
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

// ฟังก์ชัน toggle mobile menu
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}
</script>

<template>
  <header class="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-950/80 backdrop-blur-lg">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <nav class="flex items-center justify-between h-16">
        <!-- Logo -->
        <a 
          href="#" 
          @click="scrollToTop"
          class="flex items-center space-x-2 cursor-pointer"
          aria-label="DreamBuddy Home"
        >
          <Icon name="i-heroicons-sparkles" class="w-8 h-8 text-primary" />
          <span class="text-xl font-bold bg-linear-to-r from-primary-500 to-blue-600 bg-clip-text text-transparent">
            DreamBuddy
          </span>
        </a>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <a 
            v-for="(link, index) in navLinks" 
            :key="index"
            :href="link.href"
            @click="scrollToSection($event, link.href)"
            class="text-gray-600 dark:text-gray-300 hover:text-primary-500 transition-colors cursor-pointer"
          >
            {{ link.name }}
          </a>
        </div>

        <!-- Desktop CTA Buttons -->
        <div class="hidden md:flex items-center space-x-4">
          <!-- Language Switcher -->
          <AppLanguageSwitcher />
          
          <!-- Theme Toggle -->
          <AppThemeToggle />
          
          <UButton variant="ghost" size="md" class="cursor-pointer" @click="$router.push($localePath('/auth/login'))">
            {{ $t('nav.signIn') }}
          </UButton>
          <UButton size="md" color="primary" class="cursor-pointer" @click="$router.push($localePath('/auth/register'))">
            {{ $t('nav.startFree') }}
          </UButton>
        </div>

        <!-- Mobile Menu Button -->
        <div class="flex md:hidden items-center space-x-2">
          <!-- Language Switcher (Mobile) -->
          <AppLanguageSwitcher />
          
          <!-- Theme Toggle (Mobile) -->
          <AppThemeToggle />
          
          <!-- Hamburger Button -->
          <button
            @click="toggleMobileMenu"
            class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle mobile menu"
            :aria-expanded="isMobileMenuOpen"
          >
            <Icon 
              :name="isMobileMenuOpen ? 'i-heroicons-x-mark' : 'i-heroicons-bars-3'" 
              class="w-6 h-6 text-gray-600 dark:text-gray-300" 
            />
          </button>
        </div>
      </nav>

      <!-- Mobile Menu -->
      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div 
          v-if="isMobileMenuOpen" 
          class="md:hidden py-4 border-t border-gray-200 dark:border-gray-800"
        >
          <!-- Mobile Navigation Links -->
          <div class="flex flex-col space-y-3 mb-4">
            <a 
              v-for="(link, index) in navLinks" 
              :key="index"
              :href="link.href"
              @click="scrollToSection($event, link.href)"
              class="px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-primary-500 hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-lg transition-colors cursor-pointer"
            >
              {{ link.name }}
            </a>
          </div>

          <!-- Mobile CTA Buttons -->
          <div class="flex flex-col space-y-2 px-4">
            <UButton variant="ghost" size="md" block class="cursor-pointer" @click="$router.push($localePath('/auth/login')); isMobileMenuOpen = false">
              {{ $t('nav.signIn') }}
            </UButton>
            <UButton size="md" color="primary" block class="cursor-pointer" @click="$router.push($localePath('/auth/register')); isMobileMenuOpen = false">
              {{ $t('nav.startFree') }}
            </UButton>
          </div>
        </div>
      </Transition>
    </div>
  </header>
</template>

<style scoped>
</style>