import { SEARCH_UPDATE } from '../actions/types';

const INITIAL_STATE = { searchText: '' };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
      case SEARCH_UPDATE:
        return { ...state, searchText: action.payload }
    default:
      return state;
  }
}
