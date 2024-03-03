import { useProductWidgets } from '@/hooks/useProductWidgets';
import { fetchProductWidgets } from '@/store/actions/product-widgets.actions';
import { Box, Container, Divider, Group, LoadingOverlay, Title } from '@mantine/core';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { AppDispatch, RootState, useAppDispatch } from '../../store/store';
import { ProductWidget } from '../ProductWidget/ProductWidget';
import classes from './Welcome.module.css';

export function Welcome() {
  //read state
  // const productWidgets = useAppSelector((state) => state.productWidgets.widgets);
  const widgets = useProductWidgets();
  const loading = useSelector((state: RootState) => state.productWidgets.loading);
  const error = useSelector((state: RootState) => state.productWidgets.error);
  const dispatch: AppDispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchProductWidgets());
  }, []);

  console.log(widgets);

  return (
    <Box>
      <Container className={classes.box}>
        <Title order={3} className={classes.title} mt={100} mb={10} pt={20}>
          Per product widgets
        </Title>
        <Divider />
        <LoadingOverlay visible={loading} zIndex={1000} overlayProps={{ radius: 'sm', blur: 2 }} />
        <Group mt={20} className={classes.content} justify="space-between" gap={55}>
          {widgets.map((widget) => (
            <ProductWidget key={widget.id} />
          ))}
        </Group>
      </Container>
    </Box>
  );
}
