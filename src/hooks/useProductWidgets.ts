import { ProductWidget } from '@/interfaces/product-widgets.interface';
import { useMemo } from 'react';
import { useAppSelector } from './useAppSelector';

export function useProductWidgets(): ProductWidget[] {
  const productWidgets = useAppSelector((state) => state.productWidgets.widgets);

  return useMemo(() => productWidgets.filter((widget) => widget.active), [productWidgets]);
}
