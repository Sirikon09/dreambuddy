<script setup lang="ts">
const { $t, $localePath } = useI18n()

definePageMeta({
  layout: 'auth'
})

useHead({
  title: $t('auth.forgotPassword.title') as string,
  meta: [
    {
      name: 'description',
      content: $t('auth.forgotPassword.subtitle') as string
    }
  ]
})

const email = ref('')
const isLoading = ref(false)
const isEmailSent = ref(false)

const handleResetPassword = async () => {
  isLoading.value = true
  // TODO: Implement reset password logic
  setTimeout(() => {
    isLoading.value = false
    isEmailSent.value = true
  }, 1000)
}

const handleResendEmail = () => {
  isEmailSent.value = false
  email.value = ''
}
</script>

<template>
  <div class="space-y-6">
    <!-- Success State -->
    <div v-if="isEmailSent" class="text-center space-y-6">
      <!-- Icon -->
      <div class="mx-auto w-16 h-16 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
        <Icon name="i-heroicons-envelope" class="w-8 h-8 text-primary-600 dark:text-primary-400" />
      </div>

      <!-- Header -->
      <div>
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white">
          {{ $t('auth.forgotPassword.checkEmail') }}
        </h1>
        <p class="mt-2 text-gray-600 dark:text-gray-400">
          {{ $t('auth.forgotPassword.emailSent') }} <span class="font-medium text-gray-900 dark:text-white">{{ email }}</span>
        </p>
      </div>

      <!-- Instructions -->
      <div class="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-4 text-left">
        <p class="text-sm text-gray-600 dark:text-gray-400">
          {{ $t('auth.forgotPassword.instructions') }}
        </p>
      </div>

      <!-- Actions -->
      <div class="space-y-3">
        <UButton
          block
          size="lg"
          color="primary"
          @click="$router.push($localePath('/auth/login'))"
          class="cursor-pointer"
        >
          {{ $t('auth.forgotPassword.backToLogin') }}
        </UButton>
        <UButton
          block
          size="lg"
          variant="ghost"
          @click="handleResendEmail"
          class="cursor-pointer"
        >
          {{ $t('auth.forgotPassword.resendEmail') }}
        </UButton>
      </div>
    </div>

    <!-- Form State -->
    <div v-else>
      <!-- Header -->
      <div class="text-center lg:text-left">
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white">
          {{ $t('auth.forgotPassword.title') }}
        </h1>
        <p class="mt-2 text-gray-600 dark:text-gray-400">
          {{ $t('auth.forgotPassword.subtitle') }}
        </p>
      </div>

      <!-- Reset Form -->
      <form @submit.prevent="handleResetPassword" class="space-y-4">
        <!-- Email -->
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            {{ $t('auth.forgotPassword.email') }}
          </label>
          <UInput
            id="email"
            v-model="email"
            type="email"
            :placeholder="$t('auth.forgotPassword.emailPlaceholder') as string"
            size="lg"
            required
            autocomplete="email"
            class="w-full"
          >
            <template #leading>
              <Icon name="i-heroicons-envelope" class="w-5 h-5 text-gray-400" />
            </template>
          </UInput>
          <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">
            {{ $t('auth.forgotPassword.emailHint') }}
          </p>
        </div>

        <!-- Submit Button -->
        <UButton
          type="submit"
          block
          size="lg"
          color="primary"
          :loading="isLoading"
          :disabled="isLoading"
          class="cursor-pointer"
        >
          {{ $t('auth.forgotPassword.sendResetLink') }}
        </UButton>
      </form>

      <!-- Back to Login -->
      <div class="text-center mt-4">
        <NuxtLink
          :to="$localePath('/auth/login')"
          class="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-300"
        >
          <Icon name="i-heroicons-arrow-left" class="w-4 h-4 mr-1" />
          {{ $t('auth.forgotPassword.backToLogin') }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>