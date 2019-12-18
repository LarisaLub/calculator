import React from 'react'
import PropTypes from 'prop-types'

const HistoryDisplay = ({ history }) => {
    return (
        <div className="history-display">
            {history.map(_ => {

                return (
                    <div>
                        <span>
                            {
                                _.prevValue
                            }
                        </span>
                        <span>
                            {_.typeActive}
                        </span>
                        <span>
                            {_.currentValue}
                        </span>
                        <span> = </span>
                        <span>
                            {_.result}
                        </span>
                    </div>
                )
            })}
        </div>
    )
}

HistoryDisplay.propTypes = {
    history: PropTypes.array
}

export default HistoryDisplay