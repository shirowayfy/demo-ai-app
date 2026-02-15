import { useDark } from '@vueuse/core'

export function useDarkMode() {
  const isDark = useDark({
    selector: 'html',
    attribute: 'class',
    valueDark: 'dark',
    valueLight: '',
  })

  return { isDark }
}
