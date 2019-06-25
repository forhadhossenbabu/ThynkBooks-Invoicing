import { ADD_INVOICE, REMOVE_INVOICE } from "../actions/types";

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
    case REMOVE_INVOICE:
      return {
        ...state,
        invoices: state.invoices.filter(
          invoice => invoice.id !== action.payload
        )
      };
    default:
      return state;
  }
}
