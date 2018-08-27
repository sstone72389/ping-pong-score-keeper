import { FETCH_ROSTER } from '../actions/types';

export default function (state = null, action) {
  switch (action.type) {
    case FETCH_ROSTER:
      return action.payload;
    default:
      return state;
  }
}
