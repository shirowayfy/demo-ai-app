import { describe, it, expect, vi, beforeEach } from 'vitest'
import { ref } from 'vue'
import { mount } from '@vue/test-utils'
import TheHeader from '../TheHeader.vue'

vi.mock('@/composables/useDarkMode', () => ({
  useDarkMode: () => ({ isDark: ref(false) }),
}))

describe('TheHeader', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders the app name', () => {
    const wrapper = mount(TheHeader)
    expect(wrapper.text()).toContain('Demo App')
  })

  it('renders navigation links', () => {
    const wrapper = mount(TheHeader)
    expect(wrapper.text()).toContain('Home')
    expect(wrapper.text()).toContain('About')
    expect(wrapper.text()).toContain('Contact')
  })
})
