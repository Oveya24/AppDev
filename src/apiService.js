import axios from 'axios';

const API_URL = 'http://localhost:8080/auth'; // Ensure this matches your Spring Boot URL

// Create an Axios instance for requests
const axiosInstance = axios.create({
  baseURL: API_URL,
});

// Register a new user
export const registerUser = async (user) => {
    const response = await axiosInstance.post('/addNewUser', user);
    return response.data;
};

// Authenticate user and get JWT
export const authenticateUser = async (credentials) => {
    const response = await axiosInstance.post('/generateToken', credentials);
    return response.data;
};
