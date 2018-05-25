import { ITEMS_FETCH_SUCCESS, LOADING, LOGOUT_USER } from '../actions/types';

const INITIAL_STATE = { loading: false };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ITEMS_FETCH_SUCCESS:
      return { ...state, loading: false, items: action.payload };
    case LOADING:
      return { ...state, loading: true };
    case LOGOUT_USER:
      return INITIAL_STATE;
    default:
      return state;
  }
}
