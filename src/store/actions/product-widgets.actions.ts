import { createAsyncThunk } from '@reduxjs/toolkit';
import { ProductWidget } from '../../interfaces/product-widgets.interface';

export const fetchProductWidgets = createAsyncThunk<ProductWidget[], void, { rejectValue: string }>(
  'fetchProductWidgets',
  async (_, thunkAPI) => {
    try {
      const response = await fetch('https://api.mocki.io/v2/016d11e8/product-widgets');

      if (!response.ok) {
        throw new Error('Failed to fetch activities.');
      }

      const productWidgets: ProductWidget[] = await response.json();

      return productWidgets;
    } catch (error) {
      if (error instanceof Error) {
        return thunkAPI.rejectWithValue(error.message);
      } else {
        return thunkAPI.rejectWithValue('Failed to fetch activities.');
      }
    }
  }
);
