export const getOperationSymbol = (typeActive) => {
    switch (typeActive) {
        case "SUM": { return " + " }

        case "SUBSTRACT": { return " - " }

        case "DIVIDE": { return " / " }

        case "MULTIPLY": { return " * " }

        case "MODULO": { return " % " }

        default: { }
    }
}