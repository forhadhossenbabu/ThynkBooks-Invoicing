import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { removeInvoice } from "../actions/invoiceActions";

class InvoiceList extends React.Component {
  state = { invoice: {} };
  componentWillReceiveProps(nextProps) {
    if (nextProps.invoice) {
      this.setState({ invoice: nextProps.invoice });
    }
  }

  removeInvoice = id => this.props.removeInvoice(id);

  renderInvoiceList = () => {
    const { invoice } = this.props;
    if (invoice.invoices.length > 0)
      return (
        <div className="mt-3 mb-3">
          <h4 className="invoices">Total Item Added</h4>
          <div className="user-table-header">
            <div className="row">
              <div className="col-md">
                <span>No</span>
              </div>
              <div className="col-md-3">
                <span>Name</span>
              </div>
              <div className="col-md">
                <span>Price</span>
              </div>
              <div className="col-md">
                <span>Quantity</span>
              </div>
              <div className="col-md">
                <span>Remove</span>
              </div>
            </div>
          </div>
          {invoice.invoices.map((invoice, i) => (
            <div className="user-table-item">
              <div className="row">
                <div className="col-md">{i + 1}</div>
                <div className="col-md-3">{invoice.name}</div>
                <div className="col-md">{invoice.price}</div>

                <div className="col-md">{invoice.quantity}</div>
                <div className="col-md">
                  <a
                    href="#!"
                    className="text-danger"
                    onClick={() => this.removeInvoice(invoice.id)}
                  >
                    Remove
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      );
    else
      return (
        <div>
          <div className="mt-3">
            <h4 className="invoicesx">Item Not Available</h4>
          </div>
        </div>
      );
  };
  render() {
    return <div className="mt-3">{this.renderInvoiceList()}</div>;
  }
}

const mapStateToProps = state => ({
  invoice: state.invoice
});

export default connect(
  mapStateToProps,
  { removeInvoice }
)(InvoiceList);
