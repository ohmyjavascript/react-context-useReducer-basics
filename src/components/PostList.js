import React from 'react';
import Post from './Post';

const PostList = ({ posts, handleDelete }) => {
  return (
    <div className="mb-5">
      <h2 className="mb-3"> Read Posts</h2>
      {posts.map((post) => {
        return (
          <Post
            key={post.id}
            {...post}
            handleDelete={() => handleDelete(post)}
          />
        );
      })}
    </div>
  );
};

export default PostList;
