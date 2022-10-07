const React = require('react');
const PostEdit = require('./PostEdit');

/**
 * A button which expands into a form for writing a new post.
 */
class PostNew extends React.Component {
  constructor(props) {
    super(props);
    // Set initial internal state for this component
    this.state = { editing: false };
  }

  render() {
    const openEdit = () => {
      this.setState({ editing: true });
    };

    const closeEdit = () => {
      this.setState({ editing: false });
    };

    const createPost = (newPost) => {
      this.props.createPost(newPost, (err) => {
        if(!err) closeEdit();
      });
    };

    // TODO Section 7: Write code to switch to edit mode when editing is clicked

    return (
      <button className="blog-load-more btn btn-primary btn-lg"
        onClick={ openEdit }
      >
        Write new post
      </button>
    );
  }
}

module.exports = PostNew;
