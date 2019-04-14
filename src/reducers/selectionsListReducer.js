import {
  SELECTIONS_LIST_FETCH,
} from '../actions/types';


const INITIAL_STATE = {
  cards: {}
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SELECTIONS_LIST_FETCH:
      return { ...state, cards: action.payload };
    default:
      return state;
  }
};
