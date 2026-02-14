<script setup lang="ts">
const { $t } = useI18n()

const benefits = computed(() => [
  $t('cta.benefits.free'),
  $t('cta.benefits.unlimited'),
  $t('cta.benefits.tracking'),
  $t('cta.benefits.community')
])
</script>

<template>
  <section class="py-20 sm:py-32 bg-linear-to-br from-primary-600 via-blue-600 to-primary-700 relative overflow-hidden">
    <!-- Background decoration -->
    <div class="absolute inset-0 -z-10">
      <div class="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 left-0 w-96 h-96 bg-purple-300/10 rounded-full blur-3xl"></div>
    </div>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="max-w-4xl mx-auto">
        <!-- Main Content -->
        <div class="text-center mb-12">
          <!-- Icon -->
          <div class="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm mb-6">
            <Icon name="i-heroicons-sparkles" class="w-10 h-10 text-white" />
          </div>

          <!-- Headline -->
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
            {{ $t('cta.title') }}
            <span class="block">{{ $t('cta.titleLine2') }}</span>
          </h2>

          <p class="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            {{ $t('cta.subtitle') }}
          </p>

          <!-- Benefits List -->
          <div class="grid sm:grid-cols-2 gap-4 mb-10 max-w-2xl mx-auto">
            <div 
              v-for="(benefit, index) in benefits" 
              :key="index"
              class="flex items-center space-x-3 text-left bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3"
            >
              <Icon name="i-heroicons-check-circle-solid" class="w-6 h-6 text-success-300 shrink-0" />
              <span class="text-white font-medium">{{ benefit }}</span>
            </div>
          </div>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <UButton 
              size="xl" 
              color="primary" 
              class="shadow-lg shadow-primary-500/50 px-4 cursor-pointer"
            >
              <Icon name="i-heroicons-rocket-launch" class="w-5 h-5" />
              {{ $t('cta.buttons.start') }}
            </UButton>
            <UButton 
              size="xl" 
              variant="outline"
              color="neutral"
              class="px-4 cursor-pointer"
            >
              <Icon name="i-heroicons-play-circle" class="w-5 h-5" />
              {{ $t('cta.buttons.demo') }}
            </UButton>
          </div>

          <!-- Social Proof -->
          <div class="mt-10 pt-10 border-t border-white/20">
            <div class="flex flex-col sm:flex-row items-center justify-center gap-8">
              <div class="flex items-center space-x-2">
                <div class="flex -space-x-2">
                  <div class="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-lg border-2 border-white/50">👨</div>
                  <div class="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-lg border-2 border-white/50">👩</div>
                  <div class="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-lg border-2 border-white/50">🧑</div>
                  <div class="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-lg border-2 border-white/50">👧</div>
                </div>
                <div class="text-left">
                  <div class="text-white font-semibold">10,000+ {{ $t('cta.social.users') }}</div>
                  <div class="text-white/80 text-sm">{{ $t('cta.social.subtitle') }}</div>
                </div>
              </div>

              <div class="flex items-center space-x-2">
                <div class="flex">
                  <Icon name="i-heroicons-star-solid" class="w-5 h-5 text-warning-300" />
                  <Icon name="i-heroicons-star-solid" class="w-5 h-5 text-warning-300" />
                  <Icon name="i-heroicons-star-solid" class="w-5 h-5 text-warning-300" />
                  <Icon name="i-heroicons-star-solid" class="w-5 h-5 text-warning-300" />
                  <Icon name="i-heroicons-star-solid" class="w-5 h-5 text-warning-300" />
                </div>
                <div class="text-left">
                  <div class="text-white font-semibold">4.9/5 {{ $t('cta.social.rating') }}</div>
                  <div class="text-white/80 text-sm">{{ $t('cta.social.ratingSubtitle') }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>