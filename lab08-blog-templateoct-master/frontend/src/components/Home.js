const React = require('react');

const PostList = require('./PostList');

/**
 * The guts of the home page.
 */
const Home = () => (
  <div>
    {/* The heading area of the page */}
    <div className="blog-header">
      <h1 className="blog-title">An Example of a Blog</h1>
      <p className="lead blog-description">React and Redux and Bootstrap, oh my!</p>
    </div>
    {/* A list of blog posts, including a couple of buttons */}
    <PostList />
  </div>
);

module.exports = Home;
