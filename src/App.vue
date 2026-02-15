<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
</script>

<template>
  <div class="flex min-h-svh flex-col">
    <TheHeader />
    <main class="container mx-auto flex flex-1 items-center justify-center px-4">
      <h1 class="text-4xl font-bold">HELLO WORLD</h1>
    </main>
    <TheFooter />
  </div>
</template>
