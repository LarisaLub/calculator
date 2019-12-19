export const calculateResult = (prevValue, currentValue, typeActive) => {
    switch (typeActive) {
        case "SUM":
            { return (Number(currentValue) + Number(prevValue)) }

        case "SUBSTRACT":
            { return (Number(prevValue) - Number(currentValue)) }

        case "DIVIDE":
            { return (Number(prevValue) / Number(currentValue)) }

        case "MULTIPLY":
            { return (Number(prevValue) * Number(currentValue)) }

        case "MODULO":
            { return (Number(prevValue) % Number(currentValue)) }

        default: { }
    }
}