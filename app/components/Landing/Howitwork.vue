<script setup lang="ts">
const steps = [
  {
    number: '01',
    title: 'Set Your Goal',
    description: 'Create a savings goal with your target amount and deadline. Add a name and choose to make it public or private.',
    icon: 'i-heroicons-flag',
    color: 'secondary'
  },
  {
    number: '02',
    title: 'Track Your Progress',
    description: 'Log your savings regularly. Our system automatically calculates how much you need to save daily to reach your target.',
    icon: 'i-heroicons-chart-bar-square',
    color: 'success'
  },
  {
    number: '03',
    title: 'Share or Keep Private',
    description: 'Choose to share your goals publicly to inspire others, or keep them private for personal tracking for some people only.',
    icon: 'i-heroicons-users',
    color: 'warning'
  },
  {
    number: '04',
    title: 'Celebrate Success',
    description: 'When you reach your goal, celebrate your achievement! Get badges and share your success with the large community.',
    icon: 'i-heroicons-trophy',
    color: 'error'
  }
]
</script>

<template>
    <section id="how-it-works" class="py-20 sm:py-32 bg-white dark:bg-gray-950 relative overflow-hidden">
    <!-- Background decoration -->
    <div class="absolute inset-0 -z-10">
      <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-100/30 dark:bg-primary-900/10 rounded-full blur-3xl"></div>
      <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-100/30 dark:bg-purple-900/10 rounded-full blur-3xl"></div>
    </div>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <UBadge color="primary" variant="subtle" size="lg" class="mb-4">
          How It Works
        </UBadge>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
          Simple Steps to
          <span class="block bg-linear-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
            Reach Your Dreams
          </span>
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-300">
          Start saving smarter in just 4 easy steps.
        </p>
      </div>

      <!-- Steps -->
      <div class="relative max-w-6xl mx-auto">
        <!-- Connection Line (Desktop) -->
        <div class="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-linear-to-r from-primary-200 via-purple-200 to-primary-200 dark:from-primary-900 dark:via-purple-900 dark:to-primary-900 -translate-y-1/2"></div>

        <!-- Steps Grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          <div 
            v-for="(step, index) in steps" 
            :key="index"
            class="relative"
          >
            <div class="relative z-10">
              <!-- Number Badge -->
              <div class="flex justify-center mb-6">
                <div 
                  class="relative w-20 h-20 rounded-full flex items-center justify-center font-bold text-xl shadow-lg"
                  :class="{
                    'bg-secondary-500 text-white': step.color === 'secondary',
                    'bg-success-500 text-white': step.color === 'success',
                    'bg-warning-500 text-white': step.color === 'warning',
                    'bg-error-500 text-white': step.color === 'error',
                  }"
                >
                  {{ step.number }}
                </div>
              </div>

              <!-- Content Card -->
              <UCard class="text-center h-full">
                <div class="space-y-4">
                  <!-- Icon -->
                  <div class="flex justify-center">
                    <div 
                      class="w-14 h-14 rounded-xl flex items-center justify-center"
                      :class="{
                        'bg-secondary-100 dark:bg-secondary-900/30': step.color === 'secondary',
                        'bg-success-100 dark:bg-success-900/30': step.color === 'success',
                        'bg-warning-100 dark:bg-warning-900/30': step.color === 'warning',
                        'bg-error-100 dark:bg-error-900/30': step.color === 'error',
                      }"
                    >
                      <Icon 
                        :name="step.icon" 
                        class="w-7 h-7"
                        :class="{
                          'text-secondary-600 dark:text-secondary-400': step.color === 'secondary',
                          'text-success-600 dark:text-success-400': step.color === 'success',
                          'text-warning-600 dark:text-warning-400': step.color === 'warning',
                          'text-error-600 dark:text-error-400': step.color === 'error',
                        }"
                      />
                    </div>
                  </div>

                  <!-- Title & Description -->
                  <div>
                    <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {{ step.title }}
                    </h3>
                    <p class="text-gray-600 dark:text-gray-400">
                      {{ step.description }}
                    </p>
                  </div>
                </div>
              </UCard>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom CTA -->
      <div class="text-center mt-16">
        <p class="text-gray-600 dark:text-gray-300 mb-6">
          Ready to start your journey?
        </p>
        <UButton size="xl" color="primary" class="shadow-lg shadow-primary-500/50 px-4 cursor-pointer">
          <Icon name="i-heroicons-rocket-launch" class="w-5 h-5" />
          Create Your First Goal
        </UButton>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>