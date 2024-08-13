// import React from 'react';
// import { Navigate } from 'react-router-dom';
// import { useAuth } from '../components/AuthContext';

// const PrivateRoute = ({ children }) => {
//   const { auth } = useAuth();
//   return auth ? children : <Navigate to="/login" />;
// };

// export default PrivateRoute;

// import React from 'react';
// import { Navigate } from 'react-router-dom';
// import { useAuth } from '../components/AuthContext';

// const PrivateRoute = ({ children }) => {
//   const { auth } = useAuth();
//   return auth ? children : <Navigate to="/login" />;
// };

// export default PrivateRoute;

// src/components/PrivateRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const PrivateRoute = ({ children }) => {
  const { auth } = useAuth();

  if (auth === null) {
    return <div>Loading...</div>; // Or a spinner/loading indicator
  }

  return auth ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
