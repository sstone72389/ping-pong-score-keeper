import { combineReducers } from 'redux';
import authReducer from './authReducer';
import rosterReducer from './rosterReducer';
import addPlayerReducer from './addPlayerReducer';

export default combineReducers({
  auth: authReducer,
  roster: rosterReducer,
  playerAdded: addPlayerReducer,
});
