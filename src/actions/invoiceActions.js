import { ADD_INVOICE } from "../actions/types";

export const createInvoice = data => dispatch => {
  dispatch({ type: ADD_INVOICE, payload: data });
};
