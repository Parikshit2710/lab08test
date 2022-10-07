const _ = require('lodash');
const api = require('../helpers/api');

// Action type constants
const INSERT = 'blog-frontend/posts/INSERT';
const CHANGE = 'blog-frontend/posts/CHANGE';
const REMOVE = 'blog-frontend/posts/REMOVE';

// The initial state of blog post data
const initialState = {
  visiblePosts: [
    { id: 5,
      title: "From Redux Store: Companies that make computers",
      content: "Dell Apple Toshiba Acer",
      createdAt: "2016-09-11T23:26:36.000Z",
      updatedAt: "2016-09-11T23:26:36.000Z"
    },
    {id: 4,
     title: "From Redux Store: Dell",
     content: "A company that makes computers ",
     createdAt: "2016-09-11T23:18:08.000Z",
     updatedAt: "2016-09-11T23:18:08.000Z"
    },
    { id: 3,
      title: "From Redux Store: Lego Nexo Knights",
      content: "The best lego toy set in the world.",
      createdAt: "2016-09-11T07:47:30.000Z",
      updatedAt: "2016-09-11T07:47:30.000Z"
    },
    { id: 2,
      title: "From Redux Store: React",
      content: "An awesome JavaScript library from …",
      createdAt: "2016-09-11T07:46:55.000Z",
      updatedAt: "2016-09-11T07:46:55.000Z"
    },
    { id: 1,
      title: "From Redux Store: Deep Learning",
      content: "The use of neural networks to learn…",
      createdAt: "2016-09-11T07:46:28.000Z",
      updatedAt: "2016-09-11T07:46:28.000Z"
    }

  ]
};

// Function which takes the current data state and an action,
// and returns a new state
function reducer(state, action) {
  state = state || initialState;
  action = action || {};

  switch(action.type) {
    // Inserts new posts into the local store
    case INSERT: {


      // Add in the new posts
      // Notice that we do not need to increment the post id. Since the post that we
      // are putting in is one that is returned by the api server which already has
      // the id incremented.
      const unsortedPosts = _.concat(state.visiblePosts, action.posts);

      const visiblePosts = _.orderBy(unsortedPosts, 'createdAt','desc');

      // Return updated state
      return _.assign({}, state, { visiblePosts} );
    }
    // Changes a single post's data in the local store
    case CHANGE: {
      const visiblePosts = _.clone(state.visiblePosts);
      const changedIndex = _.findIndex(state.visiblePosts, {id: action.post.id })
      visiblePosts[changedIndex] = action.post;
      return _.assign({}, state, { visiblePosts });
    }

    // Removes a single post from the visible post list
    case REMOVE: {
      const visiblePosts = _.reject(state.visiblePosts, {id: action.id});
      return _.assign({}, state, { visiblePosts });
    }

    default: return state;
  }
}

// Now we define a whole bunch of action creators

// Inserts posts into the post list
reducer.insertPosts = (posts) => {
  return { type: INSERT, posts };
};

// Removes a post from the visible post list
reducer.removePost = (id) => {
  return { type: REMOVE, id };
};

// Attempts to delete a post from the server and removes it from the visible
// post list if successful
reducer.deletePost = (postId) => {
   // TODO Section 8: Add code to perform delete
};

// Attempts to update a post on the server and updates local post data if
// successful
reducer.savePost = (editedPost, callback) => {
  return (dispatch) => {
    api.put('/posts/' + editedPost.id, editedPost).then((post) => {
      // Saves local post.
      dispatch(reducer.changePost(post));
      callback();
    }).catch(() => {
      alert('Failed to save post.  Are all of the fields filled in correctly?');
    });
  };
};

// Attempts to create a post on the server and inserts it into the local post
// list if successful
reducer.createPost = (newPost, callback) => {
  return (dispatch) => {
    api.post('/posts', newPost).then((post) => {
      // This post is one that the store returns us! It has post id incremented to the next available id
      dispatch(reducer.insertPosts([post]));
      callback();
    }).catch(() => {
      alert('Failed to create post. Are all of the fields filled in correctly?');
    });
  };
};

// Changes local post data
reducer.changePost = (post) => {
  return { type: CHANGE, post };
};

// Attempts to load more posts from the server and inserts them into the local
// post list if successful
reducer.loadMorePosts = (callback) => {
  return (dispatch, getState) => {
    const state = _.assign({}, initialState, getState().posts);

    let path = '/posts';
    if (state.visiblePosts.length > 0) {
        const oldestPost =_.last(state.visiblePosts);
        path = '/posts?olderThan=' + oldestPost.createdAt;
    }
    api.get(path).then((newPosts) => {
      dispatch(reducer.insertPosts(newPosts));
      callback();
    }).catch(() => {
      alert('Failed to load more posts');
      callback('Failed to load more posts');
    });

  };


};

// Export the action creators and reducer
module.exports = reducer;
