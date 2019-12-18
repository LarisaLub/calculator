import React from 'react'
import PropTypes from 'prop-types'
import Button from 'react-bootstrap/Button'

const OperationButtonPanel = ({ makeOperation }) => {
    const operations = [{
        type: "PLUS", label: "+"
    },
    {
        type: "MINUS", label: "-"
    },
    {
        type: "DIVIDE", label: " / "
    },

    {
        type: "MULTIPLY", label: "*"
    },
    {
        type: "MODULO", label: "%"
    }
    ]
    return (
        <div>

            {operations.map((_) => (<Button variant="warning" key={_.type} onClick={() => { makeOperation(_.type) }}>{_.label}</Button>))

            }
        </div>

    )

}


OperationButtonPanel.propTypes = {
    makeOperation: PropTypes.func
}

export default OperationButtonPanel
