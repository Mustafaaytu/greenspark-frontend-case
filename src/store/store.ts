import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import productWidgetsReducer from './reducers/product-widgets.reducer';

const reducer = {
  productWidgets: productWidgetsReducer,
};

const store = configureStore({
  reducer,
});

export { store };
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
