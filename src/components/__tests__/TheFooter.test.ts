import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TheFooter from '../TheFooter.vue'

describe('TheFooter', () => {
  it('renders copyright text with current year', () => {
    const wrapper = mount(TheFooter)
    const year = new Date().getFullYear()
    expect(wrapper.text()).toContain(`© ${year} Demo App`)
  })

  it('renders Privacy and Terms links', () => {
    const wrapper = mount(TheFooter)
    const links = wrapper.findAll('a')
    expect(links).toHaveLength(2)
    expect(links[0].text()).toBe('Privacy')
    expect(links[0].attributes('href')).toBe('/privacy')
    expect(links[1].text()).toBe('Terms')
    expect(links[1].attributes('href')).toBe('/terms')
  })
})
