import React, { Fragment } from 'react';
import '../App.css';
import {
  CalcAreaContainer,
  ShowResultsArea,
  Amount,
  CalculateArea,
  InputContainer,
  CalculatorButton,
  Description
} from '../styles/styles';

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
        <Description primary>what is your monthly income?</Description>
        <InputContainer>
          <input
            type="number"
            value={income}
            onChange={event => setIncome(Number(event.target.value).toString())}
            className="inputComponent"
            placeholder="enter number here"
          />
        </InputContainer>

        <InputContainer>
          <Description>what is your financial goal?</Description>
          <input
            type="number"
            value={goal}
            onChange={event => setGoal(Number(event.target.value).toString())}
            className="inputComponent"
            placeholder="enter number here"
          />
        </InputContainer>

        <InputContainer>
          <Description>how many months do you want to save?</Description>
          <input
            type="number"
            value={save}
            onChange={event => setSave(Number(event.target.value).toString())}
            className="inputComponent"
            placeholder="enter number here"
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
  backgroundColor: 'rgba(20, 196, 136, 0.3)',
  cursor: 'default'
};

export default CalArea;
