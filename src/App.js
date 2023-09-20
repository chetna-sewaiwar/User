import React, { useState } from 'react';
import Component from './Component';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  return (
    <div className="App">
      
      {isLoggedIn ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <Component onLogin={handleLogin} />
      )}
    </div>
  );
}
export default App;