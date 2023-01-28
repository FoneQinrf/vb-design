import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Page from '../index';
import { nextTick } from 'vue';

describe('Page', async () => {
  const wrapper = mount(Page);

  it('should render correctly', () => {
    nextTick(() => {
      // expect(wrapper.html()).toMatchSnapshot();
    });
  });

  it('should render fixed correctly', async () => {
    wrapper.setProps({ fixed: true });
    await wrapper.vm.$nextTick;
    expect(wrapper.find('.mx-page__head--fixed').exists()).toBeTruthy;
    // expect(wrapper.html()).toMatchSnapshot();
  });
});
