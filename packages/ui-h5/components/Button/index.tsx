import { createComponent } from '../utils';
import { computed, reactive, toRefs, watch } from 'vue';
import { makeStringProp } from '../utils';
import Icon from '../Icon';

export type ButtonType = 'primary' | 'danger' | 'warning' | 'success';
export type ButtonSize = 'large' | 'small' | 'mini' | '';

const { create, bem } = createComponent('button');

export const props = {
  type: makeStringProp<ButtonType>('primary'),
  disabled: Boolean,
  round: Boolean,
  ghost: Boolean,
  size: makeStringProp<ButtonSize>(''),
  text: Boolean,
  bgColor: String,
  color: String,
  block: Boolean,
  icon: String,
  loading: Boolean,
  loadingText: String,
};

export default create({
  props,
  emits: ['click'],
  setup(prop, { slots, emit }) {
    const data = reactive({
      loading: prop.loading,
    });

    const { loading } = toRefs(data);

    const clasess = computed(() => {
      return {
        [bem()]: true,
        [bem(prop.type)]: true,
        [bem('disabled')]: prop.disabled || loading.value,
        [bem('round')]: prop.round,
        [bem(`ghost--${prop.type}`)]: prop.ghost,
        [bem(`size--${prop.size}`)]: prop.size,
        [`${bem('text')} ${bem(`text--${prop.type}`)}`]: prop.text,
        [bem('block')]: prop.block,
      };
    });

    const style = computed(() => {
      return {
        color: prop.color,
        background: prop.bgColor,
      };
    });
    const isIcon = computed(() => prop.icon || slots.icon);

    const defaultRender = computed(() => {
      if (loading.value) {
        return <div class={bem('content--text')}>{prop.loadingText || slots.default?.()}</div>;
      }
      return slots.default ? <div class={bem('content--text')}>{slots.default?.()}</div> : [];
    });

    const iconRender = computed(() => {
      if (loading.value) {
        return (
          <div class={[bem('icon')]}>
            <Icon class="vb-animation-rotation" name="vb-icon-loading" />
          </div>
        );
      }
      return isIcon.value ? [<div class={bem('icon')}>{slots.icon ? slots.icon() : prop.icon}</div>] : [];
    });

    const iconRightRender = () => {
      return slots['right-icon'] ? <div class={[bem('icon'), bem('icon--right')]}>{slots['right-icon']()}</div> : [];
    };

    watch(
      () => prop.loading,
      val => {
        data.loading = val;
      },
    );

    const click = () => {
      emit('click', { showLoading, cleanLoading });
    };
    const showLoading = () => {
      data.loading = true;
    };
    const cleanLoading = () => {
      data.loading = false;
    };

    return () => {
      return (
        <button class={clasess.value} style={style.value} disabled={prop.disabled} onClick={click}>
          <div class={bem('content')}>
            {iconRender.value}
            {defaultRender.value}
            {iconRightRender()}
          </div>
        </button>
      );
    };
  },
});
