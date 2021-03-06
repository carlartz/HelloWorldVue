import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    })
    
    //expect(33).toMatch("dd");
    expect(wrapper.text()).toMatch(msg)
  })
})

// describe('HelloWorld2.vue', () => {
//   it('renders props.msg when passed', () => {
//     const msg = 'new message'
//     const wrapper = shallowMount(HelloWorld, {
//       propsData: { msg }
//     })
    
//     expect(33).toMatch("dd");
//     expect(wrapper.text()).toMatch(msg)
//   })
// })
