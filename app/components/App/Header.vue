<script setup lang="ts">

// ตัวแปรสำหรับลิงก์การนำทาง
const navLinks = [
  { name: 'Features', href: '#features' },
  { name: 'How it works', href: '#how-it-works' },
  { name: 'Community', href: '#community' },
  { name: 'Testimonials', href: '#testimonials' },
]

// ฟังก์ชันสำหรับเลื่อนหน้าไปยังส่วนที่ต้องการอย่างนุ่มนวล
const scrollToSection = (e: Event, href: string) => {
  e.preventDefault()
  const targetId = href.substring(1) // Remove '#'
  const targetElement = document.getElementById(targetId)
  
  if (targetElement) {
    const headerOffset = 80 // Height of sticky header + some padding
    const elementPosition = targetElement.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
}

// ฟังก์ชันสำหรับเลื่อนหน้าไปยังด้านบนเมื่อคลิกโลโก้
const scrollToTop = (e: Event) => {
  e.preventDefault()
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
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
        >
          <Icon name="i-heroicons-sparkles" class="w-8 h-8 text-primary" />
          <span class="text-xl font-bold bg-linear-to-r from-primary-500 to-blue-600 bg-clip-text text-transparent">
            DreamBuddy
          </span>
        </a>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <a 
            v-for="link in navLinks" 
            :key="link.name"
            :href="link.href"
            @click="scrollToSection($event, link.href)"
            class="text-gray-600 dark:text-gray-300 hover:text-primary-500 transition-colors cursor-pointer"
          >
            {{ link.name }}
          </a>
        </div>

        <!-- CTA Buttons -->
        <div class="flex items-center space-x-4">
          
          <!-- Theme Toggle -->
          <AppThemeToggle />
          
          <UButton variant="ghost" size="md" class="hidden sm:inline-flex cursor-pointer">
            Sign In
          </UButton>
          <UButton size="md" color="primary" class="cursor-pointer">
            Start Free
          </UButton>
        </div>
      </nav>
    </div>
  </header>
</template>

<style scoped>
</style>