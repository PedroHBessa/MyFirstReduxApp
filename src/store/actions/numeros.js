export function changeMinValue(value){
    return{
        type: 'MIN_VALUE_CHANGED',
        payload: value
    }
}

export function changeMaxValue(value){
    return{
        type: 'MAX_VALUE_CHANGED',
        payload: value
    }
}