import { createSlice } from '@reduxjs/toolkit';
import operations from './finance-operations';

const initialState = {
  isLoading: false,
  data: null,
  error: null,
};

const financeSlice = createSlice({
  name: 'finance',
  initialState,
  extraReducers: {
    [operations.fetchData.pending]: (state) => {
      state.error = null;
      state.isLoading = true;
    },
    [operations.fetchData.fulfilled]: (state, { payload }) => {
      state.data = payload;
      state.error = null;
      state.isLoading = false;
    },
    [operations.fetchData.rejected]: (state, { error }) => {
      state.error = error.message;
      state.isLoading = false;
    },
  },
});
export default financeSlice.reducer;
