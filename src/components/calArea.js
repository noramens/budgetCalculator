import React from 'react';
import '../App.css';

const CalArea = ({
  income,
  save,
  goal,
  setGoal,
  setIncome,
  setSave,
  calculate,
  monthResult,
  saveResult,
  recalculate,
  buttonClicked
}) => {
  return (
    <div style={styles}>
      <div style={firstDiv}>
        {buttonClicked ? (
          <React.Fragment>
            <p style={{ fontWeight: 'bold' }}> You should spend this monthly</p>
            <div style={amount}>{monthResult}</div>
            <p style={{ fontWeight: 'bold', marginTop: '30px' }}> Which means saving this every month </p>
            <div style={amount}>{saveResult}</div>
            <button onClick={recalculate} className="recalculate" style={{ width: '60%' }}>
              Recalculate
            </button>
          </React.Fragment>
        ) : (
          <div style={{ color: 'rgba(255, 255, 255, 0.2)' }}>fill out this simple form</div>
        )}
      </div>

      <div style={secondDiv}>
        <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '25px' }}>
          <input
            type="number"
            value={income}
            onChange={event => setIncome(Number(event.target.value))}
            className="inputComponent"
            placeholder="what is your monthly income?"
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '25px' }}>
          <input
            type="number"
            value={goal}
            onChange={event => setGoal(Number(event.target.value))}
            className="inputComponent"
            placeholder="what is your financial goal?"
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '25px' }}>
          <input
            type="number"
            value={save}
            onChange={event => setSave(Number(event.target.value))}
            className="inputComponent"
            placeholder="how many months do you want to save"
          />

          <button
            onClick={calculate}
            className="calculate"
            style={!income || !goal || !save ? disabledButton : calculateButton}
            disabled={!income || !goal || !save}
          >
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
  width: '80vw',
  minHeight: '70vh',
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

const calculateButton = {
  color: '#050711',
  padding: '15px 25px',
  outline: 'none',
  borderRadius: '3px',
  fontWeight: 'bold',
  border: '0',
  margin: '15px 35px 0px 35px',
  fontSize: '15px',
  cursor: 'pointer',
  backgroundColor: '#14c488'
};

const disabledButton = {
  backgroundColor: 'rgba(20, 196, 136, 0.3)'
};

export default CalArea;
