import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div style={{
      textAlign: 'center',
      padding: '3rem',
      backgroundColor: '#fef6e4',
      color: '#333',
      fontFamily: 'sans-serif'
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>404 - रास्ता नहीं मिला</h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
        क्षमा करें, आप जिस पृष्ठ की खोज कर रहे हैं वह उपलब्ध नहीं है।<br />
        शायद यह रास्ता अभी खुला नहीं है या बंद हो चुका है।
      </p>
      <Link to="/product" style={{
        padding: '0.8rem 1.5rem',
        backgroundColor: '#ffb703',
        color: '#fff',
        textDecoration: 'none',
        borderRadius: '5px',
        fontWeight: 'bold'
      }}>
        मुख्य पृष्ठ पर लौटें
      </Link>
    </div>
  );
};

export default NotFound;
