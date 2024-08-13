import React from 'react';
import './PrivacyandPolicy.css';
import Navbar from './Navbar';

const PrivacyPolicy = () => {
  return (
    <>
    <Navbar/>
    <h1 className="privacy-policy-title">Privacy Policy</h1>
  
    <div className="privacy-policy-container">
      {/* <Navbar /> */}
      {/* <h1 className="privacy-policy-title">Privacy Policy</h1> */}
      <div className="privacy-policy-card">
        <h2 className="privacy-policy-subtitle">1. Information We Collect</h2>
        <p className="privacy-policy-text">
          We collect personal data such as your name, email, and details related to your organization. Technical data about your device and usage is also gathered.
        </p>
      </div>
      <div className="privacy-policy-card">
        <h2 className="privacy-policy-subtitle">2. How We Use Your Information</h2>
        <p className="privacy-policy-text">
          Your data helps us deliver services, personalize your experience, and improve platform functionality. We also use it for communication and support.
        </p>
      </div>
      <div className="privacy-policy-card">
        <h2 className="privacy-policy-subtitle">3. Data Security</h2>
        <p className="privacy-policy-text">
          We implement security measures like encryption and secure servers to protect your data from unauthorized access and breaches.
        </p>
      </div>
      <div className="privacy-policy-card">
        <h2 className="privacy-policy-subtitle">4. Your Rights</h2>
        <p className="privacy-policy-text">
          You can access, correct, or delete your personal data by contacting us. We will respond to your requests promptly.
        </p>
      </div>

      <div className="privacy-policy-card">
        <h2 className="privacy-policy-subtitle">5. Violations and Enforcement</h2>
        <p className="privacy-policy-text">
          We address violations of this policy seriously and may cooperate with authorities to handle breaches.
        </p>
      </div>
      <div className="privacy-policy-card">
        <h2 className="privacy-policy-subtitle">6. Changes to This Policy</h2>
        <p className="privacy-policy-text">
          This policy may be updated periodically. Changes will be posted with an updated effective date.
        </p>
        </div>
    </div>
    </>
  );
};

export default PrivacyPolicy;
