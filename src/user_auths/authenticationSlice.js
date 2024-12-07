import { createSlice } from '@reduxjs/toolkit';

// Get initial state from sessionStorage

const initialState = {
  user: null,
  isAuthenticated: false,  // true if token exists
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    signup: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

// Export the actions
export const { login, signup, logout } = authSlice.actions;

// Export the reducer to be used in the store
export default authSlice.reducer;
