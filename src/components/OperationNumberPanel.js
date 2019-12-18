import React from 'react'
import PropTypes from 'prop-types'
import Button from 'react-bootstrap/Button'

const OperationNumberPanel = ({ handleClick }) => {
    const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
    return (
        <div>
            {values.map(_ => (<Button variant="secondary" key={_} onClick={() => handleClick(_)}>{_}</Button>))}
        </div>
    )
}

OperationNumberPanel.propTypes = {
    handleClick: PropTypes.func
}

export default OperationNumberPanel
