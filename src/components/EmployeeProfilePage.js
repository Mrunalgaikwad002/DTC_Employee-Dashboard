import React, { useState } from 'react';
import { User } from 'lucide-react';
import './EmployeeProfile.css'; // Add this line to import the CSS file

const EmployeeProfilePage = () => {
  // State to store input values
  const [name, setName] = useState('John Doe');
  const [role, setRole] = useState('User');
  const [email, setEmail] = useState('johndoe45@gmail.com');
  const [emailVerification, setEmailVerification] = useState('Verified');
  const [contact, setContact] = useState('+91 9876543210'); // STD code for India
  const [address, setAddress] = useState('United States');
  const [status, setStatus] = useState('Active');

  return (
    <div className="profile-container">
      {/* Card Section */}
      <div className="profile-card">
        <div className="card-nav">
          <button className="active">
            <User className="nav-icon" size={16} />
            Profile
          </button>
        </div>

        {/* Profile Info */}
        <div className="profile-info">
          <div className="profile-pic">
            <User size={120} className="profile-icon" /> {/* Display User icon */}
            <h2>{name}</h2>
            
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-field"
              placeholder="Enter email"
            />
            
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="input-field"
              placeholder="Enter address"
            />
          </div>

          <div className="profile-details">
            <div className="detail-item">
              <span className="label">Name</span>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input-field"
              />
            </div>
            <div className="detail-item">
              <span className="label">Role</span>
              <input
                type="text"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="input-field"
              />
            </div>
            <div className="detail-item">
              <span className="label">Email verification</span>
              <span className="verified">{emailVerification}</span>
            </div>
            <div className="detail-item">
              <span className="label">Contact</span>
              <input
                type="text"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                className="input-field"
                placeholder="+91"
              />
            </div>
            <div className="detail-item">
              <span className="label">Mobile verification</span>
              <span className="active">Done</span>
            </div>
            <div className="detail-item">
              <span className="label">Status</span>
              <span className="active">{status}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeProfilePage;
