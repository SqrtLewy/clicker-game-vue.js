import { mount } from '@vue/test-utils'
import clicker from '@/components/clicker.vue'

describe('clicker', () => {
  // Now mount the component and you have the wrapper
  const wrapper = mount(clicker)
  const vm = wrapper.vm

it('site has a button', () => {
    expect(wrapper.contains('button')).toBe(true)
  })
  
it('clicking the button adds a potato/point', () => {
  expect(wrapper.vm.potatoes).toBe(0)
  const button = wrapper.find('button')
  button.trigger('click')
  expect(wrapper.vm.potatoes).toBe(1)
})

})