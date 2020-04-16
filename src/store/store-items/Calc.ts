import { CalcActionTypes } from "../actions";

export interface CalcState {
    text: string
}

const initialState = {
    text: '0'
};

export const reducer = (state = initialState, action: CalcActionTypes) => {
    switch (action.type) {
        case 'CALC_ADD_SYMBOL':
            return { ...state, text: addSymbol(state.text, action.payload) };
        case 'CALC_GET_RESULT':
            return { ...state, text: getMathResultFromString(state.text) };
        case 'CALC_CLEAR_TEXT':
            return { ...state, text: '0' }
        default:
            return state;
    }
}

const addSymbol = (text1: string, text2:string): string => {
    let specialChars = ['+', '-', '÷', '×', '.'];
    let lastSybmol = text1.toString().slice(-1);
    switch (text1) {
        case '0': {
            if (['+', '÷', '×', '.'].includes(text2))
                return text1;
            return text2;
        }
        case '-':
            if (['+', '÷', '×', '.'].includes(text2))
                return text1;
        default: {
            if (specialChars.includes(lastSybmol) && specialChars.includes(text2)) {
                if (['÷', '×'].includes(lastSybmol))
                    return ''.concat(text1, text2);
                return text1.replace(/.$/, text2);
            }
            else
                return ''.concat(text1, text2);
        }
    }
}

const getMathResultFromString = (text: string): string => {
    let highPriorityReg = /-?[0-9.]+[×÷]-?[0-9.]+/;
    let lowPriorityReg = /-?[0-9.]+[+-][0-9.]+/;
    let result = text;
    let temp: any = text;
    while (true) {
        let expression: any = temp = highPriorityReg.exec(result);
        if (temp === null) {
            expression = temp = lowPriorityReg.exec(result);
            if (temp === null)
                break;
            let operationReg = /[+-]/g;
            let first = temp[0].charAt(0);
            let curOperation = temp[0].match(operationReg)[first === "-" ? 1 : 0];
            temp = temp.toString().split(/[+-]/);
            let x = temp[0], y = temp[1];
            if(first === "-") {
                x = -temp[1];
                y = temp[2];
            }
            if (curOperation === "+")
                temp = parseFloat(x) + parseFloat(y);
            if (curOperation === "-")
                temp = x - y;
            result = result.replace(expression[0], temp);
            continue;
        }
        let operationReg = /[÷×]/;
        let curOperation: any = operationReg.exec(temp[0]);
        if(curOperation === null)
            return "error";
        curOperation = curOperation[0];
        temp = temp.toString().split(/[×÷]/);
        if (curOperation === "÷")
            temp = temp[0] / temp[1];
        if (curOperation === "×")
            temp = temp[0] * temp[1];
        result = result.replace(expression[0], temp);
    }

    return result;
}