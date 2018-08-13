const redux = require('redux');
const createStore = redux.createStore;

const initaialState = {
  counter: 0
};

// Reducer
const rootReducer = (state = initaialState, action) => {
  return state;
};

// Store
const store = createStore(rootReducer);
console.log('[getState]', store.getState());

// Dispatching Action

// Subscription
