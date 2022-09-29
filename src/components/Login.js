import React from 'react';

const Login = ({ handleLogin }) => {
  const [name, setName] = React.useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(name);
  };
  return (
    <>
      <form className="container mt-5">
        <h2>Login Form</h2>
        <div className="form-group mt-4">
          <label>User Name</label>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <button
          onClick={handleSubmit}
          type="submit"
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default Login;
