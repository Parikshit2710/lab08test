const Redux = require('redux');

const posts = require('./posts');
const time = require('./time');

module.exports = Redux.combineReducers({
  posts,
  time
});
