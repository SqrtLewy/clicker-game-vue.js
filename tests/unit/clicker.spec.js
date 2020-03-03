import { mount } from '@vue/test-utils'
import clicker from '@/components/clicker.vue'

describe('clicker', () => {
  // Now mount the component and you have the wrapper
  const wrapper = mount(clicker)
  const vm = wrapper.vm

it('site has a button', () => {
    expect(wrapper.contains('button')).toBe(true)
  })
})