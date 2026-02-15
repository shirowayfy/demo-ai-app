<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
import TheBanner from '@/components/TheBanner.vue'
</script>

<template>
  <div class="flex min-h-svh flex-col">
    <TheHeader />
    <main class="flex flex-1 items-center justify-center">
      <TheBanner />
    </main>
    <TheFooter />
  </div>
</template>
