import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import InvoiceList from "../components/InvoiceList";

class InvoicePrepend extends React.Component {
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
      invoices: this.props.invoice.invoices
    };
    console.log(dataToSubmit);
    alert(dataToSubmit);
  };

  componentDidMount() {
    if (this.props.invoice.invoices.length === 0) {
      return this.props.history.push("/");
    }
  }
  render() {
    const { email, errors } = this.state;

    return (
      <div className="container mt-1">
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
              <div class="input-group">
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
              <p className="mb-2">
                {errors.email && (
                  <small className="text-danger">{errors.email}</small>
                )}
              </p>
              <button className="my-btn mb-2" type="submit">
                Send Invoice
              </button>
            </form>
            <Link to="/createinvoice" className="my-btn">
              Add More Item
            </Link>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  invoice: state.invoice
});

export default connect(mapStateToProps)(InvoicePrepend);
