import { createSlice } from '@reduxjs/toolkit';
import {
  fetchSongsSuccess,
  fetchSongsFailure,
  createSongSuccess,
  createSongFailure,
  updateSongSuccess,
  updateSongFailure,
  deleteSongSuccess,
  deleteSongFailure,
} from '../actions/songAction';

const initialState = {
  songs: [],
  loading: false,
  error: null,
};

const songSlice = createSlice({
  name: 'songs',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSongsSuccess, (state, action) => {
        state.songs = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchSongsFailure, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(createSongSuccess, (state, action) => {
        state.songs.push(action.payload);
        state.loading = false;
        state.error = null;
      })
      .addCase(createSongFailure, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateSongSuccess, (state, action) => {
        const index = state.songs.findIndex((song) => song.id === action.payload.id);
        state.songs[index] = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(updateSongFailure, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteSongSuccess, (state, action) => {
        state.songs = state.songs.filter((song) => song.id !== action.payload);
        state.loading = false;
        state.error = null;
      })
      .addCase(deleteSongFailure, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default songSlice.reducer;