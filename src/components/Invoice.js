import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import InvoiceList from "./InvoiceList";

class Invoice extends React.Component {
  render() {
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
          <InvoiceList />
          {this.props.invoice.invoices.length > 0 && (
            <Link to="/sendinvoice" className="my-btn">
              Send Invoice
            </Link>
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
