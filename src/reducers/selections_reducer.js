import {
  CREATE_SELECTION
} from '../actions/types';

const INITIAL_STATE = {
  selectionItems: {}
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_SELECTION:
      return { ...state, selectionItems: action.payload };
    default:
      return state;
  }
};
