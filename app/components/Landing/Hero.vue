<script setup lang="ts">
const { $t } = useI18n()

const stats = computed(() => [
  { value: '10,000+', label: $t('hero.stats.activeUsers') },
  { value: '50,000+', label: $t('hero.stats.goalsCreated') },
  { value: '₿1M+', label: $t('hero.stats.savingsAchieved') },
])

const progress = ref(65)

</script>

<template>
  <section class="relative overflow-hidden bg-linear-to-b from-primary-50 to-white dark:from-gray-900 dark:to-gray-950 py-20 sm:py-32">
    <!-- Background decoration -->
    <div class="absolute inset-0 -z-10">
      <div class="absolute top-0 right-0 w-96 h-96 bg-primary-200/30 dark:bg-primary-900/20 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 left-0 w-96 h-96 bg-purple-200/30 dark:bg-purple-900/20 rounded-full blur-3xl"></div>
    </div>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Left Column - Content -->
        <div class="text-center lg:text-left space-y-8">
          <!-- Badge -->
          <div class="inline-flex items-center space-x-2 px-4 py-2 bg-primary-100 dark:bg-primary-900/30 rounded-full">
            <Icon name="i-heroicons-sparkles" class="w-4 h-4 text-primary-600 dark:text-primary-400" />
            <span class="text-sm font-medium text-primary-700 dark:text-primary-300">
              {{ $t('hero.badge') }}
            </span>
          </div>

          <!-- Headline -->
          <div class="space-y-4">
            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-gray-900 dark:text-white">
              {{ $t('hero.title') }}
              <span class="block bg-linear-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
                {{ $t('hero.titleHighlight') }}
              </span>
            </h1>
            <p class="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0">
              {{ $t('hero.subtitle') }}
            </p>
          </div>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <UButton size="xl" color="primary" class="px-4 cursor-pointer">
              <Icon name="i-heroicons-rocket-launch" class="w-5 h-5" />
              {{ $t('hero.startFree') }}
            </UButton>
            <UButton size="xl" variant="outline" color="neutral" class="px-4 cursor-pointer">
              <Icon name="i-heroicons-play-circle" class="w-5 h-5" />
              {{ $t('hero.seeDemo') }}
            </UButton>
          </div>

          <!-- Stats -->
          <div class="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200 dark:border-gray-800">
            <div v-for="(stat, index) in stats" :key="index" class="text-center lg:text-left">
              <div class="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                {{ stat.value }}
              </div>
              <div class="text-sm text-gray-600 dark:text-gray-400">
                {{ stat.label }}
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column - Mockup -->
        <div class="relative">
          <!-- Goal Card Mockup -->
          <div class="relative z-10 mx-auto max-w-md lg:max-w-lg">
            <UCard class="shadow-2xl">
              <template #header>
                <div class="flex items-center justify-between">
                  <div class="flex items-center space-x-3">
                    <div class="w-10 h-10 rounded-full bg-linear-to-br from-primary-500 to-purple-500 flex items-center justify-center">
                      <Icon name="i-heroicons-home" class="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 class="font-semibold text-gray-900 dark:text-white">{{ $t('hero.goalCard.dreamHouse') }}</h3>
                      <p class="text-sm text-gray-500 dark:text-gray-400">{{ $t('hero.goalCard.by') }} @johndoe</p>
                    </div>
                  </div>
                  <UBadge color="primary" variant="subtle">{{ $t('hero.goalCard.public') }}</UBadge>
                </div>
              </template>

              <div class="space-y-4">
                <!-- Progress Bar -->
                <div>
                  <div class="flex justify-between mb-2">
                    <span class="text-sm font-medium text-gray-700 dark:text-gray-300">{{ $t('hero.goalCard.progress') }}</span>
                    <span class="text-sm font-bold text-primary-600 dark:text-primary-400">65%</span>
                  </div>
                  <UProgress v-model="progress" size="md" aria-label="Goal progress: 65%" />
                </div>

                <!-- Amount -->
                <div class="grid grid-cols-2 gap-4">
                  <div>
                    <p class="text-xs text-gray-500 dark:text-gray-400">{{ $t('hero.goalCard.saved') }}</p>
                    <p class="text-lg font-bold text-gray-900 dark:text-white">$65,000</p>
                  </div>
                  <div>
                    <p class="text-xs text-gray-500 dark:text-gray-400">{{ $t('hero.goalCard.goal') }}</p>
                    <p class="text-lg font-bold text-gray-900 dark:text-white">$100,000</p>
                  </div>
                </div>

                <!-- Daily Savings -->
                <div class="p-3 bg-primary-50 dark:bg-primary-900/20 rounded-lg">
                  <div class="flex items-center justify-between">
                    <span class="text-sm text-gray-600 dark:text-gray-300">{{ $t('hero.goalCard.dailyTarget') }}</span>
                    <span class="text-sm font-semibold text-primary-700 dark:text-primary-300">$95.89/day</span>
                  </div>
                </div>

                <!-- Actions -->
                <div class="flex gap-2">
                  <UButton block variant="soft" class="cursor-pointer px-4 py-2" aria-label="Add savings to goal">
                    <Icon name="i-heroicons-plus" class="w-4 h-4 mr-1" />
                    {{ $t('hero.goalCard.addSavings') }}
                  </UButton>
                  <UButton color="neutral" variant="outline" square class="cursor-pointer px-4 py-2" aria-label="Like this goal">
                    <Icon name="i-heroicons-heart" class="w-4 h-4" />
                  </UButton>
                </div>
              </div>
            </UCard>
          </div>

          <!-- Floating Elements -->
          <div class="absolute -top-4 -left-4 w-20 h-20 bg-yellow-400 rounded-full opacity-20 blur-xl animate-pulse"></div>
          <div class="absolute -bottom-4 -right-4 w-32 h-32 bg-primary-400 rounded-full opacity-20 blur-xl animate-pulse" style="animation-delay: 1s;"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>