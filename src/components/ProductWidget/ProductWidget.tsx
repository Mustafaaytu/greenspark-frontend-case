import { GreensparkIcon } from '@/icons';
import { Box, Group, Stack, Text } from '@mantine/core';
import classes from './ProductWidget.module.css';

export function ProductWidget() {
  return (
    <>
      <Box className={classes.widget}>
        <Group gap={5}>
          <Stack className={classes.widgetLogoStack}>
            <GreensparkIcon />
          </Stack>
          <Stack mt={10} pr={10} mb={10} gap={7}>
            <Text className={classes.widgetTitle}>This product collects</Text>
            <Text className={classes.widgetSpan} span>
              100 plastic bottles
            </Text>
          </Stack>
        </Group>
      </Box>
    </>
  );
}
