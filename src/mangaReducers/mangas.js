import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = {
  updatedManga: [],
  newManga: [],
  popularManga: [],
  bookmark: [],
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
    }
  },
});

// Export actions
export const { setUpdatedManga, setNewManga, setPopularManga, setBookmark } = mangaSlice.actions;
export default mangaSlice.reducer;
