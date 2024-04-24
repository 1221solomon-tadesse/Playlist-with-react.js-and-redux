import { all } from 'redux-saga/effects';
import { watchFetchSongs } from './songSaga';
import { watchCreateSong } from './songSaga';
import { watchUpdateSong } from './songSaga';
import { watchDeleteSong } from './songSaga';

export default function* rootSaga() {
  yield all([
    watchFetchSongs(),
    watchCreateSong(),
    watchUpdateSong(),
    watchDeleteSong(),
  ]);
}