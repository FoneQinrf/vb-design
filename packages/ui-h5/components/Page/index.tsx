import { createComponent } from '../utils';
import { nextTick, onMounted, ref, type ExtractPropTypes } from 'vue';
import { props, useOptipns } from './src/hooks';

const { create, bem } = createComponent('page');

export type PageProps = ExtractPropTypes<typeof props>;

export default create({
  props,
  setup(prop, { slots }) {
    const header = ref<HTMLDivElement>();
    const body = ref<HTMLDivElement>();
    const foot = ref<HTMLDivElement>();
    const { opts } = useOptipns();

    const getHeight = () => {
      nextTick(() => {
        opts.headerHeight = header.value?.clientHeight || 0;
        opts.footHeight = foot.value?.clientHeight || 0;
        opts.bodyHetght = document.body.clientHeight - (opts.headerHeight + opts.footHeight);
      });
    };

    onMounted(() => {
      getHeight();
    });

    return () => {
      const { fixed } = prop;
      const { bodyHetght, headerHeight } = opts;
      const style = {
        height: `${bodyHetght}px`,
        paddingTop: fixed ? `${headerHeight}px` : '0',
      };
      return (
        <div class={bem()}>
          <div
            ref={header}
            class={{
              [`${bem('head')}`]: true,
              [`${bem('head--fixed')}`]: fixed,
            }}
          >
            {slots.head?.()}
          </div>
          <div ref={body} class={bem('body')} style={style}>
            {slots.default?.()}
          </div>
          <div ref={foot} class={bem('foot')}>
            {slots.foot?.()}
          </div>
        </div>
      );
    };
  },
});
