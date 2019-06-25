import { ADD_INVOICE } from "../actions/types";

const initialState = {
  invoices: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_INVOICE:
      return {
        ...state,
        invoices: [...state.invoices, action.payload]
      };
    default:
      return state;
  }
}
