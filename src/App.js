import React, { useState } from 'react';
import Nav from './components/Nav';
import CalArea from './components/calArea';
import './App.css';

function App() {
  const [goal, setGoal] = useState('');
  const [income, setIncome] = useState('');
  const [save, setSave] = useState('');
  const [monthResult, setMonthResult] = useState('');
  const [saveResult, setSaveResult] = useState('');
  const [buttonClicked, setButtonClicked] = useState(false);

  function recalculate() {
    setMonthResult('');
    setSaveResult('');
    setIncome('');
    setSave('');
    setGoal('');
  }

  function calculate() {
    let result = Math.floor((income * save - goal) / save).toFixed(2);
    result < 1 ? setMonthResult('😭😭😭') : setMonthResult(result);
    result < 1
      ? setSaveResult('you cant save more than you earn!')
      : setSaveResult(Math.floor(income - (income * save - goal) / save).toFixed(2));
    setButtonClicked(true);
  }

  return (
    <div className="App">
      <Nav />
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100vw',
          height: '85vh'
        }}
      >
        <CalArea
          goal={goal}
          income={income}
          save={save}
          setGoal={setGoal}
          setIncome={setIncome}
          setSave={setSave}
          calculate={calculate}
          monthResult={monthResult}
          recalculate={recalculate}
          saveResult={saveResult}
          buttonClicked={buttonClicked}
        />
      </div>
    </div>
  );
}

export default App;
