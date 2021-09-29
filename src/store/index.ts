import { combineReducers, createStore } from "redux";
import { cashReducer } from "./cashReducer";
import { customersReducer } from "./customersReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  cashR: cashReducer,
  customersR: customersReducer
});

export type rootReducerType = ReturnType<typeof rootReducer>;
export const store = createStore(rootReducer, composeWithDevTools());
