import { ref, watchEffect } from 'vue'

const isDark = ref(localStorage.getItem('theme') === 'dark')

watchEffect(() => {
  document.body.classList.toggle('dark', isDark.value)
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
})

export function useDarkMode() {
  return { isDark }
}
