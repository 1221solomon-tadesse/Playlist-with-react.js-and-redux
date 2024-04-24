import { takeEvery, put, call } from 'redux-saga/effects';
import {
  FETCH_SONGS_REQUEST,
  CREATE_SONG_REQUEST,
  UPDATE_SONG_REQUEST,
  DELETE_SONG_REQUEST,
  fetchSongsSuccess,
  fetchSongsFailure,
  createSongSuccess,
  createSongFailure,
  updateSongSuccess,
  updateSongFailure,
  deleteSongSuccess,
  deleteSongFailure,
} from '../actions/songAction';
import { fetchSongs, createSong, updateSong, deleteSong } from '../API/songApi';

function* fetchSongsSaga() {
  try {
    const songs = yield call(fetchSongs);
    yield put(fetchSongsSuccess(songs));
  } catch (error) {
    yield put(fetchSongsFailure(error.message));
  }
}

function* createSongSaga(action) {
  try {
    const song = yield call(createSong, action.payload);
    yield put(createSongSuccess(song));
  } catch (error) {
    yield put(createSongFailure(error.message));
  }
}

function* updateSongSaga(action) {
  try {
    const song = yield call(updateSong, action.payload);
    yield put(updateSongSuccess(song));
  } catch (error) {
    yield put(updateSongFailure(error.message));
  }
}

function* deleteSongSaga(action) {
  try {
    yield call(deleteSong, action.payload);
    yield put(deleteSongSuccess(action.payload));
  } catch (error) {
    yield put(deleteSongFailure(error.message));
  }
}

export function* watchFetchSongs() {
  yield takeEvery(FETCH_SONGS_REQUEST, fetchSongsSaga);
}

export function* watchCreateSong() {
  yield takeEvery(CREATE_SONG_REQUEST, createSongSaga);
}

export function* watchUpdateSong() {
  yield takeEvery(UPDATE_SONG_REQUEST, updateSongSaga);
}

export function* watchDeleteSong() {
  yield takeEvery(DELETE_SONG_REQUEST, deleteSongSaga);
}