import React from 'react'
import PropTypes from 'prop-types'

const OperationButtonPanel = ({ makeOperation }) => {
    const operations = [{
        type: "PLUS", label: "+"
    },
    {
        type: "MINUS", label: "-"
    }

    ]
    return (
        <div>
            {operations.map((_) => (<button key={_.type} onClick={() => { makeOperation(_.type) }}>{_.label}</button>))

            }
        </div>
    )
}

OperationButtonPanel.propTypes = {
    makeOperation: PropTypes.func
}

export default OperationButtonPanel
