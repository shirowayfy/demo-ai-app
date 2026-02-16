<script setup lang="ts">
import { Button } from '@/components/ui/button'
import BannerBackground from '@/components/BannerBackground.vue'
</script>

<template>
  <section class="relative flex w-full flex-col items-center gap-6 overflow-hidden px-4 py-20 text-center">
    <BannerBackground />
    <div class="relative z-10 flex flex-col items-center gap-6">
      <h1 class="text-5xl font-bold tracking-tight sm:text-6xl">
        Welcome to <span class="text-primary">Demo App</span>
      </h1>
      <p class="max-w-2xl text-lg text-muted-foreground">
        A modern web application built with Vue 3, Tailwind CSS, and shadcn components.
        Explore the power of a beautifully crafted developer experience.
      </p>
      <div class="flex gap-4">
        <Button size="lg">
          Get Started
        </Button>
        <Button variant="outline" size="lg">
          Learn More
        </Button>
      </div>
    </div>
  </section>
</template>
