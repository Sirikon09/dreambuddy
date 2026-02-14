<script setup lang="ts">
const { $t } = useI18n()

const communityGoals = [
  {
    id: 1,
    title: 'Dream House',
    author: 'Sarah Johnson',
    avatar: '👩',
    icon: 'i-heroicons-home',
    iconColor: 'primary',
    progress: 65,
    saved: 65000,
    target: 100000,
    likes: 234
  },
  {
    id: 2,
    title: 'World Travel',
    author: 'Mike Chen',
    avatar: '👨',
    icon: 'i-heroicons-globe-alt',
    iconColor: 'success',
    progress: 42,
    saved: 8400,
    target: 20000,
    likes: 189
  },
  {
    id: 3,
    title: 'New Car',
    author: 'Emma Davis',
    avatar: '👧',
    icon: 'i-heroicons-truck',
    iconColor: 'warning',
    progress: 78,
    saved: 31200,
    target: 40000,
    likes: 156
  },
  {
    id: 4,
    title: 'Wedding',
    author: 'Alex Brown',
    avatar: '🧑',
    icon: 'i-heroicons-heart',
    iconColor: 'error',
    progress: 55,
    saved: 16500,
    target: 30000,
    likes: 312
  },
  {
    id: 5,
    title: 'Education Fund',
    author: 'Lisa Wang',
    avatar: '👩‍🎓',
    icon: 'i-heroicons-academic-cap',
    iconColor: 'primary',
    progress: 88,
    saved: 44000,
    target: 50000,
    likes: 267
  },
  {
    id: 6,
    title: 'Emergency Fund',
    author: 'Tom Wilson',
    avatar: '👨‍💼',
    icon: 'i-heroicons-shield-check',
    iconColor: 'success',
    progress: 92,
    saved: 9200,
    target: 10000,
    likes: 445
  },
  {
    id: 7,
    title: 'Business Startup',
    author: 'Nina Patel',
    avatar: '👩‍💻',
    icon: 'i-heroicons-building-office',
    iconColor: 'warning',
    progress: 35,
    saved: 17500,
    target: 50000,
    likes: 198
  },
  {
    id: 8,
    title: 'Dream Vacation',
    author: 'Chris Lee',
    avatar: '🧑',
    icon: 'i-heroicons-paper-airplane',
    iconColor: 'error',
    progress: 70,
    saved: 7000,
    target: 10000,
    likes: 223
  }
]

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-TH', {
    style: 'currency',
    currency: 'THB',
    minimumFractionDigits: 0
  }).format(amount)
}
</script>

<template>
  <section id="community" class="py-20 sm:py-32 bg-gray-50 dark:bg-gray-900">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <UBadge color="primary" variant="subtle" size="lg" class="mb-4">
          {{ $t('community.badge') }}
        </UBadge>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
          {{ $t('community.title') }}
          <span class="block bg-linear-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
            {{ $t('community.titleHighlight') }}
          </span>
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-300">
          {{ $t('community.subtitle') }}
        </p>
      </div>

      <!-- Goals Grid -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <div 
          v-for="goal in communityGoals" 
          :key="goal.id"
          class="group"
        >
          <UCard class="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <!-- Header -->
            <div class="flex items-center justify-between mb-4">
              <div class="flex items-center space-x-2">
                <div class="text-2xl">{{ goal.avatar }}</div>
                <div class="text-xs text-gray-500 dark:text-gray-400">
                  @{{ goal.author.toLowerCase().replace(' ', '') }}
                </div>
              </div>
              <div 
                class="w-10 h-10 rounded-lg flex items-center justify-center"
                :class="{
                  'bg-primary-100 dark:bg-primary-900/30': goal.iconColor === 'primary',
                  'bg-success-100 dark:bg-success-900/30': goal.iconColor === 'success',
                  'bg-warning-100 dark:bg-warning-900/30': goal.iconColor === 'warning',
                  'bg-error-100 dark:bg-error-900/30': goal.iconColor === 'error',
                }"
              >
                <Icon 
                  :name="goal.icon" 
                  class="w-5 h-5"
                  :class="{
                    'text-primary-600': goal.iconColor === 'primary',
                    'text-success-600': goal.iconColor === 'success',
                    'text-warning-600': goal.iconColor === 'warning',
                    'text-error-600': goal.iconColor === 'error',
                  }"
                />
              </div>
            </div>

            <!-- Title -->
            <h3 class="font-semibold text-gray-900 dark:text-white mb-3">
              {{ goal.title }}
            </h3>

            <!-- Progress -->
            <div class="mb-3">
              <div class="flex justify-between text-xs mb-1">
                <span class="text-gray-600 dark:text-gray-400">{{ $t('community.progress') }}</span>
                <span class="font-semibold text-primary-600 dark:text-primary-400">
                  {{ goal.progress }}%
                </span>
              </div>
              <UProgress v-model="goal.progress" size="sm" :aria-label="`${goal.title} progress: ${goal.progress}%`" />
            </div>

            <!-- Amount -->
            <div class="flex justify-between text-sm mb-4">
              <div>
                <div class="text-xs text-gray-500 dark:text-gray-400">{{ $t('community.saved') }}</div>
                <div class="font-bold text-gray-900 dark:text-white">
                  {{ formatCurrency(goal.saved) }}
                </div>
              </div>
              <div class="text-right">
                <div class="text-xs text-gray-500 dark:text-gray-400">{{ $t('community.goal') }}</div>
                <div class="font-bold text-gray-900 dark:text-white">
                  {{ formatCurrency(goal.target) }}
                </div>
              </div>
            </div>

            <!-- Likes -->
            <div class="flex items-center text-sm text-gray-500 dark:text-gray-400">
              <Icon name="i-heroicons-heart-solid" class="w-4 h-4 text-error-500 mr-1" />
              <span>{{ goal.likes }} {{ $t('community.likes') }}</span>
            </div>
          </UCard>
        </div>
      </div>

      <!-- CTA -->
      <div class="text-center">
        <UButton size="lg" variant="outline" class="cursor-pointer px-4">
          {{ $t('community.exploreAll') }}
          <Icon name="i-heroicons-arrow-right" class="w-5 h-5 ml-2" />
        </UButton>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>