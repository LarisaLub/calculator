import React from 'react'
import PropTypes from 'prop-types'

const Display = ({ value }) => {
    return (
        <div>
            {value}
        </div>
    )
}

Display.propTypes = {
    value: PropTypes.number
}

export default Display
