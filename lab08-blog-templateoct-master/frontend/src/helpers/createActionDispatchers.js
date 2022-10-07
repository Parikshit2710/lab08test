const _ = require('lodash');

module.exports = function() {
  // Get an array of arguments passed into this function
  const actionCreatorsArray = _.assign([], arguments);

  // Return a function that, when given a dispatch function, returns an
  // object containing a bunch of action dispatchers
  return (dispatch) =>
    // Iterate over actionCreatorsArray, which is an array of arrays of action
    // creators
    actionCreatorsArray.reduce((actionDispatchers, actionCreators) => {
      // Add an action dispatcher for each action creator in actionCreators
      Object.keys(actionCreators)
        .filter((name) => (typeof actionCreators[name] === 'function'))
        .forEach((name) => {
          actionDispatchers[name] = function() {
            return dispatch(actionCreators[name].apply(this, arguments));
          };
        });
      return actionDispatchers;
    }, {});
};
