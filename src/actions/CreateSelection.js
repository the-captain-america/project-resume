
import {
  CREATE_SELECTION,
  SELECTIONS_LIST_ERROR,
  SELECTIONS_LIST_FETCH,
  SELECTIONS_LIST_SUCCESS
} from './types';

// export function CreateSelection(data) {
//   console.log('this is data from CreateSelection Action: ', data);
//     return {
//         type: CREATE_SELECTION,
//         payload: data,
//     };
// }
//

const SelectionError = (error) => {
  return  {
    type: SELECTIONS_LIST_ERROR,
    error
  };
}

const SelectionSuccess = () => {
  return  {
    type: SELECTIONS_LIST_SUCCESS
  };
};

export const SelectionFetch = (data) => {
  return (dispatch) => {
    dispatch({
      type: SELECTIONS_LIST_FETCH,
      payload: data
    });
  };
};
