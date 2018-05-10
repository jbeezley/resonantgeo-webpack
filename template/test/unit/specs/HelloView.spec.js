import { mount } from '@vue/test-utils';
import HelloView from '@/components/HelloView'

describe('HelloView.vue', () => {
  it('should render correct contents', () => {
    const wrapper = mount(HelloView);
    expect(wrapper.find('h2').text()).to.equal('Essential Links');
  })
})
