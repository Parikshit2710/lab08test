const path = require('path');
const express = require('express');
const Youch = require('youch');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const _ = require('lodash');
const moment = require('moment');

const api = require('./helpers/api');
const createStore = require('./helpers/createStore');
const Root = React.createFactory(require('./components/Root'));
const combinedReducers = require('./reducers');

// Create a new Express app
const app = express();

// Serve up our static assets from 'dist'
app.use('/assets', express.static(path.join(__dirname,
        '..', 'dist')));

// Serve up font-awesome fonts
app.use('/assets/font-awesome/fonts', express.static(
  path.dirname(require.resolve('font-awesome/fonts/FontAwesome.otf'))
));

// Set up the root route
app.get('/', (req, res, next) => {
  // TODO Section 6: Uncomment this when you want to get the data from the API.
  //
  // api.get('/posts').then((posts) => {

    // TODO Section 6: Change code below to get data from the API
    // TODO Section 9: Change code below to use universal JavaScript

    const htmlContent = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <title>My blog</title>
          <link rel="stylesheet" type="text/css" href="/assets/css/app.css">
            <script src="/assets/js/vendor.js"></script>
        </head>
        <body>
          <div class="container" id="root"></div>
          <script src="/assets/js/app.js"></script>
          <script>window.main();</script>
        </body>
      </html>`;

    // Respond with the complete HTML page
    res.send(htmlContent);

  // TODO Section 6: Uncomment this when you want to get the data from the API.
  //
  // }).catch(next);
});

// Catch-all for handling errors.
app.use((err, req, res, next) => {
  console.error(err.stack);
  if(res.headersSent) {
    return next(err);
  }
  const youch = new Youch(err, req);
  youch.toHTML().then(html => res.send(html));
});

module.exports = app;
