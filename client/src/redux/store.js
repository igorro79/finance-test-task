import { configureStore } from '@reduxjs/toolkit';

import financeSlice from './finance-slice';
// import filtersReducer from './features/filters/filtersSlice';

const store = configureStore({
  reducer: financeSlice,
});

export default store;
