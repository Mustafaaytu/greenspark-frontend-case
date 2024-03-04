import { ProductWidgetItem } from '@/interfaces/product-widgets.interface';
import { colors } from '@/utils/colorUtils';
import { useMemo } from 'react';
import { useAppSelector } from './useAppSelector';

export function useProductWidgets(): ProductWidgetItem[] {
  const productWidgets = useAppSelector((state) => state.productWidgets.widgets);

  const widgetsWithHexColors = useMemo(() => {
    return productWidgets.map((widget) => ({
      ...widget,
      selectedColor: colors[widget.selectedColor.toLowerCase()] || '#000',
    }));
  }, [productWidgets, colors]);

  return useMemo(
    () => widgetsWithHexColors.filter((widget) => widget.active),
    [widgetsWithHexColors]
  );
}

export function useAllProductWidgets(): ProductWidgetItem[] {
  const productWidgets = useAppSelector((state) => state.productWidgets.widgets);

  const widgetsWithHexColors = useMemo(() => {
    return productWidgets.map((widget) => ({
      ...widget,
      selectedColor: colors[widget.selectedColor.toLowerCase()] || '#000',
    }));
  }, [productWidgets, colors]);

  return useMemo(() => widgetsWithHexColors, [widgetsWithHexColors]);
}
