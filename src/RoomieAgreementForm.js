import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RoomieAgreementForm = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const [formData, setFormData] = useState({
    name: '',
    moveInDate: '',
    rent: '',
    utilities: '',
    frequency: 'Monthly',
    withAmount: '',
    withFrequency: 'Monthly',
    houseRules: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // After submitting, navigate to profile page
    alert("your agreement has been shared to your roomates. once confirmed by all we will notarise and mail you a pdf copy");
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <img src="/logo.jpg" alt="Roomie" style={styles.logo} />
        {/* Navigate to Profile when clicking Sign Up */}
        <button style={styles.signupButton} onClick={() => navigate('/profile')}>Sign Up</button>
      </div>
      <h1>Create a new living agreement</h1>
      <p>This will be shared with your roommates. It’s important to be honest and clear.</p>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="123 Main St"
            style={styles.input}
          />
        </div>

        <div style={styles.formGroup}>
          <label>Move-in date</label>
          <input
            type="date"
            name="moveInDate"
            value={formData.moveInDate}
            onChange={handleChange}
            style={styles.input}
          />
        </div>

        <div style={styles.formGroup}>
          <label>Rent</label>
          <input
            type="text"
            name="rent"
            value={formData.rent}
            onChange={handleChange}
            placeholder="Rs ______ / ______"
            style={styles.input}
          />
        </div>

        <div style={styles.formGroup}>
          <label>Utilities</label>
          <input
            type="text"
            name="utilities"
            value={formData.utilities}
            onChange={handleChange}
            placeholder="Rs ______ / ______"
            style={styles.input}
          />
        </div>

        <div style={styles.formGroup}>
          <label>Frequency</label>
          <select
            name="frequency"
            value={formData.frequency}
            onChange={handleChange}
            style={styles.input}
          >
            <option value="Monthly">Monthly</option>
            <option value="Weekly">Weekly</option>
          </select>
        </div>

        <div style={styles.formGroup}>
          <label>Wifi</label>
          <input
            type="text"
            name="withAmount"
            value={formData.withAmount}
            onChange={handleChange}
            placeholder="Rs ______ / ______"
            style={styles.input}
          />
        </div>

        <div style={styles.formGroup}>
          <label>Wifi frequency</label>
          <select
            name="withFrequency"
            value={formData.withFrequency}
            onChange={handleChange}
            style={styles.input}
          >
            <option value="Monthly">Monthly</option>
            <option value="Weekly">Weekly</option>
          </select>
        </div>

        <div style={styles.formGroup}>
          <label>House rules</label>
          <textarea
            name="houseRules"
            value={formData.houseRules}
            onChange={handleChange}
            placeholder="No overnight guests more than 3 nights a week"
            style={styles.textarea}
          />
        </div>

        <div style={styles.buttonGroup}>
          <button type="submit" style={styles.button}>Submit</button>
          <button type="button" style={styles.button} onClick={() => navigate('/')}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

const styles = {
  container: {
    padding: '200px',
    fontFamily: 'Arial, sans-serif'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px'
  },
  logo: {
    height: '0px'
  },
  signupButton: {
    padding: '10px',
    fontSize: '16px',
    backgroundColor: 'blue',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '5px' 
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '5px'
  },
  input: {
    padding: '8px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '5px'
  },
  textarea: {
    padding: '8px',
    fontSize: '16px',
    height: '100px',
    border: '1px solid #ccc',
    borderRadius: '5px'
  },
  button: {
    padding: '10px',
    fontSize: '16px',
    backgroundColor: '#007BFF',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    margin: '5px',
    borderRadius: '5px' 
  },
  buttonGroup: {
    display: 'flex'
  }
};

export default RoomieAgreementForm;
