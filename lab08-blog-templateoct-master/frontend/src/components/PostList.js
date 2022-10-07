const React = require('react');
const ReactRedux = require('react-redux');
const _ = require('lodash');

const postsActionCreators = require('../reducers/posts');
const createActionDispatchers = require('../helpers/createActionDispatchers');
const Post = require('./Post');
const PostNew = require('./PostNew');

/**
 * A list of blog posts, along with buttons for writing a new post
 * and loading more posts.
 */
class PostList extends React.Component {
  constructor(props) {
    super(props);
    // Set initial internal state for this component
    this.state = { loading: false };
  }

  render() {
    const onLoadButtonClick = () => {
      // If we are not already in the process of loading posts,
      // start loading more posts.
      if(!this.state.loading) {
        this.setState({ loading: true });
        this.props.loadMorePosts(() => {
          this.setState({ loading: false });
        });
      }
    };

    // Function which creates a post component from a post ID
    const createPostComponent = (currentPost) => {
      /* TODO Section 8: Add code for delete */
      return (
        <Post
          key={currentPost.id}
          post={currentPost}
          time={this.props.time}
          savePost={this.props.savePost}
        />
      );
    };

    return (
      <div className="row">
        <div className="blog-main">
          {/* Button for writing a new post */}
          <PostNew
            createPost={this.props.createPost}
          />

          {/* TODO Section 3: Write code to list all the posts */}

          {/* Button for loading more posts */}
          <button className="blog-load-more btn btn-default btn-lg"
            onClick={onLoadButtonClick}
            disabled={this.state.loading}
          >
            {this.state.loading ? 'Loading...' : 'Load more posts'}
          </button>
        </div>
      </div>
    );
  }
}

// Connect PostList component to the Redux store
const PostListContainer = ReactRedux.connect(
  // Map store state to props
  (state) => ({
    posts: state.posts,
    time: state.time
  }),
  createActionDispatchers(postsActionCreators)
)(PostList);

module.exports = PostListContainer;
