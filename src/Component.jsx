import React, { useState } from 'react'


const Component = (onLogin) => {

 const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = () => {
    if (user === 'user' && password === 'password') {
      onLogin(user);
    } else {
     alert ('Invalid credentials. Try "user" and "password".');
    }
  };

  return (
    <div>
      <h2>Login</h2>
          <form action="" onSubmit={handleSubmit}>
        <label htmlFor=""> Name</label>
          <input type="text" value={user} onChange={(e) => setUser(e.target.value)} />
              <br />
              <label htmlFor=""> Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <br />
              <button type='submit'>Login</button>
        </form>
    </div>
  );
}

export default Component