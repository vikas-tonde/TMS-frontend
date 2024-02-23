import React, { useState } from 'react';
import Login from './login';
import './LandingPage.css';


const LandingPage = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);

  const handleGetStarted = () => {
    setShowLoginForm(true);
  };

  

  return (
    <div className=' landing-page'>
       
       <div className='overlay'>
            <h1>Welcome to the Intelizign Family</h1>
        </div>
      
      {showLoginForm ? (
        <Login />
      ) : (
        <div class="center">
        <button onClick={handleGetStarted}>Get Started</button>
        </div>
      )}
       

    </div>
    
  );
};

export default LandingPage;
