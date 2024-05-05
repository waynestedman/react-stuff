import React, { useState } from 'react';
// import './NewsFeed.css'; // You can create your CSS file for styling

const Newsfeed = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: 'John Doe',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      likes: 10,
    },
    {
      id: 2,
      author: 'Jane Smith',
      content: 'Pellentesque nec odio sit amet eros euismod tempus.',
      likes: 15,
    },
  ]);

  const handleLike = (postId) => {
    setPosts(
      posts.map((post) =>
        post.id === postId ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  return (
    <div className="news-feed">
      <h3>Newsfeed</h3>
      {posts.map((post) => (
        <div key={post.id} className="post">
          <div className="post-header">
            <span className="post-author">{post.author}</span>
          </div>
          <p className="post-content">{post.content}</p>
          <div className="post-actions">
            <button onClick={() => handleLike(post.id)}>Like</button>
            <span className="likes-count">{post.likes} Likes</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Newsfeed;
