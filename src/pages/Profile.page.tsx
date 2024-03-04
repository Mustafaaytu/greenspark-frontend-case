import { AppDispatch, RootState, useAppDispatch } from '@/store/store';
import { Container, Divider, Group, LoadingOverlay, Title } from '@mantine/core';
import { useSelector } from 'react-redux';

import { ProductWidget } from '@/components/ProductWidget/ProductWidget';
import { useProductWidgets } from '@/hooks/useProductWidgets';
import { fetchProductWidgets } from '@/store/actions/product-widgets.actions';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import classes from '../components/Welcome/Welcome.module.css';

export function Profile() {
  const dispatch: AppDispatch = useAppDispatch();
  const widgets = useProductWidgets();
  const loading = useSelector((state: RootState) => state.productWidgets.loading);

  useEffect(() => {
    if (widgets.length === 0) {
      dispatch(fetchProductWidgets());
    }
  }, []);

  return (
    <>
      <Container className={classes.box}>
        <Group mt={100} mb={10} pt={20}>
          <Title order={3} className={classes.title}>
            Profile
          </Title>
          <Link
            to="/"
            style={{
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: 'bold',
            }}
          >
            Back to Widgets
          </Link>
        </Group>

        <Divider />
        <LoadingOverlay visible={loading} zIndex={1000} overlayProps={{ radius: 'sm', blur: 2 }} />
        <Group mt={20} className={classes.content} justify="space-between" gap={55}>
          {widgets.map((widget) => (
            <ProductWidget key={widget.id} {...widget} />
          ))}
        </Group>
      </Container>
    </>
  );
}
