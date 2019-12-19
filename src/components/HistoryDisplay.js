import React from 'react'
import PropTypes from 'prop-types'
import { getOperationSymbol } from "../utils/getOperationSymbol"

const HistoryDisplay = ({ history, setHistory }) => {

    return (
        <div className="history-display">
            {history.map(_ => {
                return (
                    <div>
                        <span> {_.prevValue}</span>
                        <span>{getOperationSymbol(_.typeActive)}</span>
                        <span> {_.currentValue}</span>
                        <span> = </span>
                        <span>{_.result}</span>
                    </div>
                )
            })}
            <button className="clear-history-button" onClick={() => setHistory([])} >CLEAR HISTORY </button>
        </div>
    )
}

HistoryDisplay.propTypes = {
    history: PropTypes.array
}

export default HistoryDisplay