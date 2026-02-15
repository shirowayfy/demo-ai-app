<script setup lang="ts">
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { Separator } from '@/components/ui/separator'
</script>

<template>
  <header class="w-full">
    <div class="container mx-auto flex h-16 items-center justify-between px-4">
      <div class="flex items-center gap-2">
        <span class="text-xl font-bold">Demo App</span>
      </div>

      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink href="/" :class="navigationMenuTriggerStyle()">
              Home
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="/about" :class="navigationMenuTriggerStyle()">
              About
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="/contact" :class="navigationMenuTriggerStyle()">
              Contact
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
    <Separator />
  </header>
</template>
