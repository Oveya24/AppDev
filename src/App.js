// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// src/App.js
// src/App.js
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import LandingPage from './components/LandingPage';
// import Login from './components/Login';
// import Register from './components/Register';
// import Home from './components/Home';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<LandingPage />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/home" element={<Home />} />
//       </Routes>
//     </Router>
    
      
//   );
// }

// export default App;

// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import LandingPage from './components/LandingPage';
// import Login from './components/Login';
// import Register from './components/Register';
// import Home from './components/Home';

// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<LandingPage />} />
//         <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/home" element={isAuthenticated ? <Home /> : <Login setIsAuthenticated={setIsAuthenticated} />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import LandingPage from './components/LandingPage';
// import Login from './components/Login';
// import Register from './components/Register';
// import Home from './components/Home';
// import About from './components/About'; // Import the About component

// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(() => {
//     // Get the authentication state from local storage
//     return localStorage.getItem('isAuthenticated') === 'true';
//   });

//   useEffect(() => {
//     // Update local storage whenever the authentication state changes
//     localStorage.setItem('isAuthenticated', isAuthenticated);
//   }, [isAuthenticated]);

//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<LandingPage />} />
//         <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
//         <Route path="/register" element={<Register />} />
//         <Route 
//           path="/home" 
//           element={isAuthenticated ? <Home /> : <Navigate to="/login" />} 
//         />
//         <Route 
//           path="/about" 
//           element={isAuthenticated ? <About /> : <Navigate to="/login" />} 
//         />


        
//       </Routes>
//     </Router>
//   );
// }

// export default App;

// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import LandingPage from './components/LandingPage';
// import Login from './components/Login';
// import Register from './components/Register';
// import Home from './components/Home';
// import Features from './components/Features';
// import About from './components/About';
// import Navbar from './components/Navbar'; // Import Navbar

// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(() => {
//     // Get the authentication state from local storage
//     return localStorage.getItem('isAuthenticated') === 'true';
//   });

//   useEffect(() => {
//     // Update local storage whenever the authentication state changes
//     localStorage.setItem('isAuthenticated', isAuthenticated);
//   }, [isAuthenticated]);

//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<LandingPage />} />
//         <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
//         <Route path="/register" element={<Register />} />
//         {isAuthenticated && (
//           <>
//             <Navbar /> {/* Include Navbar here */}
//             <Route path="/home" element={<Home />} />
//             <Route path="/features" element={<Features />} />
//             <Route path="/about" element={<About />} />
//           </>
//         )}
//         <Route path="*" element={<Navigate to="/" />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import LandingPage from './components/LandingPage';
// import Login from './components/Login';
// import Register from './components/Register';
// import Home from './components/Home';
// import About from './components/About';
// import Features from './components/Features';

// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(() => {
//     // Get the authentication state from local storage
//     return localStorage.getItem('isAuthenticated') === 'true';
//   });

//   useEffect(() => {
//     // Update local storage whenever the authentication state changes
//     localStorage.setItem('isAuthenticated', isAuthenticated);
//   }, [isAuthenticated]);

//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<LandingPage />} />
//         <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
//         <Route path="/register" element={<Register />} />
//         <Route 
//           path="/home" 
//           element={
//             isAuthenticated ? (
//               <>
//                 <Home />
//               </>
//             ) : (
//               <Navigate to="/login" />
//             )
//           } 
//         />
//         <Route 
//           path="/about" 
//           element={
//             isAuthenticated ? (
//               <>
//                 <About />
//               </>
//             ) : (
//               <Navigate to="/login" />
//             )
//           } 
//         />
//         <Route 
//           path="/features" 
//           element={
//             isAuthenticated ? (
//               <>
//                 <Features />
//               </>
//             ) : (
//               <Navigate to="/login" />
//             )
//           } 
//         />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import About from './components/About';
import Features from './components/Features'; // Correct import
import Footer from './components/Footer';
import ManagerHome from './components/ManagerHome';
import { AuthProvider } from './components/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import Navbar from './components/Navbar.jsx';
import CalendarEvents from './components/CalenderEvents.jsx';
import ManagerProfile from './components/ManagerProfile.jsx'
import PrivacyPolicy from './components/PrivacyandPolicy.jsx';
import StaffProfile from './components/StaffProfile.jsx';
import ViewSchedule from './components/ViewSchedule.jsx';
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem('isAuthenticated') === 'true';
  });

  useEffect(() => {
    localStorage.setItem('isAuthenticated', isAuthenticated);
  }, [isAuthenticated]);

  return (
    <div>
      {/* <Navbar/> */}
      <AuthProvider>
        
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/register" element={<Register />} />
        <Route 
          path="/home" 
          element={<PrivateRoute> <Home /> </PrivateRoute>} 
        />
        <Route 
          path="/about" 
          element={ <About /> } 
        />
        <Route 
          path="/manager-home" 
          element={<PrivateRoute> <ManagerHome /> </PrivateRoute>} 
        />

<Route 
          path="/manager-profile" 
          element={<PrivateRoute> <ManagerProfile /> </PrivateRoute>} 
        />

<Route 
          path="/staff-profile" 
          element={<PrivateRoute> <StaffProfile /> </PrivateRoute>} 
        />
        
<Route 
          path="/privacypolicy" 
          element={<PrivateRoute> <PrivacyPolicy /> </PrivateRoute>} 
        />

<Route 
          path="/view-schedule" 
          element={<PrivateRoute> <ViewSchedule /> </PrivateRoute>} 
        />
        

      </Routes>
    </Router>
    <Footer/>
    </AuthProvider>
    </div>
  );
}

export default App;
