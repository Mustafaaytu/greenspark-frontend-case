import { useMemo } from 'react';

export const capitalize = (value: string, lowerRest = false) =>
  value.charAt(0).toUpperCase() + (lowerRest ? value.slice(1).toLowerCase() : value.slice(1));

export interface CapitalizeProps {
  lowerRest?: boolean;
  value: string;
}

export function Capitalize({ lowerRest = true, value }: CapitalizeProps) {
  if (!value) {
    return null;
  }

  const transformed = useMemo(
    () =>
      value
        .split('_')
        .map((v) => capitalize(v, lowerRest))
        .join(' '),
    [value]
  );

  return <>{transformed}</>;
}
