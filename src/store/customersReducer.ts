export type customersRAType = {
  type: "ADD_CUSTOMER" | "REMOVE_CUSTOMER";
  payload: customerType | number;
};

export type customerType = {
  name: string;
  id: number;
};

export type customersStateType = {
  customers: Array<customerType>;
};

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

export const addCustomerAC = (payloadvalue: customerType | number) => {
  return { type: ADD_CUSTOMER, payload: payloadvalue };
};

export const removeCustomerAC = (payloadvalue: customerType | number) => {
  return { type: REMOVE_CUSTOMER, payload: payloadvalue };
};
