import * as actionType from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  results: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.STORE_RESULT:
      return updateObject(state, {
        results: state.results.concat({ id: new Date(), value: action.result })
      });
    case actionType.DELETE_RESULT:
      const updatedArray = state.results.filter(
        el => el.id !== action.resultElId
      );
      return updateObject(state, { results: updatedArray });
    default:
      return state;
  }
};

export default reducer;
