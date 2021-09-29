export type cashRAType = {
  type: "ADD_CASH" | "GET_CASH";
  payload: number;
};

export type cashStateType = {
  cash: number;
};

export const ADD_CASH = "ADD_CASH";
export const GET_CASH = "GET_CASH";

const cashInitialState = {
  cash: 0
};

export const cashReducer = (
  state: cashStateType = cashInitialState,
  action: cashRAType
) => {
  switch (action.type) {
    case ADD_CASH:
      return { ...state, cash: state.cash + action.payload };
    case GET_CASH:
      return { ...state, cash: state.cash - action.payload };
    default:
      return state;
  }
};

export const addCashAC = (payloadValue: number) => {
  return { type: ADD_CASH, payload: payloadValue };
};

export const getCashAC = (payloadValue: number) => {
  return { type: GET_CASH, payload: payloadValue };
};
