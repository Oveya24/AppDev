import axios from 'axios';

export const getUserIdByEmail = async (email) => {
  try {
    console.log(email);
    const response = await axios.get('http://localhost:8080/auth/getUserId', {
        params: { email: email }
    });
    console.log("stop");
    return response.data; // This should return the user ID
  } catch (error) {
    console.error('Error in user ID:', error);
    return null;
  }
};
