import { useColorMode } from '@vueuse/core'
import { computed } from 'vue'

export function useDarkMode() {
  const mode = useColorMode({
    attribute: 'class',
    modes: {
      dark: 'dark',
      light: '',
    },
  })

  const isDark = computed({
    get: () => mode.value === 'dark',
    set: (value: boolean) => {
      mode.value = value ? 'dark' : 'light'
    },
  })

  return { isDark }
}
