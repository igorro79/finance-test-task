import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  data: null,
  interval: 5,
};

const financeSlice = createSlice({
  name: 'finance',
  initialState,
  reducers: {
    updateData(state, { payload }) {
      state.data = payload;
    },
    updateInterval(state, { payload }) {
      state.interval = payload;
    },
  },
});
export const { updateData, updateInterval } = financeSlice.actions;
export default financeSlice.reducer;
