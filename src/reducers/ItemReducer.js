import { ITEM_UPDATE,
         ITEM_CREATE,
         ITEM_SAVING,
         EMPTY_FIELD_ERROR,
         RESET_FORM } from '../actions/types';

const INITIAL_STATE = {
  site: '',
  login: '',
  sitePassword: '',
  error: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ITEM_UPDATE:
      return { ...state, error: '', [action.payload.prop]: action.payload.value };
    case ITEM_CREATE:
      return INITIAL_STATE;
    case ITEM_SAVING :
      return INITIAL_STATE;
    case EMPTY_FIELD_ERROR:
      return { ...state, error: action.payload };
    case RESET_FORM:
      return { INITIAL_STATE };
    default:
      return state;
  }
};
