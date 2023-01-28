import { reactive, provide, computed } from 'vue';

export const props = {
  fixed: Boolean,
};

export const useOptipns = () => {
  provide(
    'footHeight',
    computed(() => opts.footHeight),
  );
  provide(
    'bodyHetght',
    computed(() => opts.bodyHetght),
  );

  const opts = reactive({
    headerHeight: 0,
    footHeight: 0,
    bodyHetght: 0,
  });

  return { opts };
};
