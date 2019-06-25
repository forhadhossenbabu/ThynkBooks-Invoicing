import { ADD_INVOICE, REMOVE_INVOICE } from "../actions/types";

export const createInvoice = (data, history) => dispatch => {
  dispatch({ type: ADD_INVOICE, payload: data });
  history.push("/");
};

export const removeInvoice = id => dispatch =>
  dispatch({ type: REMOVE_INVOICE, payload: id });
