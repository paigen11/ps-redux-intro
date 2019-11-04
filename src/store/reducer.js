const initialState = {
  counter: 0,
  results: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        // update the state immutably with the spread operator
        ...state,
        counter: state.counter + 1,
      };
    case 'DECREMENT':
      return {
        ...state,
        counter: state.counter - 1,
      };
    case 'ADD':
      return {
        ...state,
        counter: state.counter + action.value,
      };
    case 'SUBTRACT':
      return {
        ...state,
        counter: state.counter - action.value,
      };
    case 'STORE_RESULT':
      return {
        ...state,
        results: state.results.concat({ id: new Date(), val: state.counter }),
      };
  }
  return state;
};

export default reducer;
