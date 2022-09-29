import React, { useContext } from 'react';
import { PostContext, UserContext } from '../App';

const Post = ({ image, content, user, id }) => {
  const ctx = useContext(UserContext);
  const postCtx = useContext(PostContext);
  return (
    <div className="card mb-3">
      <div className="row no-gutters">
        <div className="col-md-2">
          <img
            style={{ width: 150, height: 100 }}
            src={URL.createObjectURL(image)}
            alt="my images"
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{user}</h5>
            <p className="card-text">{content}</p>
            {ctx.user === user && (
              <button
                onClick={() =>
                  postCtx.dispatch({
                    type: 'DELETE_POST',
                    payload: {
                      id,
                    },
                  })
                }
              >
                Delete
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
