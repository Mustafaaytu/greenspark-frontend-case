import { Checkbox, CheckboxProps } from '@mantine/core';
import classes from './CheckboxWithTooltip.module.css';

export interface CheckboxWithTooltipProps extends CheckboxProps {
  inputLabel?: string;
  inputLabelPosition?: 'left' | 'top' | 'right' | 'bottom';
}

export function CheckboxWithTooltip({
  inputLabel,
  inputLabelPosition = 'left',
  size = 'sm',
  disabled,
  ...props
}: CheckboxWithTooltipProps) {
  return (
    <Checkbox className={classes.checkboxWithTooltip} size={size} {...props} color="#3B755F" />
  );
}
