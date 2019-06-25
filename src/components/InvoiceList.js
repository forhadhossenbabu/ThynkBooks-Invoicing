import React from "react";
import { connect } from "react-redux";

class InvoiceList extends React.Component {
  state = { invoice: {} };
  componentWillReceiveProps(nextProps) {
    if (nextProps.invoice) {
      this.setState({ invoice: nextProps.invoice });
    }
  }
  renderInvoiceList = () => {
    const { invoice } = this.state;
    if (invoice.invoices) {
      return (
        <table class="table table-bordered">
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
    } else {
      return (
        <div>
          <h3 className="text-danger">Invoice Not Found</h3>
        </div>
      );
    }
  };
  render() {
    return (
      <div className="mt-5">
        <h4 className="display-3">Invoice List</h4>
        {this.renderInvoiceList()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  invoice: state.invoice
});

export default connect(mapStateToProps)(InvoiceList);
