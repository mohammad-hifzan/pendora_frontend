import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authenticationSlice';
import mangaReducer from '../mangaReducers/mangas'

// Load persisted state from localStorage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem('userState');
    if (serializedState === null) {
      return undefined; // No persisted state found
    }
    return JSON.parse(serializedState); // Deserialize and return the state
  } catch (err) {
    return undefined;
  }
};

// Save state to localStorage
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('userState', serializedState);
  } catch (err) {
    console.error('Failed to save state:', err);
  }
};

// Load persisted state into Redux store
const persistedState = loadState();

// Configure store with persisted state and auth reducer
const store = configureStore({
  reducer: {
    auth: authReducer, // Add any other reducers here
    manga: mangaReducer,
  },
  preloadedState: persistedState, // Load persisted state into the store
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false, // Disable serializable state check if needed
  }),
});

// Subscribe to store changes to save user state in localStorage
store.subscribe(() => {
  const { auth } = store.getState(); // Save only the auth slice to localStorage
  saveState({ auth });
});

export default store;