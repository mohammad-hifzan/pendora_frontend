// actions
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
const API_URL = process.env.REACT_APP_BACKEND_URL;

// export const setCurrentCompany = (company) => ({
//   type: 'SET_CURRENT_COMPANY',
//   payload: company,
// });

export const fetchCurrentCompany = createAsyncThunk(
  'company/companySlice',
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get(`${API_URL}/v2/current_company`, { withCredentials: true });
      console.log("current company: " + res.data?.current_company?.name);
      return res.data.current_company;
    } catch (err) {
      return rejectWithValue('not set');
    }
  }
);
// reducer
const companySlice = createSlice({
  name: 'company',
  initialState: {
    currentCompany: null,
    loading: true,
    error: null,
  },
  reducers: {
    clearCompany: (state) => {
      state.currentCompany = null;
      state.loading = false;
      state.error = null;
    },
    setCurrentCompany: (state, action) => {
      state.currentCompany = action.payload;
      state.loading = false;
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrentCompany.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCurrentCompany.fulfilled, (state, action) => {
        state.currentCompany = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchCurrentCompany.rejected, (state, action) => {
        state.currentCompany = null;
        state.loading = false;
        state.error = action.payload;
      });
  },
});


export const { clearCompany, setCurrentCompany } = companySlice.actions;
export default companySlice.reducer;