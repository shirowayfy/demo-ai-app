import { describe, it, expect, beforeEach, vi } from 'vitest'

describe('useDarkMode', () => {
  beforeEach(() => {
    document.body.classList.remove('dark')
    localStorage.clear()
    vi.resetModules()
  })

  it('defaults to light mode when no theme is stored', async () => {
    const { useDarkMode } = await import('../useDarkMode')
    const { isDark } = useDarkMode()
    expect(isDark.value).toBe(false)
    expect(document.body.classList.contains('dark')).toBe(false)
  })

  it('initializes to dark mode when theme is stored as dark', async () => {
    localStorage.setItem('theme', 'dark')
    const { useDarkMode } = await import('../useDarkMode')
    const { isDark } = useDarkMode()
    expect(isDark.value).toBe(true)
    expect(document.body.classList.contains('dark')).toBe(true)
  })

  it('persists theme to localStorage', async () => {
    const { useDarkMode } = await import('../useDarkMode')
    const { isDark } = useDarkMode()

    isDark.value = true
    await vi.dynamicImportSettled()

    expect(localStorage.getItem('theme')).toBe('dark')
  })
})
