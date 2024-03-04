import { InputLabelProps, Switch, SwitchProps } from '@mantine/core';
import classes from './SwitchToggle.module.css';

export interface SwitchToggleProps extends SwitchProps {
  invertLabelColor?: boolean;
  inputLabel?: string;
  inputLabelPosition?: 'left' | 'top' | 'right' | 'bottom';
  inputLabelProps?: InputLabelProps;
}

export function SwitchToggle({
  invertLabelColor = false,
  inputLabel,
  inputLabelPosition = 'right',
  inputLabelProps,
  size = 'sm',
  disabled,
  ...props
}: SwitchToggleProps) {
  return <Switch className={classes.switchToggle} size={size} {...props} color="#3B755F" />;
}
