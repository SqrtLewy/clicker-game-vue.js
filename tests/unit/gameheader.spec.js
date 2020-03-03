import { mount } from '@vue/test-utils'
import gameHeader from '@/components/gameHeader.vue'

describe('gameHeader', () => {
  // Now mount the component and you have the wrapper
  const wrapper = mount(gameHeader)

it('the logo is a link', () => {
    expect(wrapper.contains('a')).toBe(true)
  })
  
it('displaying a banner', () => {
    expect(wrapper.contains('img')).toBe(true)
  })
})