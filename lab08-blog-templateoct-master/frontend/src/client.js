const React = require('react');
const ReactDOM = require('react-dom');

const createStore = require('./helpers/createStore');
const Root = React.createFactory(require('./components/Root'));

const moment = require('moment');
const timeActionCreators = require('./reducers/time');

const combinedReducers = require('./reducers');

// TODO Section 6: Change code below to get data from the API

window.main = () => {
  // Create root React component with Redux store
  const store = createStore();
  const rootComponent = Root({ store });

  // Mount React root component in DOM
  const mountPoint = document.getElementById('root');
  ReactDOM.render(rootComponent, mountPoint);

  window.setInterval(() => {
    const now = moment().format();
    store.dispatch(timeActionCreators.setCurrentTime(now));
  }, 10000);
}
