import { InfoOutlineIcon } from '@/icons/InfoOutlineIcon/InfoOutlineIcon';
import { ProductWidgetItem } from '@/interfaces/product-widgets.interface';
import { colors } from '@/utils/colorUtils';
import {
  Box,
  Group,
  Popover,
  PopoverDropdown,
  PopoverTarget,
  Stack,
  Text,
  UnstyledButton,
} from '@mantine/core';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckboxWithTooltip } from '../CheckboxWithTooltip/CheckboxWithTooltip';
import { ColorSwatchCheckbox } from '../ColorSwatchCheckbox/ColorSwatchCheckbox';
import { ProductWidget } from '../ProductWidget/ProductWidget';
import { SwitchToggle } from '../SwitchToggle/SwitchToggle';
import classes from './ProductWidgetSettings.module.css';

interface ProductWidgetSettingsProps {
  widget: ProductWidgetItem;
  onSettingsChange?: (id: number, active: boolean) => void;
}

export function ProductWidgetSettings({ widget, onSettingsChange }: ProductWidgetSettingsProps) {
  const [selectedColor, setSelectedColor] = useState(widget.selectedColor);
  const [linked, setLinked] = useState(widget.linked);

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
  };

  const tooltipMessageComponent: JSX.Element = (
    <Stack className={classes.tooltipMessage} p={10}>
      <Text>
        Use this button to save this information in your profile, after that you will be able to
        access it any time and share it via email.
      </Text>
      <Link to="/profile">Go to profile</Link>
    </Stack>
  );

  return (
    <>
      <Box>
        <ProductWidget {...widget} selectedColor={selectedColor} />
        <CheckboxWithTooltip
          label={
            <div className={classes.badgeText}>
              Link product to the badge
              <Popover closeOnClickOutside width={220} zIndex={1000} withArrow trapFocus>
                <PopoverTarget>
                  <UnstyledButton style={{ border: 'none', background: 'none' }}>
                    <InfoOutlineIcon />
                  </UnstyledButton>
                </PopoverTarget>
                <PopoverDropdown>{tooltipMessageComponent}</PopoverDropdown>
              </Popover>
            </div>
          }
          labelPosition="left"
          checked={linked}
          style={{ justifyContent: 'space-between' }}
          onChange={(event) => {
            setLinked(event.currentTarget.checked);
          }}
        />
        <Group justify="space-between" mt={10}>
          <Text className={classes.badgeText}>Badge colour</Text>
          <Group gap={3}>
            {Object.entries(colors).map(([name, color]) => (
              <ColorSwatchCheckbox
                key={name}
                color={color}
                checked={selectedColor === color}
                onClick={() => handleColorChange(color)}
              />
            ))}
          </Group>
        </Group>
        <SwitchToggle
          checked={widget.active}
          label="Activate badge"
          labelPosition="left"
          onChange={(event) => {
            onSettingsChange?.(widget.id, event.currentTarget.checked);
          }}
        />
      </Box>
    </>
  );
}
