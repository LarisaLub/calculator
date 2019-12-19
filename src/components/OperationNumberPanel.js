import React from 'react'
import PropTypes from 'prop-types'

const OperationNumberPanel = ({ handleClick, children }) => {
    const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
    return (
        <div className="operation-number-panel">
            {values.map(_ => (<button key={_} onClick={() => handleClick(_)}>{_}</button>))}
            {children}
        </div>
    )
}

OperationNumberPanel.propTypes = {
    handleClick: PropTypes.func
}

export default OperationNumberPanel
