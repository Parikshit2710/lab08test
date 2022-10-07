# blog-frontend

This repository contains the frontend interface for a simple blog application.

## Project structure

```
.
├── .babelrc          # Babel settings for ES6 -> ES5 conversion
├── dist              # Packaged clinet-side files are output to this directory
├── Dockerfile        # Definition of the Docker image
├── gulpfile.js       # Gulp tasks are defined here
├── package.json      # Description of this project, including dependencies
├── README.md         # You are here
├── src               # Project source files
│   ├── app.js        # Express application definition
│   ├── client.js     # Client entrypoint (web browser)
│   ├── components    # React components
│   ├── helpers       # Miscellaneous helpers
│   ├── reducers      # Redux reducers
│   ├── server.js     # Server entrypoint (Node.js)
│   └── styles        # Custom CSS styles
├── start.sh          # Script for starting the server
└── vendor            # Unpackaged dependencies are stored here
```

## Dependencies

In this section we will go through the project's dependencies and why we need
them.

### Runtime

These dependencies are used in the application itself, either on the server
(Node.js), on the client (web browser) or both.

#### Express

* express

Express is a "fast, unopinionated, minimalist web framework for Node.js".
This is what we use to create the the web server and handle the basic HTTP
request/response loop.

#### ES6 support

* babel-core
* babel-preset-es2015

Babel is a transpiler which converts code written according to the new
ES6 Javascript language specification to older Javascript with more
widespread support.

For example, Babel will take...

```js
(a, b) => a + b
```

...and turn it into...

```js
(function (a, b) {
  return a + b;
});
```

#### Bootstrap

* bootstrap

Bootstrap is a popular frontend framework for designing web interfaces that
work on a variety of screen resolutions. We use it for the nice CSS styles
it provides for us.

#### Lodash

* lodash

Lodash is a library of helpful utility functions.

One particular function from Lodash that we use a lot is
[`assign`](https://lodash.com/docs#assign).

#### Request

* request

Request is a server-side library for sending HTTP requests.

#### Moment

* moment

Moment is a Javascript library for working with time and date values. It can
take a Date object and express it in words, for example "10 days ago".

#### React

* react
* react-dom
* react-addons-css-transition-group
* babel-preset-react

React is a Javascript library for building user interfaces.

#### Redux

* redux
* react-redux
* redux-thunk

Redux is used to manage the state behind React.

### Development

These dependencies are not required by the running production version of
the application at all, but are either useful during development or are used
to process and package files for production.

#### Nodemon

* nodemon

Nodemon is used to watch source files and reload the server when they change.
This means that changes to server code will take effect immediately.

#### Gulp and friends

* gulp

Gulp lets us run tasks in our project, such as bundling up Javascript, running
tests and so forth.

* gulp-if
* gulp-util
* del
* glob
* vinyl-buffer
* vinyl-source-stream
* ordered-merge-stream

General-purpose helper libraries and utilities used in the Gulpfile.

* gulp-concat
* gulp-concat-css
* gulp-sourcemaps
* gulp-uglify

Gulp libraries for processing Javascript and CSS files.

#### Browserify and friends

* browserify
* babelify
* envify
* watchify

Browserify and associated plugins are used to bundle up Javascript files
that can be run in the user's web browser.

#### Redux devtools

* redux-devtools
* redux-devtools-dock-monitor
* redux-devtools-log-monitor

Redux devtools is used to add development tools to the web interface, which
make debugging the application easier.
