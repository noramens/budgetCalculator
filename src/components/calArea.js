import React, { Fragment } from 'react';
import '../App.css';
import styled from 'styled-components';

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
    <CalcAreaContainer>
      <ShowResultsArea>
        {buttonClicked ? (
          <Fragment>
            <p style={{ fontWeight: 'bold' }}> You should spend this monthly</p>
            <Amount>{monthResult}</Amount>
            <p style={{ fontWeight: 'bold', marginTop: '30px' }}> Which means saving this every month </p>
            <Amount>{saveResult}</Amount>
            <CalculatorButton primary onClick={recalculate} style={{ width: '60%' }}>
              Recalculate
            </CalculatorButton>
          </Fragment>
        ) : (
          <div style={{ color: 'rgba(255, 255, 255, 0.2)' }}>fill out this simple form</div>
        )}
      </ShowResultsArea>

      <CalculateArea>
        <InputContainer>
          <input
            type="number"
            value={income}
            onChange={event => setIncome(Number(event.target.value).toString())}
            className="inputComponent"
            placeholder="what is your monthly income?"
          />
        </InputContainer>

        <InputContainer>
          <input
            type="number"
            value={goal}
            onChange={event => setGoal(Number(event.target.value).toString())}
            className="inputComponent"
            placeholder="what is your financial goal?"
          />
        </InputContainer>

        <InputContainer>
          <input
            type="number"
            value={save}
            onChange={event => setSave(Number(event.target.value).toString())}
            className="inputComponent"
            placeholder="how many months do you want to save"
          />

          <CalculatorButton
            onClick={calculate}
            style={!income || !goal || !save ? disabledButton : calculateButton}
            disabled={!income || !goal || !save}
          >
            Calculate
          </CalculatorButton>
        </InputContainer>
      </CalculateArea>
    </CalcAreaContainer>
  );
};

const CalcAreaContainer = styled.div`
  display: flex;
  align-self: center;
  justify-self: center;
  justify-content: center;
  width: 80vw;
  min-height: 70vh;
  background-color: #1e253d;
  border-radius: 5px;
  color: #e9e9f7;
`;

const ShowResultsArea = styled.div`
  width: 50%;
  border-right: 1px solid rgba(255, 255, 255, 0.05);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Amount = styled.div` {
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 30%;
  width: 60%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  fon-size: 40px;
`;

const CalculateArea = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
`;

const CalculatorButton = styled.button`
  color: #050711;
  padding: 15px 25px;
  outline: none;
  border-radius: 3px;
  font-weight: bold;
  border: 0;
  margin: 15px 35px 0px 35px;
  font-size: 15px;
  cursor: pointer;
  background-color: ${props => (props.primary ? '#e57373' : '#14c488')};
`;
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
