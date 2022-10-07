const React = require('react');
const _ = require('lodash');

/**
 * A form for editing a blog post.
 */
class PostEdit extends React.Component {
  constructor(props) {
    super(props);
    const post = props.post || {};

    this.state = {
      title: post.title || '',
      content: post.content || ''
    };
  }

  render() {
    const revertAndStopEditing = (event) => {
      event.preventDefault();
      this.props.onCancel();
    };

    const submitAndStopEditing = (event) => {
      event.preventDefault();
      // Creates a new post object and saves it.
      const editedPost = _.assign({}, this.props.post, {
        title: this.state.title,
        content: this.state.content
      });
      this.props.onSave(editedPost);
    };

    const onTitleChange = (event) => {
      this.setState({ title: event.target.value });
    };

    const onContentChange = (event) => {
      this.setState({ content: event.target.value });
    };

    return (
      <form className="blog-post">
        {/* Title field */}
        <div className="form-group">
          <input className="form-control input-lg" value={this.state.title}
            placeholder="Post title" onChange={onTitleChange}
          />
        </div>
        {/* Content field */}
        <div className="form-group">
          <textarea
            className="form-control"
            style={{ height: 300 }}
            value={this.state.content}
            onChange={onContentChange}
          />
        </div>
        {/* Save button */}
        <button className="btn btn-default pull-right"
          onClick={submitAndStopEditing}
        >
          Save
        </button>
        {/* Cancel button */}
        <button className="btn btn-default pull-right"
          style={{ marginRight: '12px' }}
          onClick={revertAndStopEditing}
        >
          Cancel
        </button>
      </form>
    );
  }
}

module.exports = PostEdit;
