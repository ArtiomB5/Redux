import { applyMiddleware, combineReducers, createStore } from "redux";
import { cashReducer } from "./cashReducer";
import { customersReducer } from "./customersReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  cashR: cashReducer,
  customersR: customersReducer
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export type rootReducerType = ReturnType<typeof rootReducer>;
export type dispatchType = typeof store.dispatch;
