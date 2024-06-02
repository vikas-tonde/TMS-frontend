
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear any authentication tokens or user data here
    localStorage.removeItem('authToken'); 
    sessionStorage.removeItem('userSession'); 

    navigate('/');
  }, [navigate]);

  return null;
};

export default Logout;
