import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './StaffProfile.css';
import Navbar from './Navbar';

const StaffProfile = () => {
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

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    // Fetch the user profile from an API and set it to the state
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
    console.log('Profile saved', profile);
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <div className="staff-profile-container">
      <Navbar />
      <div className="staff-main-content">
        <nav className="staff-sidebar">
          <ul>
            <li><Link to="/staff-profile" className="staff-sidebar-link">Profile</Link></li>
            <li><Link to="/staffs" className="staff-sidebar-link">Tasks</Link></li>
            <li><Link to="/privacypolicy" className="staff-sidebar-link">Privacy and Policy</Link></li>
            <li><Link to="/notifications" className="staff-sidebar-link">Notifications</Link></li>
            <li><Link to="/about" className="staff-sidebar-link">About us</Link></li>
            <li><Link to="/help" className="staff-sidebar-link">Help</Link></li>
            <li><Link to="/home" className="staff-sidebar-link">Back</Link></li>
            <li><Link to="/" className="staff-sidebar-link">Log Out</Link></li>
          </ul>
        </nav>
        <div className="staff-profile-content">
          <div className="staff-profile-details">
            <div className="staff-profile-header">
              <h1 className="staff-profile-name">{profile.firstName} {profile.lastName}</h1>
              <p className="staff-profile-title">Staff Member</p>
            </div>
            <h2>Profile Information</h2>
            <div className="staff-profile-info">
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
            <div className="staff-profile-actions">
              {isEditing ? (
                <button className="staff-save-button" onClick={handleSave}>Save</button>
              ) : (
                <button className="staff-edit-button" onClick={handleEdit}>Edit</button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffProfile;
