import React from "react";
import { Link } from "react-router-dom";

import InvoiceList from "./InvoiceList";
import { connect } from "react-redux";

class Invoice extends React.Component {
  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-expand-sm navbar-light mt-4">
          <p className="navbar-brand">User Invoicing Interface Application</p>

          <div className="collapse navbar-collapse" id="navbarNav">
            <Link className="btn-orange ml-auto" to="/createinvoice">
              {this.props.invoice.invoices.length > 0
                ? "Create Another Invoice"
                : "Create New Invoice"}
            </Link>
          </div>
        </nav>
        <InvoiceList />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  invoice: state.invoice
});
export default connect(mapStateToProps)(Invoice);
