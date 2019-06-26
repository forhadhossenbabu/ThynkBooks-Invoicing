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
      <div>
        <nav className="navbar navbar-expand-sm bg-dark sticky-top">
          <div className="container">
            <p className="navbar-brand">Add New Item</p>
          </div>
        </nav>

        <div className="container mt-2">
          <form onSubmit={this.handleSubmit}>
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
                <br />
                {errors.price && (
                  <small className="text-danger">{errors.price}</small>
                )}
              </div>
            </div>
            <div className="mt-3">
              <input type="submit" className="my-btn" value="Add New Invoice" />
              <Link to="/" className="my-btn ml-4">
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { createInvoice }
)(withRouter(CreateInvoice));
