// src/components/Logout.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const Logout = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <button onClick={handleLogout} className="nav-link" style={{ cursor: 'pointer' }}>
      Log out
    </button>
  );
};

export default Logout;