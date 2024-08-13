// import React, { createContext, useState, useContext } from 'react';

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [auth, setAuth] = useState(false);

//   return (
//     <AuthContext.Provider value={{ auth, setAuth }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   return useContext(AuthContext);
// };

// import React, { createContext, useState, useContext } from 'react';

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [auth, setAuth] = useState(false);

//   return (
//     <AuthContext.Provider value={{ auth, setAuth }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   return useContext(AuthContext);
// };

// src/components/AuthContext.js
// import React, { createContext, useState, useEffect, useContext } from 'react';

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [auth, setAuth] = useState(null);  // Initialize with null to signify loading state

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       setAuth(true);  // User is authenticated if token exists
//     } else {
//       setAuth(false); // No token means the user is not authenticated
//     }
//   }, []);

//   const login = (token) => {
//     localStorage.setItem('token', token);
//     setAuth(true);
//   };

//   const logout = () => {
//     localStorage.removeItem('token');
//     setAuth(false);
//   };

//   if (auth === null) {
//     return <div>Loading...</div>; // Or a spinner/loading indicator
//   }

//   return (
//     <AuthContext.Provider value={{ auth, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);

// src/components/AuthContext.js
import React, { createContext, useState, useEffect, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);  // Initialize with null to signify loading state

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setAuth(true);  // User is authenticated if token exists
    } else {
      setAuth(false); // No token means the user is not authenticated
    }
  }, []);

  const login = (token) => {
    localStorage.setItem('token', token);
    setAuth(true);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setAuth(false);
  };

  if (auth === null) {
    return <div>Loading...</div>; // Or a spinner/loading indicator
  }

  return (
    <AuthContext.Provider value={{ auth, login, logout, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);