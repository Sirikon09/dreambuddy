<script setup lang="ts">
const { $t, $localePath } = useI18n()

definePageMeta({
  layout: 'auth'
})

useHead({
  title: $t('auth.login.signUp') as string,
  meta: [
    {
      name: 'description',
      content: $t('auth.register.subtitle') as string
    }
  ]
})

const name = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const agreeTerms = ref(false)
const isLoading = ref(false)

const handleRegister = async () => {
  if (password.value !== confirmPassword.value) {
    // TODO: Show error message
    console.error('Passwords do not match')
    return
  }
  
  if (!agreeTerms.value) {
    // TODO: Show error message
    console.error('Please agree to terms')
    return
  }

  isLoading.value = true
  // TODO: Implement register logic
  setTimeout(() => {
    isLoading.value = false
  }, 1000)
}

const handleSocialRegister = (provider: string) => {
  // TODO: Implement social register
  console.log('Register with:', provider)
}
</script>

<template>
  <div class="space-y-6">
    <!-- Header -->
    <div class="text-center lg:text-left">
      <h1 class="text-3xl font-bold text-gray-900 dark:text-white">
        {{ $t('auth.register.title') }}
      </h1>
      <p class="mt-2 text-gray-600 dark:text-gray-400">
        {{ $t('auth.register.subtitle') }}
      </p>
    </div>

    <!-- Social Register Buttons -->
    <div class="space-y-3">
      <UButton
        @click="handleSocialRegister('google')"
        block
        size="lg"
        variant="outline"
        color="neutral"
        class="cursor-pointer"
      >
        <Icon name="i-heroicons-globe-alt" class="w-5 h-5" />
        {{ $t('auth.register.continueWithGoogle') }}
      </UButton>
      <UButton
        @click="handleSocialRegister('github')"
        block
        size="lg"
        variant="outline"
        color="neutral"
        class="cursor-pointer"
      >
        <Icon name="i-heroicons-code-bracket" class="w-5 h-5" />
        {{ $t('auth.register.continueWithGithub') }}
      </UButton>
    </div>

    <!-- Divider -->
    <div class="relative">
      <div class="absolute inset-0 flex items-center">
        <div class="w-full border-t border-gray-200 dark:border-gray-800"></div>
      </div>
      <div class="relative flex justify-center text-sm">
        <span class="px-4 bg-white dark:bg-gray-950 text-gray-500 dark:text-gray-400">
          {{ $t('auth.register.orRegisterWith') }}
        </span>
      </div>
    </div>

    <!-- Register Form -->
    <form @submit.prevent="handleRegister" class="space-y-4">
      <!-- Name -->
      <div>
        <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          {{ $t('auth.register.name') }}
        </label>
        <UInput
          id="name"
          v-model="name"
          type="text"
          :placeholder="$t('auth.register.namePlaceholder') as string"
          size="lg"
          required
          autocomplete="name"
          class="w-full"
        >
          <template #leading>
            <Icon name="i-heroicons-user" class="w-5 h-5 text-gray-400" />
          </template>
        </UInput>
      </div>

      <!-- Email -->
      <div>
        <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          {{ $t('auth.register.email') }}
        </label>
        <UInput
          id="email"
          v-model="email"
          type="email"
          :placeholder="$t('auth.register.emailPlaceholder') as string"
          size="lg"
          required
          autocomplete="email"
          class="w-full"
        >
          <template #leading>
            <Icon name="i-heroicons-envelope" class="w-5 h-5 text-gray-400" />
          </template>
        </UInput>
      </div>

      <!-- Password -->
      <div>
        <label for="password" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          {{ $t('auth.register.password') }}
        </label>
        <UInput
          id="password"
          v-model="password"
          type="password"
          :placeholder="$t('auth.register.passwordPlaceholder') as string"
          size="lg"
          required
          autocomplete="new-password"
          class="w-full"
        >
          <template #leading>
            <Icon name="i-heroicons-lock-closed" class="w-5 h-5 text-gray-400" />
          </template>
        </UInput>
      </div>

      <!-- Confirm Password -->
      <div>
        <label for="confirm-password" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          {{ $t('auth.register.confirmPassword') }}
        </label>
        <UInput
          id="confirm-password"
          v-model="confirmPassword"
          type="password"
          :placeholder="$t('auth.register.confirmPasswordPlaceholder') as string"
          size="lg"
          required
          autocomplete="new-password"
          class="w-full"
        >
          <template #leading>
            <Icon name="i-heroicons-lock-closed" class="w-5 h-5 text-gray-400" />
          </template>
        </UInput>
      </div>

      <!-- Terms & Conditions -->
      <div class="flex items-start">
        <input
          id="agree-terms"
          v-model="agreeTerms"
          type="checkbox"
          class="h-4 w-4 mt-1 rounded border-gray-300 text-primary-600 focus:ring-primary-500 cursor-pointer"
          required
        />
        <label for="agree-terms" class="ml-2 block text-sm text-gray-700 dark:text-gray-300 cursor-pointer">
          {{ $t('auth.register.agreeToTerms') }}
          <NuxtLink :to="$localePath('/terms')" class="font-medium text-primary-600 hover:text-primary-500 dark:text-primary-400">
            {{ $t('auth.register.termsOfService') }}
          </NuxtLink>
          {{ $t('auth.register.and') }}
          <NuxtLink :to="$localePath('/privacy')" class="font-medium text-primary-600 hover:text-primary-500 dark:text-primary-400">
            {{ $t('auth.register.privacyPolicy') }}
          </NuxtLink>
        </label>
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
        {{ $t('auth.register.createAccount') }}
      </UButton>
    </form>

    <!-- Sign In Link -->
    <div class="text-center">
      <p class="text-sm text-gray-600 dark:text-gray-400">
        {{ $t('auth.register.haveAccount') }}
        <NuxtLink
          :to="$localePath('/auth/login')"
          class="font-medium text-primary-600 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-300"
        >
          {{ $t('auth.register.signIn') }}
        </NuxtLink>
      </p>
    </div>
  </div>
</template>

<style scoped>
</style>