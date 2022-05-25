import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchData = createAsyncThunk(
  'finance',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('https://localhost:4000/');
      const rates = response.json();
      return rates;
    } catch (error) {
      throw rejectWithValue(error);
    }
  }
);
const operations = { fetchData };
export default operations;
