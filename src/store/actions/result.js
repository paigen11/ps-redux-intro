import * as actionTypes from './actionTypes';

export const saveResult = result => {
  // const updatedResult = result * 2;
  return {
    type: actionTypes.STORE_RESULT,
    result: result,
  };
};

export const storeResult = result => {
  // how to handle async actions with redux-thunk
  // this is a utility step in between running the actual action creator
  // getState is a tool not to be overused - try to pass the data it needs instead
  return (dispatch, getState) => {
    setTimeout(() => {
      // const oldCounter = getState().counter.counter;
      // console.log(oldCounter);
      dispatch(saveResult(result));
    }, 2000);
  };
};

export const deleteResult = resultId => {
  return {
    type: actionTypes.DELETE_RESULT,
    resultElId: resultId,
  };
};
