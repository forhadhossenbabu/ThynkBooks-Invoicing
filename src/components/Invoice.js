import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import InvoiceList from "./InvoiceList";

class Invoice extends React.Component {
  state = {
    email: "",
    errors: {}
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleBillTo = e => {
    e.preventDefault();
    const { email, errors } = this.state;
    let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    console.log();
    if (!regex.test(email)) {
      errors.email = "A valid email address is required.";
      return this.setState({ errors });
    }

    alert("Invoices Sent to " + email);
  };

  render() {
    const { email, errors } = this.state;
    return (
      <div className="container">
        <nav className="navbar navbar-expand-sm navbar-light mt-4">
          <p className="navbar-brand">User Invoicing Interface Application</p>
          <ul class="navbar-nav ml-auto">
            {this.props.invoice.invoices.length > 0 ? (
              <li class="nav-item">
                <a
                  className="btn-orange mr-3"
                  href="#!"
                  onClick={this.handleBillTo}
                >
                  Send Invoice
                </a>
              </li>
            ) : null}
            <Link className="btn-orange " to="/createinvoice">
              {this.props.invoice.invoices.length > 0
                ? "Create Another Invoice"
                : "Create New Invoice"}
            </Link>
          </ul>
        </nav>
        <InvoiceList />
        <hr />
        {this.props.invoice.invoices.length > 0 ? (
          <div className="row">
            <div className="col-md-1">
              <h4>Bill To</h4>
            </div>
            <div className="col-md-5">
              <input
                type="name"
                name="email"
                value={email}
                onChange={this.handleChange}
                className="form-control"
                placeholder="Enter your email address"
              />
              {errors.email && (
                <small className="text-danger">{errors.email}</small>
              )}
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  invoice: state.invoice
});
export default connect(mapStateToProps)(Invoice);
