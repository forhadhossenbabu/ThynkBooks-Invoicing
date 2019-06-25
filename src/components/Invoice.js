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
    this.setState({ [e.target.name]: e.target.value, errors: {} });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { email, errors } = this.state;
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(email)) {
      errors.email = "A valid Email is required";
      return this.setState({ errors });
    }

    const dataToSubmit = {
      email,
      invoices: this.state.invoice.invoice
    };
    console.log(dataToSubmit);
    alert(dataToSubmit);
  };

  render() {
    const { email, errors } = this.state;
    return (
      <div>
        <nav className="navbar navbar-expand-sm bg-dark sticky-top">
          <div className="container">
            <p className="navbar-brand">Invoice Creator</p>
            <ul className="navbar-nav ml-auto">
              <li className="nev-item">
                <Link className="" to="/createinvoice">
                  {this.props.invoice.invoices.length > 0
                    ? "Add Another Item"
                    : "Add First Item"}
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="container mt-2">
          <img
            src="https://abeon-hosting.com/images/red-hibiscus-flower-clipart-3.jpg"
            width="80"
            className="mb-3 mt-2"
            alt="LOGO"
          />
          <div className="row">
            <div className="col-md-6">
              <p className="foo">Flower Preservation Society</p>
              <p className="bar">Forhad Hossen</p>
              <p className="bar">Bon Air Center #384 CA-94904</p>
              <p className="bar">info@flpressociety.com</p>
              <p className="bar">+01 (0) 1-23456789</p>
              <p className="bar"> Tax ID: 123-456-789</p>
            </div>
            <div className="col-md-6 col-right">
              <p className="display-4" style={{ color: "#1808d2" }}>
                Invoice
              </p>
              <p className="foo">#First Invoice</p>
              <p className="bar">Created: 13/06/2018</p>
              <p className="bar">Due: 05/02/2018</p>
              <p className="bar">(Payment 60 Days After Invoice Date)</p>
            </div>
          </div>
          <div className="row mt-1">
            <div className="col-md-6 ">
              <p className="foo">Billed To</p>
              <p className="bar">Apple Inc.</p>
              <p className="bar">Tim Cook</p>
              <p className="bar">tim@apple.com</p>
              <p className="bar">1-234-567-890</p>
            </div>
            <div className="col-md-6" />
          </div>

          <InvoiceList />
          {this.props.invoice.invoices.length > 0 && (
            <div className="mt-5">
              <form onSubmit={this.handleSubmit}>
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <strong>Bill To</strong>
                    </span>
                  </div>
                  <input
                    type="text"
                    name="email"
                    onChange={this.handleChange}
                    value={email}
                    className="form-control"
                  />
                </div>
                {errors.email && (
                  <small className="text-danger">{errors.email}</small>
                )}
                <br />

                <button className="my-btn mb-5 mt-2">Send Invoice</button>
              </form>
            </div>
          )}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  invoice: state.invoice
});
export default connect(mapStateToProps)(Invoice);
