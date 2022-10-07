const Redux = require('redux');
const reduxThunk = require('redux-thunk').default;
const combinedReducers = require('../reducers');

let enhancer;

if(process.env.NODE_ENV === 'production') {
  enhancer = Redux.applyMiddleware(reduxThunk)
} else {
  const DevTools = require('../components/DevTools');

  enhancer = Redux.compose(
    // Enables middleware
    Redux.applyMiddleware(reduxThunk),
    // Enables DevTools
    DevTools.instrument()
  );
}

module.exports = initialState => {
  const store = Redux.createStore(combinedReducers, initialState, enhancer);
  return store;
}
