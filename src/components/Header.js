import React, { useContext } from 'react';
import { UserContext } from '../App';

const Header = () => {
  const ctx = useContext(UserContext);
  return (
    <nav className="navbar navbar-light bg-light">
      <span className="navbar-text">Hello {ctx.user} !!</span>
      <button className="btn btn-primary" onClick={ctx.logout}>
        Logout
      </button>
    </nav>
  );
};

export default Header;
