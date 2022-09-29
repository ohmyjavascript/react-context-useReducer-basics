const postReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_POST':
      return {
        ...state,
        posts: [action.payload.post, ...state.posts],
      };
    case 'DELETE_POST': {
      const filteredPosts = state.posts.filter(
        (p) => p.id !== action.payload.id
      );
      return {
        ...state,
        posts: filteredPosts,
      };
    }
    default:
      return state;
  }
};

export default postReducer;
