import React, { useState } from 'react';

function Login() {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const { email, password } = user;

  const onChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.name,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('Login Submit');
  };

  return (
    <div className='container'>
      <h1 className='text-center'>
        Account <span className='text-primary'>Login</span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='email'>Email Address</label>
          <input
            type='email'
            className='form-control'
            name='email'
            value={email}
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            className='form-control'
            value={password}
            onChange={onChange}
          />
        </div>
        <div>
          <input
            type='submit'
            value='login'
            className='btn btn-primary btn-block'
          />
        </div>
      </form>
    </div>
  );
}

export default Login;
