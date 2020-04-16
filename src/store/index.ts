import * as Calc from "./store-items/Calc";

export interface ApplicationState {
    calc: Calc.CalcState;
}

export const reducers = {
    calc: Calc.reducer
};

export interface AppThunkAction<TAction> {
    (dispatch: (action: TAction) => void, getState: () => ApplicationState): void;
}