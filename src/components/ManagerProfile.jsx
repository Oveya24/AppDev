import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ManagerProfile.css';
import Navbar from './Navbar';

const ManagerProfile = () => {
  const [profile, setProfile] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    department: '',
    location: '',
    organization: '',
    dob: '',
    about: '',
  });

  const [isEditing, setIsEditing] = useState(false); // State to manage edit mode

  useEffect(() => {
    // Fetch the user profile from an API and set it to the state
    // This is a placeholder for the actual fetch call
    setProfile({
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      phone: '+123 456 7890',
      department: 'Human Resources',
      location: 'New York, USA',
      organization: 'XYZ Company',
      dob: '1990-01-01',
      about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleSave = () => {
    // Save the user profile to an API
    // This is a placeholder for the actual save call
    console.log('Profile saved', profile);
    setIsEditing(false); // Exit edit mode after saving
  };

  const handleEdit = () => {
    setIsEditing(true); // Enter edit mode
  };

  return (
    <div className="manager-container">
      <Navbar />
      <div className="main-content">
        <nav className="sidebar">
          <ul>
            <li><Link to="/manager-profile" className="sidebar-link">Profile</Link></li>
            <li><Link to="/staffs" className="sidebar-link">Staffs</Link></li>
            <li><Link to="/privacypolicy" className="sidebar-link">Privacy and Policy</Link></li>
            <li><Link to="/notifications" className="sidebar-link">Notifications</Link></li>
            <li><Link to="/about" className="sidebar-link">About us</Link></li>
            <li><Link to="/help" className="sidebar-link">Help</Link></li>
            <li><Link to="/manager-home" className="sidebar-link">Back</Link></li>
            <li><Link to="/" className="sidebar-link">Log Out</Link></li>
          </ul>
        </nav>
        <div className="profile-content">
          <div className="profile-details">
            <div className="profile-header">
              <h1 className="profile-name">{profile.firstName} {profile.lastName}</h1>
              <p className="profile-title">Manager</p>
            </div>
            <h2>Profile Information</h2>
            <div className="profile-info">
              <label>First Name:
                <input type="text" name="firstName" value={profile.firstName} onChange={handleChange} disabled={!isEditing} />
              </label>
              <label>Last Name:
                <input type="text" name="lastName" value={profile.lastName} onChange={handleChange} disabled={!isEditing} />
              </label>
              <label>Email:
                <input type="email" name="email" value={profile.email} onChange={handleChange} disabled={!isEditing} />
              </label>
              <label>Phone:
                <input type="text" name="phone" value={profile.phone} onChange={handleChange} disabled={!isEditing} />
              </label>
              <label>Department:
                <input type="text" name="department" value={profile.department} onChange={handleChange} disabled={!isEditing} />
              </label>
              <label>Location:
                <input type="text" name="location" value={profile.location} onChange={handleChange} disabled={!isEditing} />
              </label>
              <label>Organization:
                <input type="text" name="organization" value={profile.organization} onChange={handleChange} disabled={!isEditing} />
              </label>
              <label>Date of Birth:
                <input type="date" name="dob" value={profile.dob} onChange={handleChange} disabled={!isEditing} />
              </label>
              <label>About:
                <textarea name="about" value={profile.about} onChange={handleChange} disabled={!isEditing}></textarea>
              </label>
            </div>
            <div className="profile-actions">
              {isEditing ? (
                <button className="save-button" onClick={handleSave}>Save</button>
              ) : (
                <button className="edit-button" onClick={handleEdit}>Edit</button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagerProfile;
