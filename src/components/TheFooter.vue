<script setup lang="ts">
import { Separator } from '@/components/ui/separator'
</script>

<template>
  <footer class="w-full">
    <Separator />
    <div class="container mx-auto flex h-16 items-center justify-between px-4">
      <p class="text-sm text-muted-foreground">
        &copy; {{ new Date().getFullYear() }} Demo App. All rights reserved.
      </p>
      <nav class="flex gap-4">
        <a href="/privacy" class="text-sm text-muted-foreground hover:text-foreground transition-colors">
          Privacy
        </a>
        <a href="/terms" class="text-sm text-muted-foreground hover:text-foreground transition-colors">
          Terms
        </a>
      </nav>
    </div>
  </footer>
</template>
