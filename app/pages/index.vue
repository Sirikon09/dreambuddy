<script setup lang="ts">
useHead({
  title: 'DreamBuddy - Turn Your Dreams Into Reality',
  meta: [
    { 
      name: 'description', 
      content: 'Track your savings goals, share with the community, and turn your dreams into reality. Join thousands of users saving smarter with DreamBuddy.' 
    }
  ]
});
</script>

<template>
  <div>
    <!-- Hero Section -->
    <LandingHero />

    <!-- Feature Section -->
    <LandingFeature />

    <!-- How It Works Section -->
    <LandingHowitwork />
    
    <!-- Community Section -->
    <LandingComunity />

    <!-- Testimonials Section -->
    <LandingTestimonials />

    <!-- CTA Section -->
    <LandingCTA />
  </div>
</template>

<style lang="css" scoped>
</style>