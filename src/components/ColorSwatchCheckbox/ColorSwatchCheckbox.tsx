import { ColorSwatch } from '@mantine/core';
import classes from './ColorSwatchCheckbox.module.css';

interface ColorSwatchCheckboxProps {
  color: string;
  checked?: boolean;
  checkBoxColor?: string;
  onClick: (color: string) => void;
}

export function ColorSwatchCheckbox({
  checked,
  color,
  onClick,
  checkBoxColor,
}: ColorSwatchCheckboxProps) {
  const handleOnClick = () => {
    onClick(color);
  };

  return (
    <ColorSwatch
      component="button"
      color={color}
      onClick={() => handleOnClick()}
      classNames={{
        root: classes.colorSwatchCheckbox,
      }}
      style={{
        color: checkBoxColor || '#fff',
        cursor: 'pointer',
        border: checked ? `1.5px solid #B0B0B0` : `1.5px solid transparent`,
      }}
    ></ColorSwatch>
  );
}
