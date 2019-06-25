import React from "react";
import { isEmpty } from "validator";
import uuid from "uuid/v4";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import { createInvoice } from "../actions/invoiceActions";

class CreateInvoice extends React.Component {
  state = {
    toggleFrom: false,
    name: "",
    quantity: "",
    currency: "USD",
    price: "",
    errors: {}
  };
  handleChange = e =>
    this.setState({ [e.target.name]: e.target.value, errors: {} });

  componentDidMount() {
    this.setState({
      name: "",
      quantity: "",
      price: "",
      currency: "USD",
      errors: {}
    });
  }

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
      id: uuid(),
      name,
      quantity,
      price,
      currency
    };

    this.props.createInvoice(newInvoiceDate, this.props.history);
  };
  render() {
    const { errors } = this.state;

    return (
      <div className="container mt-4">
        <h3 className="display-4 pb-4">Create New Invoice</h3>
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
          <input type="submit" className="btn-orange" value="Add New Invoice" />
          <Link to="/" className="btn-orange mt-4 ml-5">
            Back to Invoice
          </Link>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { createInvoice }
)(withRouter(CreateInvoice));
