import React, { useState } from 'react';
import Nav from './Nav';
import CalArea from './calArea';
import Footer from './footer';
import './App.css';

function App() {
  const [disable, setDisable] = useState(false);
  const [goal, setGoal] = useState();
  const [income, setIncome] = useState();
  const [save, setSave] = useState();
  const [monthResult, setMonthResult] = useState('$400,000');
  const [saveResult, setSaveResult] = useState('$200');

  const Recalculate = () => {
    setMonthResult();
    setIncome();
    setSave();
    setGoal();
  };

  const Calculate = () => {
    setMonthResult(Math.floor((income * save - goal) / save).toFixed(2));
    setSaveResult(console.log(monthResult));
  };
  return (
    <div className="App">
      <Nav />
      <CalArea
        setGoal={setGoal}
        setIncome={setIncome}
        setSave={setSave}
        calculate={Calculate}
        monthResult={monthResult}
        recalculate={Recalculate}
        saveResult={saveResult}
        disable={disable}
        setDisable={setDisable}
      />
      <Footer />
    </div>
  );
}

export default App;
