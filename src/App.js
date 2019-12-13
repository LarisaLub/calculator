import React, { useState } from 'react';
import './App.css';
import Display from "./components/Display";
import ButtonNumberPanel from "./components/ButtonNumberPanel";
import OperationButtonPanel from "./components/OperationButtonPanel";

function App() {
  const [currentValue, setCurrentValue] = useState("0")
  const [prevValue, setPrevValue] = useState("")
  const [typeActive, setTypeActive] = useState("")
  const makeOperation = (action) => {
    setTypeActive(active)
    setPrevValue(currentValue)
  }
  const changeValue = (result) => {
    if (prevValue) {

      setCurrentValue(`${result}`)

      return
    }
    setCurrentValue(`${currentValue === "0" ? "" : currentValue}${result}`)
  }
  const getResult = () => {
    setTypeActive("")
  }

  return (
    <div className="App">
      <header>
        <p>Calculator</p>

      </header>
      <Display value={currentValue} />
      <ButtonNumberPanel handleClick={changeValue} />
      <OperationButtonPanel makeOperation={setTypeActive} />
      <button onClick={getResult}>=</button>
    </div>
  );
}

export default App;
