// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import {jwtDecode} from 'jwt-decode'; // Import jwt-decode to decode the token
// // import './ViewSchedule.css';
// // import Navbar from './Navbar';

// // const ViewSchedule = () => {
// //   const [schedules, setSchedules] = useState([]);

// //   useEffect(() => {
// //     const fetchSchedules = async () => {
// //       try {
// //         // Retrieve the token from local storage
// //         const token = localStorage.getItem('token');
// //         if (!token) {
// //           console.error('No token found in local storage');
// //           return;
// //         }

// //         // Decode the token to get the user ID or manager ID
// //         const decodedToken = jwtDecode(token);
// //         const userId = decodedToken.userId; // Adjust this based on your token structure

// //         // Set the authorization header with the Bearer token
// //         const config = {
// //           headers: { Authorization: `Bearer ${token}` }
// //         };

// //         // Fetch schedules from the API using the decoded user ID
// //         const response = await axios.get(`http://localhost:8080/auth/viewshift/${userId}`, config);
// //         setSchedules(response.data);
// //       } catch (error) {
// //         console.error('Error fetching schedules:', error);
// //       }
// //     };

// //     fetchSchedules();
// //   }, []);

// //   const handleDelete = async (shiftId) => {
// //     try {
// //       const token = localStorage.getItem('token');
// //       if (!token) {
// //         console.error('No token found in local storage');
// //         return;
// //       }

// //       const config = {
// //         headers: { Authorization: `Bearer ${token}` }
// //       };

// //       await axios.delete(`http://localhost:8080/auth/admin/deleteshift/${shiftId}`, config);
// //       setSchedules(schedules.filter(schedule => schedule.shiftId !== shiftId));
// //     } catch (error) {
// //       console.error('Error deleting schedule:', error);
// //     }
// //   };

// //   return (
// //     <>
// //       <Navbar />
// //       <div className="view-schedule-container">
// //         <h2 className="view-schedule-title">View Schedule</h2>
// //         <table className="view-schedule-table">
// //           <thead>
// //             <tr>
// //               <th>Staff ID</th>
// //               <th>Task</th>
// //               <th>Date</th>
// //               <th>Start Time</th>
// //               <th>End Time</th>
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {schedules.map(schedule => (
// //               <tr key={schedule.shiftId}>
// //                 <td>{schedule.staffId}</td>
// //                 <td>{schedule.task}</td>
// //                 <td>{new Date(schedule.date).toLocaleDateString()}</td>
// //                 <td>{schedule.start_time}</td>
// //                 <td>{schedule.end_time}</td>
// //                 <td>
// //                   <button
// //                     className="delete-button"
// //                     onClick={() => handleDelete(schedule.shiftId)}
// //                   >
// //                     Delete
// //                   </button>
// //                 </td>
// //               </tr>
// //             ))}
// //           </tbody>
// //         </table>
// //       </div>
// //     </>
// //   );
// // };

// // export default ViewSchedule;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import {jwtDecode} from 'jwt-decode'; // Correct import for jwt-decode
// import './ViewSchedule.css';
// import Navbar from './Navbar';
// import { getUserIdByEmail } from './getUserIdByEmail'; // Assuming getUserIdByEmail is correctly imported

// const ViewSchedule = () => {
//   const [schedules, setSchedules] = useState([]);
//   const [userId, setUserId] = useState(null);

//   useEffect(() => {
//     const fetchUserId = async (email) => {
//       try {
//         const id = await getUserIdByEmail(email);
//         setUserId(id);
//         console.log("ethuku");
//       } catch (error) {
//         console.error('Error fetching user ID:', error);
//       }
//     };

//     const fetchSchedules = async () => {
//       try {
//         // Retrieve the token from local storage
//         const token = localStorage.getItem('token');
//         if (!token) {
//           console.error('No token found in local storage');
//           return;
//         }

//         // Decode the token to get the email and role
//         const decodedToken = jwtDecode(token);
//         const { email, role } = decodedToken;

//         // Fetch user ID by email
//         await fetchUserId(email);

//         if (userId === null) {
//           console.error('User ID is not available');
//           return;
//         }

//         // Set the authorization header with the Bearer token
//         const config = {
//           headers: { Authorization: `Bearer ${token}` }
//         };

//         // Determine the API endpoint based on the role
//         let apiEndpoint = '';
//         if (role === 'ROLE_USER') {
//           apiEndpoint = `http://localhost:8080/auth/viewshift/${userId}`;
//         } else if (role === 'ROLE_ADMIN') {
//           apiEndpoint = `http://localhost:8080/auth/admin/viewshift/${userId}`;
//         } else {
//           console.error('Unknown role:', role);
//           return;
//         }

//         // Fetch schedules from the API using the appropriate endpoint
//         const response = await axios.get(apiEndpoint, config);
//         setSchedules(response.data);
//       } catch (error) {
//         console.error('Error fetching schedules:', error);
//       }
//     };

//     if (userId !== null) {
//       fetchSchedules();
//     }
//   }, [userId]);

//   const handleDelete = async (shiftId) => {
//     try {
//       const token = localStorage.getItem('token');
//       if (!token) {
//         console.error('No token found in local storage');
//         return;
//       }

//       const config = {
//         headers: { Authorization: `Bearer ${token}` }
//       };

//       await axios.delete(`http://localhost:8080/auth/admin/deleteshift/${shiftId}`, config);
//       setSchedules(schedules.filter(schedule => schedule.shiftId !== shiftId));
//     } catch (error) {
//       console.error('Error deleting schedule:', error);
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="view-schedule-container">
//         <h2 className="view-schedule-title">View Schedule</h2>
//         <table className="view-schedule-table">
//           <thead>
//             <tr>
//               <th>Staff ID</th>
//               <th>Task</th>
//               <th>Date</th>
//               <th>Start Time</th>
//               <th>End Time</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {schedules.map(schedule => (
//               <tr key={schedule.shiftId}>
//                 <td>{schedule.staffId}</td>
//                 <td>{schedule.task}</td>
//                 <td>{new Date(schedule.date).toLocaleDateString()}</td>
//                 <td>{schedule.start_time}</td>
//                 <td>{schedule.end_time}</td>
//                 <td>
//                   <button
//                     className="delete-button"
//                     onClick={() => handleDelete(schedule.shiftId)}
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </>
//   );
// };

// export default ViewSchedule;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {jwtDecode} from 'jwt-decode'; // Correct import for jwt-decode
import './ViewSchedule.css';
import Navbar from './Navbar';
import { getUserIdByEmail } from './getUserIdByEmail'; // Assuming getUserIdByEmail is correctly imported

const ViewSchedule = () => {
  const [schedules, setSchedules] = useState([]);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const fetchUserId = async (email) => {
      try {
        const token = localStorage.getItem('token');
        const decodedToken = jwtDecode(token);
        // console.log(decodedToken);
        // const email = decodedToken.sub;
        console.log("Email:"+email);
        const id = await getUserIdByEmail(email);
        setUserId(id);
        console.log("User ID fetched: ", id); // Log to verify User ID fetching
      } catch (error) {
        console.error('Error fetching user ID:', error);
      }
    };

    const fetchSchedules = async (userId, role, token) => {
      try {
        console.log("Fetching schedules for User ID:", userId, "Role:", role); // Log role and userId

        // Set the authorization header with the Bearer token
        const config = {
          headers: { Authorization: `Bearer ${token}` }
        };

        // Determine the API endpoint based on the role
        let apiEndpoint = '';
        if (role === 'ROLE_USER') {
          apiEndpoint = `http://localhost:8080/auth/viewshift/${userId}`;
        } else if (role === 'ROLE_ADMIN') {
          apiEndpoint = `http://localhost:8080/auth/admin/viewshift/${userId}`;
        } else {
          console.error('Unknown role:', role);
          return;
        }

        // Fetch schedules from the API using the appropriate endpoint
        const response = await axios.get(apiEndpoint, config);
        setSchedules(response.data);
        console.log("Schedules fetched:", response.data); // Log fetched schedules
      } catch (error) {
        console.error('Error fetching schedules:', error);
      }
    };

    const init = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          console.error('No token found in local storage');
          return;
        }

        const decodedToken = jwtDecode(token);
        const { sub:email, role } = decodedToken;

        console.log("Token decoded:", decodedToken); // Log decoded token

        // Fetch user ID and then fetch schedules
        const id = await getUserIdByEmail(email);
        setUserId(id);

        if (id) {
          fetchSchedules(id, role, token);
        }
      } catch (error) {
        console.error('Initialization error:', error);
      }
    };

    init();
  }, []);

  const handleDelete = async (shiftId) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        console.error('No token found in local storage');
        return;
      }

      const config = {
        headers: { Authorization: `Bearer ${token}` }
      };

      await axios.delete(`http://localhost:8080/auth/admin/deleteshift/${shiftId}`, config);
      setSchedules(schedules.filter(schedule => schedule.shiftId !== shiftId));
    } catch (error) {
      console.error('Error deleting schedule:', error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="view-schedule-container">
        <h2 className="view-schedule-title">View Schedule</h2>
        <table className="view-schedule-table">
          <thead>
            <tr>
              <th>Staff ID</th>
              <th>Task</th>
              <th>Date</th>
              <th>Start Time</th>
              <th>End Time</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {schedules.map(schedule => (
              <tr key={schedule.shiftId}>
                <td>{schedule.staffId}</td>
                <td>{schedule.task}</td>
                <td>{new Date(schedule.date).toLocaleDateString()}</td>
                <td>{schedule.start_time}</td>
                <td>{schedule.end_time}</td>
                <td>
                  <button
                    className="delete-button"
                    onClick={() => handleDelete(schedule.shiftId)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ViewSchedule;
