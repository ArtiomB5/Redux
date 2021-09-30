export type customersRAType = {
  type: "ADD_CUSTOMER" | "REMOVE_CUSTOMER" | "SET_CUSTOMERS";
  payload: customerType | number | Array<customerType>;
};

export type customerType = {
  name: string;
  id: number;
};

export type customersStateType = {
  customers: Array<customerType>;
};

export const SET_CUSTOMERS = "SET_CUSTOMERS";
export const ADD_CUSTOMER = "ADD_CUSTOMER";
export const REMOVE_CUSTOMER = "REMOVE_CUSTOMER";

const customersInitialState = {
  customers: []
};

export const customersReducer = (
  state: customersStateType = customersInitialState,
  action: customersRAType
) => {
  switch (action.type) {
    case SET_CUSTOMERS:
      return { ...state, customers: [...state.customers, ...action.payload] };
    case ADD_CUSTOMER:
      return { ...state, customers: [...state.customers, action.payload] };
    case REMOVE_CUSTOMER:
      return {
        ...state,
        customers: state.customers.filter(
          (customer) => customer.id !== action.payload
        )
      };
    default:
      return state;
  }
};

export const setCustomersAC = (payloadValue: Array<customerType>) => {
  return { type: SET_CUSTOMERS, payload: payloadValue };
};

export const addCustomerAC = (payloadValue: customerType | number) => {
  return { type: ADD_CUSTOMER, payload: payloadValue };
};

export const removeCustomerAC = (payloadValue: customerType | number) => {
  return { type: REMOVE_CUSTOMER, payload: payloadValue };
};
