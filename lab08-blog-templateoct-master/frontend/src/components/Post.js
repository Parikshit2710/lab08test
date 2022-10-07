const React = require('react');

const PostEdit = require('./PostEdit');
const PostView = require('./PostView');

class Post extends React.Component {
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

    const saveEdit = (editedPost) => {
      this.props.savePost(editedPost, (err) => {
        if(!err) closeEdit();
      });
    };

    // TODO Section 8: Add code for delete

    if(this.state.editing) {
      // Render component for editing the post
      return (
        <PostEdit
          post={this.props.post}
          onSave={saveEdit}
          onCancel={closeEdit}
        />
      );
    }
    // Render read-only view of the post
    // TODO Section 8: add code for delete
    return (
      <PostView
        post={this.props.post}
        time={this.props.time}
        onEdit={openEdit}
      />
    );
  }
}

// Export the Post component
module.exports = Post;
