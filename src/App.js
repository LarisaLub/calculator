import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Display from "./components/Display";
import OperationNumberPanel from "./components/OperationNumberPanel";
import OperationButtonPanel from "./components/OperationButtonPanel";
import { calculateResult } from "./utils/getResult"
import HistoryDisplay from "./components/HistoryDisplay"


function App() {
  const [currentValue, setCurrentValue] = useState("0")
  const [prevValue, setPrevValue] = useState("")
  const [typeActive, setTypeActive] = useState("")
  const [history, setHistory] = useState([])
  const [isShowHistory, setIsShowHistory] = useState(false)

  const makeOperation = (action) => {
    setTypeActive(action)
  }

  const cancelLastValue = () => {
    let result = currentValue.split("")
    result.splice(-1, 1)
    setCurrentValue(result.join(""))
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
    <div className="box">
      <Display value={currentValue} />
      <div className="flex-box">
        <div className="left-col">
          <button className="result" onClick={getResult}>=</button>
          <button className="result" onClick={clearValues}>C</button>
          <button className="result" onClick={cancelLastValue}>AC</button>

          <OperationNumberPanel handleClick={changeValue}>

            <button className="history-button" onClick={() => setIsShowHistory(!isShowHistory)}>{isShowHistory ? "HIDE" : "SHOW"} HISTORY</button>
          </OperationNumberPanel>
        </div>
        <OperationButtonPanel makeOperation={makeOperation} />
      </div>

      {isShowHistory && (<HistoryDisplay history={history} setHistory={setHistory} />)}
    </div>
  );
}

export default App;