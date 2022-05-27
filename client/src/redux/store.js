import { configureStore } from '@reduxjs/toolkit';

import financeSlice from './finance-slice';

const store = configureStore({
  reducer: financeSlice,
});

export default store;
