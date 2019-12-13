import React from 'react'
import PropTypes from 'prop-types'

const ButtonNumberPanel = ({ handleClick }) => {
    const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
    return (
        <div>
            {values.map(_ => (<button key={_} onClick={() => handleClick(_)}>{_}</button>))}
        </div>
    )
}

ButtonNumberPanel.propTypes = {
    handleClick: PropTypes.func
}

export default ButtonNumberPanel
