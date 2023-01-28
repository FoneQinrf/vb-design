import { makeStringProp } from '../../utils';

export type ButtonType = 'primary' | 'danger' | 'warning' | 'success';
export type ButtonSize = 'large' | 'small' | 'mini' | '';

export default {
  type: makeStringProp<ButtonType>('primary'),
  disabled: Boolean,
  round: Boolean,
  ghost: Boolean,
  size: makeStringProp<ButtonSize>(''),
  text: Boolean,
  bgColor: makeStringProp(''),
  color: makeStringProp(''),
  block: Boolean,
  icon: makeStringProp(''),
};
