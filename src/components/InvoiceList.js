import React from "react";
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
    console.log(invoice);
    if (invoice.invoices)
      if (invoice.invoices.length === 1) {
        return (
          <table className="table table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th>Invoice Name</th>
                <th>Quantity</th>
                <th>Currency</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {invoice.invoices.map((invoice, i) => (
                <tr key={i}>
                  <th scope="row">{i + 1}</th>
                  <td>{invoice.name}</td>
                  <td>{invoice.quantity}</td>
                  <td>{invoice.currency}</td>
                  <td>{invoice.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        );
      } else if (invoice.invoices.length > 1) {
        return (
          <table className="table table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th>Invoice Name</th>
                <th>Quantity</th>
                <th>Currency</th>
                <th>Price</th>
                <th>Remove Invoice</th>
              </tr>
            </thead>
            <tbody>
              {invoice.invoices.map((invoice, i) => (
                <tr key={i}>
                  <th scope="row">{i + 1}</th>
                  <td>{invoice.name}</td>
                  <td>{invoice.quantity}</td>
                  <td>{invoice.currency}</td>
                  <td>{invoice.price}</td>
                  <td>
                    <a
                      href="#!"
                      className="text-danger"
                      onClick={() => this.removeInvoice(invoice.id)}
                    >
                      Remove
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        );
      } else {
        return (
          <div>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Invoice Name</th>
                  <th>Quantity</th>
                  <th>Currency</th>
                  <th>Price</th>
                </tr>
              </thead>
            </table>
            <h3 className="text-danger mt-4 text-center">
              Invoice Not Yet Created.
            </h3>
          </div>
        );
      }
  };
  render() {
    return (
      <div className="mt-5">
        <h3>Invoice List</h3>
        {this.renderInvoiceList()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  invoice: state.invoice
});

export default connect(
  mapStateToProps,
  { removeInvoice }
)(InvoiceList);
