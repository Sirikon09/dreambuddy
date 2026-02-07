<script setup lang="ts">
const features = [
  {
    icon: 'i-heroicons-flag',
    title: 'Unlimited Goals',
    description: 'Create as many savings goals as you want. No limits, no restrictions.',
    color: 'primary'
  },
  {
    icon: 'i-heroicons-calculator',
    title: 'Auto Calculate',
    description: 'Automatically calculate daily, weekly, or monthly savings needed.',
    color: 'success'
  },
  {
    icon: 'i-heroicons-chart-bar',
    title: 'Beautiful Dashboard',
    description: 'Track all your progress with an intuitive and beautiful interface.',
    color: 'warning'
  },
  {
    icon: 'i-heroicons-share',
    title: 'Share Publicly',
    description: 'Inspire others by sharing your goals or keep them private.',
    color: 'error'
  }
]
</script>

<template>
    <section id="features" class="py-20 sm:py-32 bg-white dark:bg-gray-950">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <UBadge color="primary" variant="subtle" size="lg" class="mb-4">
          Features
        </UBadge>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
          Everything You Need to
          <span class="block bg-linear-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
            Achieve Your Goals
          </span>
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-300">
          Powerful features designed to help you save smarter and reach your dreams faster.
        </p>
      </div>

      <!-- Features Grid -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div 
          v-for="(feature, index) in features" 
          :key="index"
          class="relative group"
        >
          <UCard class="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div class="space-y-4">
              <!-- Icon -->
              <div 
                class="w-14 h-14 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                :class="{
                  'bg-primary-100 dark:bg-primary-900/30': feature.color === 'primary',
                  'bg-success-100 dark:bg-success-900/30': feature.color === 'success',
                  'bg-warning-100 dark:bg-warning-900/30': feature.color === 'warning',
                  'bg-error-100 dark:bg-error-900/30': feature.color === 'error',
                }"
              >
                <Icon 
                  :name="feature.icon" 
                  class="w-7 h-7"
                  :class="{
                    'text-primary-600 dark:text-primary-400': feature.color === 'primary',
                    'text-success-600 dark:text-success-400': feature.color === 'success',
                    'text-warning-600 dark:text-warning-400': feature.color === 'warning',
                    'text-error-600 dark:text-error-400': feature.color === 'error',
                  }"
                />
              </div>

              <!-- Content -->
              <div>
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {{ feature.title }}
                </h3>
                <p class="text-gray-600 dark:text-gray-400">
                  {{ feature.description }}
                </p>
              </div>
            </div>
          </UCard>
        </div>
      </div>

      <!-- Additional Info -->
      <div class="mt-16 text-center">
        <UCard class="max-w-4xl mx-auto bg-linear-to-r from-primary-50 to-purple-50 dark:from-primary-950 dark:to-purple-950 border-primary-200 dark:border-primary-800">
          <div class="flex flex-col md:flex-row items-center justify-between gap-6">
            <div class="flex-1 text-left">
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Ready to start saving smarter?
              </h3>
              <p class="text-gray-600 dark:text-gray-300">
                Join thousands of users who are already achieving their financial goals.
              </p>
            </div>
            <UButton size="lg" color="primary" class="whitespace-nowrap px-4 cursor-pointer">
              Get Started Free
              <Icon name="i-heroicons-arrow-right" class="w-5 h-5" />
            </UButton>
          </div>
        </UCard>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>