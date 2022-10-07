const React = require('react');
const moment = require('moment');

/**
 * Render edit/delete buttons and post timestamp.
 *
 * List of props: post, time, onEdit, onDelete
 */
const PostMeta = (props) => {
  return (
    <div className="blog-post-meta">
      <a role="button" title="Edit post"
        style={{ paddingRight: '8px' }}
        onClick={ props.onEdit }
      >
        <span className="fa fa-edit" />
      </a>

      {/* TODO Section 8: Add a delete button */}

      { moment(props.post.createdAt).from(props.time.now) }
    </div>
  );
};

/**
 * A read-only view of a blog post.
 * This is a stateless functional component.
 * It takes props as its args and returns what the render method would return.
 *
 * List of props: post, time, onEdit, onDelete
 */
const PostView = (props) => {
  return (
    <div className="blog-post">
      <h2 className="blog-post-title">{props.post.title}</h2>

      {/* TODO Section 4: Display blog metadata */}

      {/* TODO Section 4: Display blog content */}
    </div>
  );
};

module.exports = PostView;
