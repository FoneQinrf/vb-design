import { createComponent, makeNumericProp } from '../utils';
import { computed, provide } from 'vue';

const { create, bem } = createComponent('icon');

export const props = {
  size: makeNumericProp(18),
  color: String,
  name: String,
};

export default create({
  props,
  setup(prop, { slots }) {
    const clasess = computed(() => {
      return {
        [bem()]: true,
        [`${prop.name}`]: prop.name,
      };
    });
    const style = computed(() => {
      return {
        color: prop.color,
        fontSize: `${prop.size}px`,
      };
    });
    const iconDefault = computed(() => {
      //class优先于slot
      return prop.name ? [] : [slots.default?.()];
    });

    provide('size', computed(() => prop.size).value);
    provide('color', computed(() => prop.color).value);
    return () => {
      return (
        <i class={clasess.value} style={style.value}>
          {iconDefault.value}
        </i>
      );
    };
  },
});
