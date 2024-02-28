import React, { useState } from 'react';
import Login from'./Pages/LoginPage';
import Homepage from'./Pages/HomePage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      {isLoggedIn ? (
        <Login />
      ) : (
        <Homepage onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
