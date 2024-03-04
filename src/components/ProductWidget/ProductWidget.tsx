import { GreensparkIcon } from '@/icons';
import { colorMap } from '@/utils/colorUtils';
import { Box, Group, Stack, Text } from '@mantine/core';
import classes from './ProductWidget.module.css';
export interface ProductWidgetProps {
  id: number;
  type: string;
  amount: number;
  action: string;
  active: boolean;
  linked: boolean;
  selectedColor: string;
}

export function ProductWidget({ type, amount, action, selectedColor }: ProductWidgetProps) {
  const { bgColor, fontColor } = colorMap[selectedColor] || colorMap['default'];

  return (
    <>
      <Box className={classes.widget} style={{ backgroundColor: bgColor }}>
        <Group gap={5}>
          <Stack className={classes.widgetLogoStack}>
            <GreensparkIcon color={bgColor} />
          </Stack>
          <Stack mt={10} pr={10} mb={10} gap={7}>
            <Text
              className={classes.widgetTitle}
              style={{
                color: fontColor,
              }}
            >
              This product {action}
            </Text>
            <Text
              className={classes.widgetSpan}
              style={{
                color: fontColor,
              }}
              span
            >
              {amount} {type}
            </Text>
          </Stack>
        </Group>
      </Box>
    </>
  );
}
