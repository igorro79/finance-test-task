import { createSlice } from '@reduxjs/toolkit';
import operations from './finance-operations';

const initialState = {
  data: null,
};

const financeSlice = createSlice({
  name: 'finance',
  initialState,
  reducers: {
    updateData(state, { payload }) {
      state.data = payload;
    },
  },
});
export const { updateData, show } = financeSlice.actions;
export default financeSlice.reducer;
