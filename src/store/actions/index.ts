import { action } from 'typesafe-actions';
import { CALC_ADD_SYMBOL, CALC_GET_RESULT, CALC_CLEAR_TEXT } from '../constants/constants';

interface addSymbolAction {
    type: typeof CALC_ADD_SYMBOL,
    payload: string
}

interface getResultAction {
    type: typeof CALC_GET_RESULT
}

interface crearTextAction {
    type: typeof CALC_CLEAR_TEXT
}

export type CalcActionTypes = addSymbolAction | getResultAction | crearTextAction;

export const addSymbol = (symbol: string): addSymbolAction => action(CALC_ADD_SYMBOL, symbol);
export const getResult = (): getResultAction => action(CALC_GET_RESULT);
export const clearText = (): crearTextAction => action(CALC_CLEAR_TEXT);