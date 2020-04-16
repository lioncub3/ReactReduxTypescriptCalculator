import { ApplicationState, reducers } from ".";
import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

export default function configureStore(initialState?: ApplicationState) {
    const rootReducer = combineReducers({
        ...reducers
    });

    return createStore(
        rootReducer,
        initialState,
        composeWithDevTools()
    );
}
