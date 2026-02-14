<script setup lang="ts">
const { $t } = useI18n()

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Entrepreneur',
    avatar: '👩‍💼',
    rating: 5,
    comment: 'DreamBuddy helped me save $50,000 for my business startup in just 18 months! The daily savings calculator kept me on track, and sharing my progress publicly motivated me to stay consistent.',
    goal: 'Business Startup',
    achieved: true
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Software Developer',
    avatar: '👨‍💻',
    rating: 5,
    comment: 'I love how simple and intuitive the app is. I\'ve been tracking 3 different goals simultaneously - emergency fund, vacation, and a new laptop. Already achieved 2 of them and counting for more!',
    goal: 'Emergency Fund + More',
    achieved: true
  },
  {
    id: 3,
    name: 'Emma Davis',
    role: 'Teacher',
    avatar: '👩‍🏫',
    rating: 5,
    comment: 'The community feature is amazing! Seeing others achieve their goals inspired me to start my own. I\'m halfway to my dream car now and feeling more motivated than ever thanks to DreamBuddy.',
    goal: 'Dream Car',
    achieved: false
  }
]
</script>

<template>
  <section id="testimonials" class="py-20 sm:py-32 bg-gray-50 dark:bg-gray-900">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <UBadge color="primary" variant="subtle" size="lg" class="mb-4">
          {{ $t('testimonials.badge') }}
        </UBadge>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
          {{ $t('testimonials.title') }}
          <span class="block bg-linear-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
            {{ $t('testimonials.titleHighlight') }}
          </span>
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-300">
          {{ $t('testimonials.subtitle') }}
        </p>
      </div>

      <!-- Testimonials Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        <div 
          v-for="testimonial in testimonials" 
          :key="testimonial.id"
          class="group"
        >
          <UCard class="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div class="space-y-4">
              <!-- Rating -->
              <div class="flex items-center space-x-1">
                <Icon 
                  v-for="i in testimonial.rating" 
                  :key="i"
                  name="i-heroicons-star-solid" 
                  class="w-5 h-5 text-warning-400"
                />
              </div>

              <!-- Comment -->
              <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
                "{{ testimonial.comment }}"
              </p>

              <!-- Goal Badge -->
              <div class="flex items-center space-x-2">
                <UBadge 
                  :color="testimonial.achieved ? 'success' : 'primary'" 
                  variant="subtle"
                >
                  {{ testimonial.goal }}
                </UBadge>
                <Icon 
                  v-if="testimonial.achieved"
                  name="i-heroicons-check-badge-solid" 
                  class="w-5 h-5 text-success-500"
                />
              </div>

              <!-- Author -->
              <div class="flex items-center space-x-3 pt-4 border-t border-gray-200 dark:border-gray-800">
                <div class="text-3xl">{{ testimonial.avatar }}</div>
                <div>
                  <div class="font-semibold text-gray-900 dark:text-white">
                    {{ testimonial.name }}
                  </div>
                  <div class="text-sm text-gray-500 dark:text-gray-400">
                    {{ testimonial.role }}
                  </div>
                </div>
              </div>
            </div>
          </UCard>
        </div>
      </div>

      <!-- Stats -->
      <div class="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
        <div class="text-center">
          <div class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">
            4.9/5
          </div>
          <div class="text-sm text-gray-600 dark:text-gray-400">
            {{ $t('testimonials.stats.rating') }}
          </div>
        </div>
        <div class="text-center">
          <div class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">
            10,000+
          </div>
          <div class="text-sm text-gray-600 dark:text-gray-400">
            {{ $t('testimonials.stats.users') }}
          </div>
        </div>
        <div class="text-center">
          <div class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">
            85%
          </div>
          <div class="text-sm text-gray-600 dark:text-gray-400">
            {{ $t('testimonials.stats.successRate') }}
          </div>
        </div>
        <div class="text-center">
          <div class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">
            $10M+
          </div>
          <div class="text-sm text-gray-600 dark:text-gray-400">
            {{ $t('testimonials.stats.totalSaved') }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>