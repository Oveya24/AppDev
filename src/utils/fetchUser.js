// // utils/fetchUser.js
// export const fetchUser = async (username) => {
//     try {
//       const response = await fetch('/path/to/db.json'); // Update with your actual path
//       const data = await response.json();
//       return data.users.find(user => user.username === username) || null;
//     } catch (error) {
//       console.error('Error fetching user data:', error);
//       return null;
//     }
//   };
  
// utils/fetchUser.js

export const fetchUser = async (email) => {
    try {
      const response = await fetch('/path/to/db.json'); // Update with the correct path
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      
      // Check if the email exists and return the user object
      const user = data.users.find(user => user.email === email);
      
      return user || null;
    } catch (error) {
      console.error('Error fetching user:', error);
      return null;
    }
  };
  