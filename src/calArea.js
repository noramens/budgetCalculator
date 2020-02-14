import React from 'react';
import './App.css';

const CalArea = ({
  setGoal,
  setIncome,
  setSave,
  calculate,
  monthResult,
  recalculate,
  income,
  saveResult,
  disable,
  setDisable
}) => {
  return (
    <div style={styles}>
      <div style={firstDiv}>
        <p style={{ fontWeight: 'bold' }}> You should spend this monthly</p>
        <div style={amount}>{monthResult}</div>
        <p style={{ fontWeight: 'bold', marginTop: '30px' }}> Which means saving this every month </p>
        <div style={amount}>{saveResult}</div>
        <button className="calculate" style={{ width: '60%' }} disabled>
          Recalculate
        </button>
      </div>

      <div style={secondDiv}>
        <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '25px' }}>
          <input
            type="number"
            onChange={event => setIncome(Number(event.target.value))}
            onFocus={disable ? console.log('disabl') : null}
            style={inputComponent}
            placeholder="what is your monthly income?"
          />
          <button onClick={setDisable(true)} className="button green">
            Change Income
          </button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '25px' }}>
          <input
            type="number"
            onChange={event => setGoal(Number(event.target.value))}
            style={inputComponent}
            placeholder="what is your financial goal?"
          />
          <button className=" button purple">Save Financial Goal</button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '25px' }}>
          <input
            type="number"
            onChange={event => setSave(Number(event.target.value))}
            style={inputComponent}
            placeholder="how many months do you want to save"
          />
          <button className=" button light">Save Saving Duration </button>

          <button onClick={calculate} className="calculate">
            Calculate
          </button>
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
  borderRight: '1px solid rgba(255, 255, 255, 0.05)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column'
};

const amount = {
  backgroundColor: 'rgba(255, 255, 255, 0.05)',
  borderRadius: '30%',
  width: '60%',
  height: '20%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '40px'
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

export default CalArea;
