import React, { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { PostContext } from '../App';

const CreatePost = ({ user, handleNewPost }) => {
  const [content, setContent] = React.useState('');
  const [image, setImage] = React.useState(null);
  const imageRef = React.useRef();
  const postCtx = useContext(PostContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const post = {
      id: uuidv4(),
      content,
      image,
      user,
    };
    postCtx.dispatch({
      type: 'ADD_POST',
      payload: {
        post,
      },
    });
    // Reset
    setContent('');
    imageRef.current.value = '';
  };
  return (
    <div className="container mt-5 mb-5 app-border">
      <form onSubmit={handleSubmit}>
        <h2>Create New Post</h2>
        <div className="form-group mt-5">
          <label>Add Post Content</label>
          <input
            onChange={(e) => setContent(e.target.value)}
            type="text"
            className="form-control"
            value={content}
          />
        </div>
        <div className="form-group">
          <label>Add Image</label>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            className="form-control"
            ref={imageRef}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
