import React from 'react'
import PropTypes from 'prop-types'

const OperationButtonPanel = ({ makeOperation }) => {
    const operations = [{
        type: "SUM", label: "+"
    },
    {
        type: "SUBSTRACT", label: "-"
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
        <div className="operation-button-panel">

            {operations.map((_) => (<button key={_.type} onClick={() => { makeOperation(_.type) }}>{_.label}</button>))

            }
        </div>

    )

}


OperationButtonPanel.propTypes = {
    makeOperation: PropTypes.func
}

export default OperationButtonPanel
