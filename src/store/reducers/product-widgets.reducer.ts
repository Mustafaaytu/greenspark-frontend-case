import { createSlice } from '@reduxjs/toolkit';
import { ProductWidgetItem } from '../../interfaces/product-widgets.interface';
import { fetchProductWidgets } from '../actions/product-widgets.actions';

interface ProductWidgetsState {
  widgets: ProductWidgetItem[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductWidgetsState = {
  widgets: [],
  loading: false,
  error: null,
};

export const productWidgetsSlice = createSlice({
  name: 'productWidgets',
  initialState,
  reducers: {
    updateProductWidgets: (state, action) => {
      state.widgets = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductWidgets.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductWidgets.fulfilled, (state, action) => {
        state.loading = false;
        state.widgets = action.payload;
      })
      .addCase(fetchProductWidgets.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

export default productWidgetsSlice.reducer;
export const { updateProductWidgets } = productWidgetsSlice.actions;
