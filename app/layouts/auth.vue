<script setup lang="ts">
const { $t, $localePath } = useI18n()
</script>

<template>
  <div class="min-h-screen flex">
    <!-- Left Column - Background Image & Content -->
    <div class="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-linear-to-br from-primary-600 via-primary-700 to-purple-700">
      <!-- Decorative Background -->
      <div class="absolute inset-0">
        <div class="absolute top-0 left-0 w-96 h-96 bg-primary-400/30 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"></div>
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <!-- Grid Pattern -->
          <div class="absolute inset-0 opacity-10">
            <div class="grid grid-cols-8 gap-4 h-full">
              <div v-for="i in 64" :key="i" class="border border-white/20"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Content -->
      <div class="relative z-10 flex flex-col justify-between p-12 text-white w-full">
        <!-- Logo -->
        <div class="flex items-center space-x-2">
          <Icon name="i-heroicons-sparkles" class="w-10 h-10" />
          <span class="text-2xl font-bold">DreamBuddy</span>
        </div>

        <!-- Main Content -->
        <div class="space-y-6 max-w-md">
          <h1 class="text-4xl sm:text-5xl font-bold leading-tight">
            {{ $t('auth.leftPanel.title') }}
          </h1>
          <p class="text-lg text-primary-100">
            {{ $t('auth.leftPanel.subtitle') }}
          </p>
          
          <!-- Stats -->
          <div class="grid grid-cols-3 gap-6 pt-8">
            <div>
              <div class="text-3xl font-bold">10K+</div>
              <div class="text-sm text-primary-200">{{ $t('auth.leftPanel.stats.users') }}</div>
            </div>
            <div>
              <div class="text-3xl font-bold">50K+</div>
              <div class="text-sm text-primary-200">{{ $t('auth.leftPanel.stats.goals') }}</div>
            </div>
            <div>
              <div class="text-3xl font-bold">₿1M+</div>
              <div class="text-sm text-primary-200">{{ $t('auth.leftPanel.stats.saved') }}</div>
            </div>
          </div>
        </div>

        <!-- Footer Quote -->
        <div class="space-y-4">
          <blockquote class="text-lg italic text-primary-100">
            "{{ $t('auth.leftPanel.quote') }}"
          </blockquote>
          <div class="flex items-center space-x-3">
            <div class="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
              <Icon name="i-heroicons-user-circle" class="w-8 h-8" />
            </div>
            <div>
              <div class="font-semibold">Sarah Johnson</div>
              <div class="text-sm text-primary-200">{{ $t('auth.leftPanel.quoteAuthor') }}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Floating Illustration Elements -->
      <div class="absolute top-1/4 right-12 w-16 h-16 bg-yellow-400/20 rounded-full animate-pulse"></div>
      <div class="absolute bottom-1/4 right-24 w-24 h-24 bg-white/10 rounded-full animate-pulse" style="animation-delay: 1s;"></div>
    </div>

    <!-- Right Column - Form -->
    <div class="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 bg-white dark:bg-gray-950">
      <div class="w-full max-w-md">
        <!-- Desktop - Back to Home + Language & Theme Switcher -->
        <div class="hidden lg:flex items-center justify-between mb-8">
          <NuxtLink
            :to="$localePath('/')"
            class="inline-flex items-center text-sm font-medium text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
          >
            <Icon name="i-heroicons-arrow-left" class="w-4 h-4 mr-2" />
            {{ $t('auth.backToHome') }}
          </NuxtLink>
          
          <div class="flex items-center space-x-4">
            <AppLanguageSwitcher />
            <AppThemeToggle />
          </div>
        </div>

        <!-- Mobile Logo -->
        <div class="lg:hidden flex items-center justify-center space-x-2 mb-8">
          <Icon name="i-heroicons-sparkles" class="w-8 h-8 text-primary-600" />
          <span class="text-2xl font-bold bg-linear-to-r from-primary-500 to-purple-600 bg-clip-text text-transparent">
            DreamBuddy
          </span>
        </div>

        <!-- Back to Homepage Button (Mobile) -->
        <div class="lg:hidden flex items-center justify-center mb-4">
          <NuxtLink
            :to="$localePath('/')"
            class="inline-flex items-center text-sm font-medium text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
          >
            <Icon name="i-heroicons-arrow-left" class="w-4 h-4 mr-2" />
            {{ $t('auth.backToHome') }}
          </NuxtLink>
        </div>

        <!-- Language & Theme Switcher for Mobile -->
        <div class="lg:hidden flex items-center justify-center space-x-4 mb-8">
          <AppLanguageSwitcher />
          <AppThemeToggle />
        </div>

        <!-- Form Content (Slot) -->
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>