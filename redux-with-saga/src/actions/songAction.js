export const FETCH_SONGS_REQUEST = 'FETCH_SONGS_REQUEST';
export const FETCH_SONGS_SUCCESS = 'FETCH_SONGS_SUCCESS';
export const FETCH_SONGS_FAILURE = 'FETCH_SONGS_FAILURE';

export const CREATE_SONG_REQUEST = 'CREATE_SONG_REQUEST';
export const CREATE_SONG_SUCCESS = 'CREATE_SONG_SUCCESS';
export const CREATE_SONG_FAILURE = 'CREATE_SONG_FAILURE';

export const UPDATE_SONG_REQUEST = 'UPDATE_SONG_REQUEST';
export const UPDATE_SONG_SUCCESS = 'UPDATE_SONG_SUCCESS';
export const UPDATE_SONG_FAILURE = 'UPDATE_SONG_FAILURE';

export const DELETE_SONG_REQUEST = 'DELETE_SONG_REQUEST';
export const DELETE_SONG_SUCCESS = 'DELETE_SONG_SUCCESS';
export const DELETE_SONG_FAILURE = 'DELETE_SONG_FAILURE';

export const fetchSongsRequest = () => ({ type: FETCH_SONGS_REQUEST });
export const fetchSongsSuccess = (songs) => ({ type: FETCH_SONGS_SUCCESS, payload: songs });
export const fetchSongsFailure = (error) => ({ type: FETCH_SONGS_FAILURE, payload: error });

export const createSongRequest = (song) => ({ type: CREATE_SONG_REQUEST, payload: song });
export const createSongSuccess = (song) => ({ type: CREATE_SONG_SUCCESS, payload: song });
export const createSongFailure = (error) => ({ type: CREATE_SONG_FAILURE, payload: error });

export const updateSongRequest = (song) => ({ type: UPDATE_SONG_REQUEST, payload: song });
export const updateSongSuccess = (song) => ({ type: UPDATE_SONG_SUCCESS, payload: song });
export const updateSongFailure = (error) => ({ type: UPDATE_SONG_FAILURE, payload: error });

export const deleteSongRequest = (id) => ({ type: DELETE_SONG_REQUEST, payload: id });
export const deleteSongSuccess = (id) => ({ type: DELETE_SONG_SUCCESS, payload: id });
export const deleteSongFailure = (error) => ({ type: DELETE_SONG_FAILURE, payload: error });