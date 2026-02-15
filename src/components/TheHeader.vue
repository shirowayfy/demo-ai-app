<script setup lang="ts">
import { Moon, Sun } from 'lucide-vue-next'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { Separator } from '@/components/ui/separator'
import { Switch } from '@/components/ui/switch'
import { useDarkMode } from '@/composables/useDarkMode'

const { isDark } = useDarkMode()

function onThemeSwitch(checked: boolean) {
  isDark.value = checked
}
</script>

<template>
  <header class="w-full">
    <div class="container mx-auto flex h-16 items-center justify-between px-4">
      <div class="flex items-center gap-2">
        <span class="text-xl font-bold">Demo App</span>
      </div>

      <div class="flex items-center gap-6">
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

        <div class="flex items-center gap-2">
          <Sun class="size-4 text-muted-foreground" />
          <Switch :checked="isDark" @update:checked="onThemeSwitch" />
          <Moon class="size-4 text-muted-foreground" />
        </div>
      </div>
    </div>
    <Separator />
  </header>
</template>
