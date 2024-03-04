import { useAllProductWidgets } from '@/hooks/useProductWidgets';
import { fetchProductWidgets } from '@/store/actions/product-widgets.actions';
import { updateProductWidgets } from '@/store/reducers/product-widgets.reducer';
import { hexToText } from '@/utils/colorUtils';
import { Container, Divider, Group, LoadingOverlay, Title } from '@mantine/core';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { AppDispatch, RootState, useAppDispatch } from '../../store/store';
import { ProductWidgetSettings } from '../ProductWidgetSettings/ProductWidgetSettins';
import classes from './Welcome.module.css';

export function Welcome() {
  //read state
  //const widgets = useProductWidgets();
  const widgets = useAllProductWidgets();
  const loading = useSelector((state: RootState) => state.productWidgets.loading);

  const dispatch: AppDispatch = useAppDispatch();
  useEffect(() => {
    if (widgets.length === 0) {
      dispatch(fetchProductWidgets());
    }
  }, []);

  function handleOnActive(id: number, isChecked: boolean) {
    const updatedWidgets = widgets.map((widget) => {
      if (widget.id === id) {
        return {
          ...widget,
          active: isChecked,
          selectedColor: hexToText(widget.selectedColor),
        };
      } else {
        return {
          ...widget,
          active: false,
          selectedColor: hexToText(widget.selectedColor),
        };
      }
    });

    dispatch(updateProductWidgets(updatedWidgets));
  }

  function handleOnColorChange(id: number, color: string) {
    const updatedWidgets = widgets.map((widget) => {
      if (widget.id === id) {
        return {
          ...widget,
          selectedColor: hexToText(color),
        };
      } else {
        return {
          ...widget,
          selectedColor: hexToText(widget.selectedColor),
        };
      }
    });

    dispatch(updateProductWidgets(updatedWidgets));
  }

  function handleOnLinkedChange(id: number, linked: boolean) {
    const updatedWidgets = widgets.map((widget) => {
      if (widget.id === id) {
        return {
          ...widget,
          linked,
          selectedColor: hexToText(widget.selectedColor),
        };
      } else {
        return {
          ...widget,
          selectedColor: hexToText(widget.selectedColor),
        };
      }
    });

    dispatch(updateProductWidgets(updatedWidgets));
  }

  return (
    <Container className={classes.box}>
      <Title order={3} className={classes.title} mt={100} mb={10} pt={20}>
        Per product widgets
      </Title>
      <Divider />
      <LoadingOverlay visible={loading} zIndex={1000} overlayProps={{ radius: 'sm', blur: 2 }} />
      <Group mt={20} className={classes.content} justify="space-between" gap={55}>
        {widgets.map((widget) => (
          <ProductWidgetSettings
            key={widget.id}
            widget={widget}
            onActivate={handleOnActive}
            onColorChange={handleOnColorChange}
            onLinkedChange={handleOnLinkedChange}
          />
        ))}
      </Group>
    </Container>
  );
}
