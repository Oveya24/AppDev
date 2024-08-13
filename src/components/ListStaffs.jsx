import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './StaffList.css'; // Optional: Include CSS for styling

const StaffList = () => {
  const [staffList, setStaffList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isManager, setIsManager] = useState(false);

  useEffect(() => {
    const fetchStaff = async () => {
      try {
        const role = localStorage.getItem('role'); // Retrieve role from local storage
        const managerId = localStorage.getItem('managerId'); // Retrieve managerId from local storage

        if (role === 'ROLE_ADMIN' && managerId) {
          setIsManager(true); // Set isManager to true if role is admin and managerId is available

          const response = await axios.get(`http://localhost:8080/admin/getstaff/${managerId}`);
          setStaffList(response.data);
        } else {
          setError('You are not authorized to view this data or manager ID is missing');
        }
      } catch (err) {
        setError('Failed to fetch staff data');
        console.error('Error fetching staff data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchStaff();
  }, []);

  if (loading) {
    return <p>Loading staff data...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!isManager) {
    return <p>You do not have permission to view this data.</p>;
  }

  return (
    <div className="staff-list">
      <h2>Staff List</h2>
      <ul>
        {staffList.length > 0 ? (
          staffList.map(staff => (
            <li key={staff.staffId} className="staff-item">
              <p><strong>Name:</strong> {staff.fname} {staff.lname}</p>
              <p><strong>Email:</strong> {staff.email}</p>
              <p><strong>Phone:</strong> {staff.phone_no}</p>
              <p><strong>Available:</strong> {staff.available}</p>
              <p><strong>Organization:</strong> {staff.organization}</p>
            </li>
          ))
        ) : (
          <p>No staff members found.</p>
        )}
      </ul>
    </div>
  );
};

export default StaffList;
