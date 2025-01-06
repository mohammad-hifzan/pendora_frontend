import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = {
  updatedManga: [],
  newManga: [],
  popularManga: [],
  bookmark: [],
  ongoing: [],
  completed: [],
};

const mangaSlice = createSlice({
  name: 'manga',
  initialState,
  reducers: {
    setUpdatedManga(state, action) {
      state.updatedManga = action.payload;
    },
    setNewManga(state, action) {
      state.newManga = action.payload;
    },
    setPopularManga(state, action) {
      state.popularManga = action.payload;
    },
    setBookmark(state, action) {
      state.bookmark = action.payload
    },
    setOngoing(state, action) {
      state.ongoing = action.payload
    },
    setCompleted(state, action) {
      state.completed = action.payload
    }
  },
});

// Export actions
export const { setUpdatedManga, setNewManga, setPopularManga, setBookmark, setOngoing, setCompleted } = mangaSlice.actions;
export default mangaSlice.reducer;
