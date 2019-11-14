import React, { Component, useCallback } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
// import * as actionCreators from '../../store/actions/index';
import {
  STORE_RESULT,
  DELETE_RESULT,
  INCREMENT,
  DECREMENT,
  ADD,
  SUBTRACT,
} from '../../store/actions/actionTypes';

export const Counter = () => {
  const dispatch = useDispatch();

  const counter = useSelector(state => state.counter.counter);
  const storedRes = useSelector(state => state.results.results);
  const onIncrement = useCallback(() => dispatch({ type: INCREMENT }), [
    dispatch,
  ]);
  const onDecrement = useCallback(() => dispatch({ type: DECREMENT }), [
    dispatch,
  ]);
  const onAdd = useCallback(() => dispatch({ type: ADD, value: 10 }), [
    dispatch,
  ]);
  const onSubtract = useCallback(
    () => dispatch({ type: SUBTRACT, value: 15 }),
    [dispatch]
  );

  return (
    <div>
      <CounterOutput value={counter} />
      <CounterControl label="Increment" clicked={onIncrement} />
      <CounterControl label="Decrement" clicked={onDecrement} />
      <CounterControl label="Add 10" clicked={onAdd} />
      <CounterControl label="Subtract 15" clicked={onSubtract} />
      <hr></hr>
      <button onClick={() => dispatch({ type: STORE_RESULT, result: counter })}>
        Store Result
      </button>
      <ul>
        {storedRes.map(storedResult => (
          <li
            onClick={() =>
              dispatch({ type: DELETE_RESULT, resultElId: storedResult.id })
            }
            key={storedResult.id}
          >
            {storedResult.val}
          </li>
        ))}
      </ul>
    </div>
  );
};

// class Counter extends Component {
//   state = {
//     counter: 0,
//   };

// const counterChangedHandler = (action, value) => {
//   switch (action) {
//     case 'inc':
//       this.setState(prevState => {
//         return { counter: prevState.counter + 1 };
//       });
//       break;
//     case 'dec':
//       this.setState(prevState => {
//         return { counter: prevState.counter - 1 };
//       });
//       break;
//     case 'add':
//       this.setState(prevState => {
//         return { counter: prevState.counter + value };
//       });
//       break;
//     case 'sub':
//       this.setState(prevState => {
//         return { counter: prevState.counter - value };
//       });
//       break;
//   }
// };

// const mapStateToProps = state => {
//   return {
//     ctr: state.counter.counter,
//     storedResults: state.results.results,
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     onIncrementCounter: () => dispatch(actionCreators.increment()),
//     onDecrementCounter: () => dispatch(actionCreators.decrement()),
//     onAdd: () => dispatch(actionCreators.add(10)),
//     onSubtract: () => dispatch(actionCreators.subtract(15)),
//     onStoreResult: result => dispatch(actionCreators.storeResult(result)),
//     onDeleteResult: id => dispatch(actionCreators.deleteResult(id)),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
