import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {jwtDecode} from 'jwt-decode'; // Import jwt-decode
import { useAuth } from './AuthContext';
import './Login.css';

function Login({ setIsAuthenticated }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { setAuth } = useAuth();

  // Function to validate form fields
  const validate = () => {
    const newErrors = {};
    if (!email) newErrors.email = 'Email Id is required';
    if (!password) newErrors.password = 'Password is required';
    return newErrors;
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form
    const newErrors = validate();
    if (Object.keys(newErrors).length === 0) {
      setLoading(true);
      try {
        const response = await axios.post('http://localhost:8080/auth/generateToken', {
          email: email,
          password: password,
        });

        const jwtToken = response.data;
        localStorage.setItem('token', jwtToken);
        setAuth(true);

        // Decode the token to get the user's role
        const decodedToken = jwtDecode(jwtToken);
        const role = decodedToken.role;

        // Conditional routing based on role
        if (role === 'ROLE_USER') {
          navigate('/home');
        } else if (role === 'ROLE_ADMIN') {
          navigate('/manager-home');
        } else {
          navigate('/dashboard'); // Default route
        }
      } catch (error) {
        if (error.response) {
          console.error('Server responded with an error:', error.response.status, error.response.data);
          setErrors({ login: error.response.data.message || 'Failed to log in. Please try again.' });
        } else if (error.request) {
          console.error('No response received:', error.request);
          setErrors({ login: 'No response from the server. Please try again later.' });
        } else {
          console.error('Error setting up request:', error.message);
          setErrors({ login: 'Error in request setup. Please try again.' });
        }
      } finally {
        setLoading(false);
      }
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email Id:</label>
          <input
            id="email"
            type="email"
            className={`login-input ${errors.email ? 'input-error' : ''}`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-invalid={!!errors.email}
            aria-describedby="email-error"
          />
          {errors.email && (
            <div id="email-error" className="error-message">
              {errors.email}
            </div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            className={`login-input ${errors.password ? 'input-error' : ''}`}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            aria-invalid={!!errors.password}
            aria-describedby="password-error"
          />
          {errors.password && (
            <div id="password-error" className="error-message">
              {errors.password}
            </div>
          )}
        </div>
        {errors.login && (
          <div className="error-message login-error">
            {errors.login}
          </div>
        )}
        <button type="submit" className="login-button" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
      <p>
        Don't have an account?{' '}
        <Link to="/register" className="login-link">Create one</Link>
      </p>
    </div>
  );
}

export default Login;
