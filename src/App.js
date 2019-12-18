import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Display from "./components/Display";
import OperationNumberPanel from "./components/OperationNumberPanel";
import OperationButtonPanel from "./components/OperationButtonPanel";
import Button from 'react-bootstrap/Button'
import { calculateResult } from "./utils/getResult"
import HistoryDisplay from "./components/HistoryDisplay"
function App() {
  const [currentValue, setCurrentValue] = useState("0")
  const [prevValue, setPrevValue] = useState("")
  const [typeActive, setTypeActive] = useState("")
  const [history, setHistory] = useState([])

  const makeOperation = (action) => {
    setTypeActive(action)
  }

  const changeValue = (result) => {
    if (!prevValue && typeActive) {
      setPrevValue(currentValue)
      setCurrentValue(`${result}`)
      return
    }
    setCurrentValue(`${currentValue === "0" ? "" : currentValue}${result}`)
  }

  const getResult = () => {
    const result = calculateResult(prevValue, currentValue, typeActive)
    let currentHistory = [...history]
    currentHistory.push({ prevValue, currentValue, typeActive, result })
    setHistory(currentHistory)
    setCurrentValue(result)
    setTypeActive("")
    setPrevValue("")
  }

  const clearValues = () => {
    setCurrentValue("")
    setPrevValue("")
    setTypeActive("")
  }

  return (
    <div className="App">
      <header>
        <p>Calculator</p>

      </header>
      <Display value={currentValue} />
      <OperationNumberPanel handleClick={changeValue} />
      <OperationButtonPanel makeOperation={makeOperation} />
      <Button variant="primary" onClick={getResult}>=</Button>
      <Button variant="info" onClick={clearValues}>C</Button>
      <HistoryDisplay history={history} />
    </div>
  );
}

export default App;
