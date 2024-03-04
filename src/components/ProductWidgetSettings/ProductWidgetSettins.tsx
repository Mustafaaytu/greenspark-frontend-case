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
import { Link } from 'react-router-dom';
import { CheckboxWithTooltip } from '../CheckboxWithTooltip/CheckboxWithTooltip';
import { ColorSwatchCheckbox } from '../ColorSwatchCheckbox/ColorSwatchCheckbox';
import { ProductWidget } from '../ProductWidget/ProductWidget';
import { SwitchToggle } from '../SwitchToggle/SwitchToggle';
import classes from './ProductWidgetSettings.module.css';

interface ProductWidgetSettingsProps {
  widget: ProductWidgetItem;
  onLinkedChange?: (id: number, linked: boolean) => void;
  onColorChange?: (id: number, color: string) => void;
  onActivate?: (id: number, active: boolean) => void;
}

export function ProductWidgetSettings({
  widget,
  onActivate,
  onColorChange,
  onLinkedChange,
}: ProductWidgetSettingsProps) {
  const tooltipMessageComponent: JSX.Element = (
    <Stack className={classes.tooltipMessage} p={10}>
      <Text
        style={{
          fontFamily: 'Cabin, san-serif',
          fontSize: '14px',
          fontWeight: 'bold',
          textAlign: 'center',
        }}
      >
        Use this button to save this information in your profile, after that you will be able to
        access it any time and share it via email.
      </Text>
      <Link
        to="/profile"
        style={{
          fontFamily: 'Cabin, san-serif',
          fontSize: '14px',
          fontWeight: 'bold',
          textDecoration: 'none',
          color: '#3B755F',
          textAlign: 'center',
        }}
      >
        View Public Profile
      </Link>
    </Stack>
  );

  return (
    <>
      <Box>
        <ProductWidget {...widget} selectedColor={widget.selectedColor} />
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
          checked={widget.linked}
          style={{ justifyContent: 'space-between' }}
          onChange={(event) => {
            onLinkedChange?.(widget.id, event.currentTarget.checked);
          }}
        />
        <Group justify="space-between" mt={10}>
          <Text className={classes.badgeText}>Badge colour</Text>
          <Group gap={3}>
            {Object.entries(colors).map(([name, color]) => (
              <ColorSwatchCheckbox
                key={name}
                color={color}
                checked={widget.selectedColor === color}
                onClick={() => {
                  onColorChange?.(widget.id, color);
                }}
              />
            ))}
          </Group>
        </Group>
        <SwitchToggle
          checked={widget.active}
          label="Activate badge"
          labelPosition="left"
          onChange={(event) => {
            onActivate?.(widget.id, event.currentTarget.checked);
          }}
        />
      </Box>
    </>
  );
}
