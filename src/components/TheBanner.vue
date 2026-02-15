<script setup lang="ts">
import { Button } from '@/components/ui/button'
</script>

<template>
  <section class="flex flex-col items-center gap-6 text-center">
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
  </section>
</template>
