import React from 'react'
import PropTypes from 'prop-types'

const Display = ({ value }) => {
    return (
        <div className="main-display">
            {value}
        </div>
    )
}

Display.propTypes = {
    value: PropTypes.string
}

export default Display
