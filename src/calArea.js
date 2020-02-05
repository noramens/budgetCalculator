import React from 'react';
import './App.css';

const CalArea = props => {
  return (
    <div style={styles}>
      <div style={firstDiv}>jhkjak</div>
      <div style={secondDiv}>
        <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '25px' }}>
          <input type="number" style={inputComponent} placeholder="how much do you wish to save" />
          <button style={button} className="green">
            Save
          </button>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '25px' }}>
          <input type="number" style={inputComponent} placeholder="enter monthly income" />
          <button style={button} className="purple">
            Save
          </button>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '25px' }}>
          <input type="number" style={inputComponent} placeholder="how long do you want to save" />
          <button style={button} className="light">
            Save
          </button>

          <button className="calculate">Calculate</button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  display: 'flex',
  alignSelf: 'center',
  justifySelf: 'center',
  justifyContent: 'center',
  flexDirection: 'row',
  margin: '3em auto',
  textAlign: 'center',
  width: '80vw',
  height: '70vh',
  backgroundColor: '#1e253d',
  borderRadius: '5px',
  color: '#E9E9F7'
};

const firstDiv = {
  width: '50%',
  borderRight: '1px solid rgba(255, 255, 255, 0.05)'
};

const secondDiv = {
  width: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column'
};

const inputComponent = {
  border: '0',
  borderRadius: '5px',
  backgroundColor: 'rgba(255, 255, 255, 0.05)',
  width: '280px',
  height: '5vh',
  padding: '1px 1px 1px 5px',
  color: '#E9E9F7',
  fontSize: '14px',
  outline: 'none'
};

const button = {
  padding: '15px 25px',
  outline: 'none',
  borderRadius: '3px',
  fontWeight: 'bold',
  border: '0',
  color: '#E9E9F7',
  marginTop: '5px',

  '&:hover': {
    opacity: '0.8'
  }
};
export default CalArea;
