import { defineComponent } from 'vue';
import { version } from '../../package.json';
import type { ComponentPropsOptions, ExtractPropTypes, SetupContext, RenderFunction, Component, App } from 'vue';

export type WithInstall<T> = T & {
  install(app: App): void;
  version?: string | number;
};

export function withInstall<T extends Component>(options: T) {
  (options as Record<string, unknown>).install = (app: App) => {
    const { name } = options;
    if (name) {
      app.component(name, options);
    }
  };
  return options as WithInstall<T>;
}

/**
 * 判断字符串
 * @param options
 * @returns
 */
export const isString = (options: any) => Object.prototype.toString.call(options) === '[object String]';

/**
 * 判断数组
 * @param options
 * @returns
 */
export const isArray = (options: any) => Object.prototype.toString.call(options) === '[object Array]';

/**
 * 判断null
 * @param options
 * @returns
 */
export const isNull = (options: any) => Object.prototype.toString.call(options) === '[object Null]';

/**
 * 判断undefined
 * @param options
 * @returns
 */
export const isUndefined = (options: any) => Object.prototype.toString.call(options) === '[object Undefined]';

/**
 * 判断是否对象
 * @param options
 * @returns
 */
export const isObject = (options: any) => Object.prototype.toString.call(options) === '[object Object]';

/**
 * 判断是否为空
 * @param options
 * @returns
 */
export const isEmpty = (options: any) => isNull(options) || isUndefined(options) || options === '';

/**
 * 区间控制
 * @param num
 * @param arr
 * @returns
 */
export const range = (num: number, arr: Array<number>) => Math.min(Math.max(num, arr[0]), arr[1]);

export function createComponent(name: string) {
  const componentName = `vb-${name}`;
  return {
    bem: (fix?: string | undefined) => {
      return fix ? `${componentName}__${fix}` : componentName;
    },
    create: function <
      PropsOptions extends Readonly<ComponentPropsOptions>,
      Props extends Readonly<ExtractPropTypes<PropsOptions>>,
    >(
      _options:
        | {
            name: string;
            baseName?: string;
            install?: (vue: App) => void;
            props?: PropsOptions;
            components?: Record<string, Component>;
            setup?: (props: Props, setupContext: SetupContext) => RenderFunction | Record<string, any> | any;
            emits?: string[];
            [optionKey: string]: any;
            version?: string | number;
          }
        | any,
    ) {
      _options.name = componentName;
      _options.version = version;
      if (_options.name) {
        _options.install = (app: App) => {
          app.component(_options.name, _options);
        };
      }
      return defineComponent(_options);
    } as typeof defineComponent,
    name: componentName,
  };
}

export * from './props';
export * from './expose';
export * from './scroll';
