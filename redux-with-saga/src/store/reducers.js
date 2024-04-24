import { combineReducers } from 'redux';
import songReducer from './songReducers';

const rootReducer = combineReducers({
  songs: songReducer,
});

export default rootReducer;