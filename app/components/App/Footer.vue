<script setup lang="ts">
const { $t } = useI18n()

const currentYear = new Date().getFullYear()

const footerLinks = computed(() => ({
  product: [
    { name: $t('footer.links.features'), href: '#features' },
    { name: $t('footer.links.howItWorks'), href: '#how-it-works' },
    { name: $t('footer.links.pricing'), href: '#' },
    { name: $t('footer.links.faq'), href: '#' }
  ],
  company: [
    { name: $t('footer.links.about'), href: '#' },
    { name: $t('footer.links.blog'), href: '#' },
    { name: $t('footer.links.careers'), href: '#' },
    { name: $t('footer.links.contact'), href: '#' }
  ],
  legal: [
    { name: $t('footer.links.privacy'), href: '#' },
    { name: $t('footer.links.terms'), href: '#' },
    { name: $t('footer.links.cookies'), href: '#' },
    { name: $t('footer.links.licenses'), href: '#' }
  ],
  social: [
    { name: 'Twitter', icon: 'i-heroicons-link', href: '#' },
    { name: 'Facebook', icon: 'i-heroicons-link', href: '#' },
    { name: 'Instagram', icon: 'i-heroicons-link', href: '#' },
    { name: 'GitHub', icon: 'i-heroicons-link', href: '#' }
  ]
}))
</script>

<template>
  <footer class="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <!-- Main Footer Content -->
      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-8">
        <!-- Brand Column -->
        <div class="col-span-2">
          <div class="flex items-center space-x-2 mb-4">
            <Icon name="i-heroicons-sparkles" class="w-8 h-8 text-primary-500" />
            <span class="text-xl font-bold bg-linear-to-r from-primary-500 to-purple-600 bg-clip-text text-transparent">
              DreamBuddy
            </span>
          </div>
          <p class="text-gray-600 dark:text-gray-400 mb-4 max-w-xs">
            {{ $t('footer.description') }}
          </p>
          <!-- Social Links -->
          <div class="flex space-x-3">
            <a 
              v-for="social in footerLinks.social" 
              :key="social.name"
              :href="social.href"
              class="w-9 h-9 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-primary-500 dark:hover:bg-primary-500 flex items-center justify-center transition-colors group"
              :aria-label="social.name"
            >
              <Icon :name="social.icon" class="w-4 h-4 text-gray-600 dark:text-gray-400 group-hover:text-white" />
            </a>
          </div>
        </div>

        <!-- Product Links -->
        <div>
          <h3 class="font-semibold text-gray-900 dark:text-white mb-4">{{ $t('footer.product') }}</h3>
          <ul class="space-y-3">
            <li v-for="(link, index) in footerLinks.product" :key="index">
              <a 
                :href="link.href"
                class="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
              >
                {{ link.name }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Company Links -->
        <div>
          <h3 class="font-semibold text-gray-900 dark:text-white mb-4">{{ $t('footer.company') }}</h3>
          <ul class="space-y-3">
            <li v-for="(link, index) in footerLinks.company" :key="index">
              <a 
                :href="link.href"
                class="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
              >
                {{ link.name }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Legal Links -->
        <div>
          <h3 class="font-semibold text-gray-900 dark:text-white mb-4">{{ $t('footer.legal') }}</h3>
          <ul class="space-y-3">
            <li v-for="(link, index) in footerLinks.legal" :key="index">
              <a 
                :href="link.href"
                class="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
              >
                {{ link.name }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Newsletter -->
        <div class="col-span-2 md:col-span-4 lg:col-span-1">
          <h3 class="font-semibold text-gray-900 dark:text-white mb-4">{{ $t('footer.newsletter.title') }}</h3>
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-3">
            {{ $t('footer.newsletter.subtitle') }}
          </p>
          <div class="flex gap-2">
            <input 
              type="email" 
              :placeholder="String($t('footer.newsletter.placeholder'))"
              class="flex-1 px-3 py-2 text-sm border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
            <UButton size="sm" color="primary" class="cursor-pointer">
              <Icon name="i-heroicons-arrow-right" class="w-4 h-4" />
            </UButton>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="pt-8 border-t border-gray-200 dark:border-gray-800">
        <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p class="text-sm text-gray-600 dark:text-gray-400">
            © {{ currentYear }} {{ $t('footer.copyright') }}
          </p>
          <div class="flex items-center space-x-6">
            <a href="#" class="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors">
              {{ $t('footer.bottom.privacy') }}
            </a>
            <a href="#" class="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors">
              {{ $t('footer.bottom.terms') }}
            </a>
            <a href="#" class="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors">
              {{ $t('footer.bottom.cookies') }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
</style>