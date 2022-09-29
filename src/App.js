import './App.css';
import React, { useContext, useEffect } from 'react';
import Login from './components/Login';
import Header from './components/Header';
import CreatePost from './components/CreatePost';
import PostList from './components/PostList';
import postReducer from './postReducer';

export const UserContext = React.createContext({
  user: null,
  login: () => {},
  logout: () => {},
});

export const PostContext = React.createContext({
  posts: [],
  dispatch: () => {},
});

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [userName, setUserName] = React.useState('');
  const postCtx = useContext(PostContext);
  const [state, dispatch] = React.useReducer(postReducer, postCtx);

  useEffect(() => {
    document.title = userName ? `${userName}'s feed` : 'Please Login';
  }, [userName]);
  const handleLogin = (name) => {
    setUserName(name);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setUserName('');
    setIsLoggedIn(false);
  };

  // const handleDelete = (post) => {
  //   const filtered = state.posts.filter((p) => p.id !== post.id);
  //   // setPosts(filtered);
  // };

  // const handleNewPost = React.useCallback(
  //   (post) => {
  //     //setPosts([post, ...posts]);
  //   },
  //   [state.posts]
  // );

  if (!isLoggedIn) {
    return <Login handleLogin={handleLogin} />;
  }

  return (
    <div className="container mt-5">
      <PostContext.Provider
        value={{
          state,
          dispatch,
        }}
      >
        <UserContext.Provider
          value={{
            user: userName,
            login: handleLogin,
            logout: handleLogout,
          }}
        >
          <Header />
          <CreatePost user={userName} />
          {state.posts.length > 0 ? (
            <PostList posts={state.posts} />
          ) : (
            <h2> No posts! Start adding them..</h2>
          )}
        </UserContext.Provider>
      </PostContext.Provider>
    </div>
  );
}

export default App;
