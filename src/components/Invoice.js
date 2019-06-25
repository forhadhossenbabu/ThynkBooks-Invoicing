import React from "react";
import { connect } from "react-redux";
import { createInvoice } from "../actions/invoiceActions";
import { isEmpty } from "validator";
import InvoiceList from "./InvoiceList";

class Invoice extends React.Component {
  state = {
    toggleFrom: false,
    name: "",
    quantity: "",
    currency: "USD",
    price: "",
    errors: {}
  };
  toggleInvoiceForm = () => {
    this.setState({ toggleFrom: !this.state.toggleFrom });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, quantity, price, currency, errors } = this.state;
    if (isEmpty(name)) {
      errors.name = "Name can't be empty";
      return this.setState({ errors });
    }
    if (isEmpty(quantity)) {
      errors.quantity = "Quantity can't be empty";
      return this.setState({ errors });
    }
    if (isEmpty(price)) {
      errors.price = "Price can't be empty";
      return this.setState({ errors });
    }

    const newInvoiceDate = {
      name,
      quantity,
      price,
      currency
    };

    this.props.createInvoice(newInvoiceDate);
    this.setState({ name: "", quantity: "", price: "", currency: "USD" });
  };

  render() {
    const { toggleFrom, errors, invoices } = this.state;
    return (
      <div className="container">
        <div className="d-flex justify-content-between row-hl mb-4">
          <div className=" item-hl">
            <h4 className="display-4">User Invoicing</h4>
          </div>
          <div className=" item-hl">
            <button
              className="btn btn-primary mt-4"
              onClick={this.toggleInvoiceForm}
            >
              Create Invoice
            </button>
          </div>
        </div>
        {toggleFrom && (
          <form onSubmit={this.handleSubmit}>
            <div className="d-flex justify-content-between row-hl">
              <div className="row">
                <div className="col-md-3 ma">
                  <label>Name</label>
                  <input
                    type="name"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                    className="form-control"
                  />
                  {errors.name && (
                    <small className="text-danger">{errors.name}</small>
                  )}
                </div>
                <div className="col-md-3 ma">
                  <label>Quantity</label>
                  <input
                    type="text"
                    name="quantity"
                    value={this.state.quantity}
                    onChange={this.handleChange}
                    className="form-control"
                  />
                  {errors.quantity && (
                    <small className="text-danger">{errors.quantity}</small>
                  )}
                </div>
                <div className="col-md-3">
                  <label>Currency</label>
                  <select
                    className="form-control"
                    value={this.state.currency}
                    onChange={this.handleChange}
                    name="currency"
                  >
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="GBP">GBP</option>
                    <option value="INR">INR</option>
                  </select>
                </div>
                <div className="col-md-3 ma">
                  <label>Price</label>
                  <input
                    type="number"
                    name="price"
                    value={this.state.price}
                    onChange={this.handleChange}
                    className="form-control"
                  />
                  {errors.price && (
                    <small className="text-danger">{errors.price}</small>
                  )}
                </div>
              </div>
            </div>
            <button type="submit" className="btn btn-success mt-4">
              Add New Invoice
            </button>
          </form>
        )}
        <InvoiceList />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  invoice: state.invoice
});

export default connect(
  mapStateToProps,
  { createInvoice }
)(Invoice);
