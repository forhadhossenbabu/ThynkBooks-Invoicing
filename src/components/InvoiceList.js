import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { removeInvoice } from "../actions/invoiceActions";

class InvoiceList extends React.Component {
  state = { invoice: {} };
  componentWillReceiveProps(nextProps) {
    if (nextProps.invoice) {
      this.setState({ invoice: nextProps.invoice });
    }
  }
  componentDidMount() {
    if (this.props.invoice.invoices.length === 0) {
      // return this.props.history.push("/");
      console.log(this.props);
    }
  }

  removeInvoice = id => this.props.removeInvoice(id);

  renderInvoiceList = () => {
    const { invoice } = this.props;
    if (invoice.invoices.length > 0)
      return (
        <table className="table table-hover">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {invoice.invoices.map((invoice, i) => (
              <tr key={i}>
                <th scope="row">{i + 1}</th>
                <td>{invoice.name}</td>
                <td>{invoice.price}</td>
                <td>{invoice.quantity}</td>
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
    else
      return (
        <div>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
              </tr>
            </thead>
          </table>
          <h3 className="text-danger mt-4 text-center">Item Not Added Yet.</h3>
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
)(withRouter(InvoiceList));
