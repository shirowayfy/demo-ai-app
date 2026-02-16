import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TheBanner from '../TheBanner.vue'

describe('TheBanner', () => {
  it('renders the heading', () => {
    const wrapper = mount(TheBanner)
    expect(wrapper.find('h1').text()).toContain('Welcome to')
    expect(wrapper.find('h1').text()).toContain('Demo App')
  })

  it('renders the description paragraph', () => {
    const wrapper = mount(TheBanner)
    expect(wrapper.find('p').text()).toContain('modern web application')
  })

  it('renders Get Started and Learn More buttons', () => {
    const wrapper = mount(TheBanner)
    const buttons = wrapper.findAll('[data-slot="button"]')
    expect(buttons).toHaveLength(2)
    expect(buttons[0].text()).toBe('Get Started')
    expect(buttons[1].text()).toBe('Learn More')
  })
})
