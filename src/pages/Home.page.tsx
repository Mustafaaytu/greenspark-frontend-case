import { fetchProductWidgets } from '@/store/actions/product-widgets.actions';
import { useEffect } from 'react';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Welcome } from '../components/Welcome/Welcome';
import { AppDispatch, useAppDispatch } from '../store/store';

export function HomePage() {
  const dispatch: AppDispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchProductWidgets());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Welcome />
      <ColorSchemeToggle />
    </>
  );
}
