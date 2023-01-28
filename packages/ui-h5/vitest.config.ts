import { mergeConfig } from 'vite';
import { defineConfig } from 'vitest/config';
import viteConfig from './vite.build';

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      //   exclude: [...configDefaults.exclude, "packages/**/**"],
      //   include: [...configDefaults.include, "packages/**"],
      coverage: {
        provider: 'istanbul', // or 'c8'
      },
      environment: 'happy-dom',
    },
  }),
);
