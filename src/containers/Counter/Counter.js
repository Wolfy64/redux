import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionType from '../../store/actions';

class Counter extends Component {
  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl
          label="Increment"
          clicked={this.props.onIncrementCounter}
        />
        <CounterControl
          label="Decrement"
          clicked={this.props.onDecrementCounter}
        />
        <CounterControl label="Add 5" clicked={this.props.onAddCounter} />
        <CounterControl
          label="Subtract 5"
          clicked={this.props.onSubtractCounter}
        />
        <hr />
        <button onClick={() => this.props.onStoreResults(this.props.ctr)}>Store Result</button>
        <ul>
          {this.props.storedResults.map(strResult => (
            <li key={strResult.id} onClick={() => this.props.onDeleteResult(strResult.id)}>
              {strResult.value}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapToStateToProps = state => {
  return {
    ctr: state.ctr.counter,
    storedResults: state.res.results
  };
};

const mapDispatchToProps = () => dispatch => {
  return {
    onIncrementCounter: () => dispatch({ type: actionType.INCREMENT }),
    onDecrementCounter: () => dispatch({ type: actionType.DECREMENT }),
    onAddCounter: () => dispatch({ type: actionType.ADD, value: 5 }),
    onSubtractCounter: () => dispatch({ type: actionType.SUBTRACT, value: 5 }),
    onStoreResults: (results) => dispatch({ type: actionType.STORE_RESULT, results: results }),
    onDeleteResult: (id) => dispatch({ type: actionType.DELETE_RESULT, resultElId: id })
  };
};

export default connect(
  mapToStateToProps,
  mapDispatchToProps
)(Counter);