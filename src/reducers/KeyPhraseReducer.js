import { ADD_KEY, GET_KEY, UNSET_KEY, KEY_CHANGED } from '../actions/types';


const INITIAL_STATE = {
  keyPrase: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_KEY:
      return { ...state, message: 'key added' };
    default:
      return INITIAL_STATE;
  }
};
