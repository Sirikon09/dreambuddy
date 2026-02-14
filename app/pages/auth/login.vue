<script setup lang="ts">
const { $t, $localePath } = useI18n()

definePageMeta({
  layout: 'auth'
})

useHead({
  title: $t('auth.login.signIn') as string,
  meta: [
    {
      name: 'description',
      content: $t('auth.login.subtitle') as string
    }
  ]
})

const email = ref('')
const password = ref('')
const rememberMe = ref(false)
const isLoading = ref(false)

const handleLogin = async () => {
  isLoading.value = true
  // TODO: Implement login logic
  setTimeout(() => {
    isLoading.value = false
  }, 1000)
}

const handleSocialLogin = (provider: string) => {
  // TODO: Implement social login
  console.log('Login with:', provider)
}
</script>

<template>
  <div class="space-y-6">
    <!-- Header -->
    <div class="text-center lg:text-left">
      <h1 class="text-3xl font-bold text-gray-900 dark:text-white">
        {{ $t('auth.login.title') }}
      </h1>
      <p class="mt-2 text-gray-600 dark:text-gray-400">
        {{ $t('auth.login.subtitle') }}
      </p>
    </div>

    <!-- Social Login Buttons -->
    <div class="space-y-3">
      <UButton
        @click="handleSocialLogin('google')"
        block
        size="lg"
        variant="outline"
        color="neutral"
        class="cursor-pointer"
      >
        <Icon name="i-heroicons-globe-alt" class="w-5 h-5" />
        {{ $t('auth.login.continueWithGoogle') }}
      </UButton>
      <UButton
        @click="handleSocialLogin('github')"
        block
        size="lg"
        variant="outline"
        color="neutral"
        class="cursor-pointer"
      >
        <Icon name="i-heroicons-code-bracket" class="w-5 h-5" />
        {{ $t('auth.login.continueWithGithub') }}
      </UButton>
    </div>

    <!-- Divider -->
    <div class="relative">
      <div class="absolute inset-0 flex items-center">
        <div class="w-full border-t border-gray-200 dark:border-gray-800"></div>
      </div>
      <div class="relative flex justify-center text-sm">
        <span class="px-4 bg-white dark:bg-gray-950 text-gray-500 dark:text-gray-400">
          {{ $t('auth.login.orContinueWith') }}
        </span>
      </div>
    </div>

    <!-- Login Form -->
    <form @submit.prevent="handleLogin" class="space-y-4">
      <!-- Email -->
      <div>
        <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          {{ $t('auth.login.email') }}
        </label>
        <UInput
          id="email"
          v-model="email"
          type="email"
          :placeholder="String($t('auth.login.emailPlaceholder'))"
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
          {{ $t('auth.login.password') }}
        </label>
        <UInput
          id="password"
          v-model="password"
          type="password"
          :placeholder="String($t('auth.login.passwordPlaceholder'))"
          size="lg"
          required
          autocomplete="current-password"
          class="w-full"
        >
          <template #leading>
            <Icon name="i-heroicons-lock-closed" class="w-5 h-5 text-gray-400" />
          </template>
        </UInput>
      </div>

      <!-- Remember Me & Forgot Password -->
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <input
            id="remember-me"
            v-model="rememberMe"
            type="checkbox"
            class="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500 cursor-pointer"
          />
          <label for="remember-me" class="ml-2 block text-sm text-gray-700 dark:text-gray-300 cursor-pointer">
            {{ $t('auth.login.rememberMe') }}
          </label>
        </div>
        <NuxtLink
          :to="$localePath('/auth/forgot-password')"
          class="text-sm font-medium text-primary-600 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-300"
        >
          {{ $t('auth.login.forgotPassword') }}
        </NuxtLink>
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
        {{ $t('auth.login.signIn') }}
      </UButton>
    </form>

    <!-- Sign Up Link -->
    <div class="text-center">
      <p class="text-sm text-gray-600 dark:text-gray-400">
        {{ $t('auth.login.noAccount') }}
        <NuxtLink
          :to="$localePath('/auth/register')"
          class="font-medium text-primary-600 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-300"
        >
          {{ $t('auth.login.signUp') }}
        </NuxtLink>
      </p>
    </div>
  </div>
</template>

<style scoped>
</style>