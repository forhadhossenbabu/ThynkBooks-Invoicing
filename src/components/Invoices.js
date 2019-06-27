import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Invoice extends React.Component {
  render() {
    return (
      <div className="container">
        <h4 className="invoices">Invoices</h4>
        <div className="row">
          <div className="col">
            <label>Billed</label>
            <h3 className="billed">
              <span>$</span>214.50
            </h3>
          </div>
          <div className="col">
            <label>Recived</label>
            <h3 className="billed">
              <span>$</span>214.50
            </h3>
          </div>
          <div className="col">
            <a to="/createinvoice" className="btn-my">
              Export to PDF
            </a>
          </div>
          <div className="col">
            <Link to="/createinvoice" className="btn-my">
              Create Invoice
            </Link>
          </div>
        </div>
        <hr />
        <div>
          <div className="user-table-header mt-3">
            <div className="row">
              <div className="col-md">No</div>
              <div className="col-md">Client</div>
              <div className="col-md">Issue</div>
              <div className="col-md">Due</div>
              <div className="col-md">Paid</div>
              <div className="col-md">Billed</div>
              <div className="col-md">Recived</div>
              <div className="col-md">Status</div>
            </div>
          </div>
          <div className="user-table-item">
            <div className="row">
              <div className="col-md">1</div>
              <div className="col-md-3">Rebaka Dewson</div>
              <div className="col-md">12 Jul 2019</div>
              <div className="col-md">07 Sep 2019</div>
              <div className="col-md">-</div>
              <div className="col-md">$ 240</div>
              <div className="col-md">$ 0.00</div>
              <div className="col-md">
                <p className="sent">Sent</p>
              </div>
            </div>
          </div>
          <div className="user-table-item">
            <div className="row">
              <div className="col-md">1</div>
              <div className="col-md-3">Rebaka Dewson</div>
              <div className="col-md">12 Jul 2019</div>
              <div className="col-md">07 Sep 2019</div>
              <div className="col-md">-</div>
              <div className="col-md">$ 240</div>
              <div className="col-md">$ 0.00</div>
              <div className="col-md">
                <p className="sent">Sent</p>
              </div>
            </div>
          </div>
          <div className="user-table-item">
            <div className="row">
              <div className="col-md">1</div>
              <div className="col-md-3">Rebaka Dewson</div>
              <div className="col-md">12 Jul 2019</div>
              <div className="col-md">07 Sep 2019</div>
              <div className="col-md">-</div>
              <div className="col-md">$ 240</div>
              <div className="col-md">$ 0.00</div>
              <div className="col-md">
                <p className="sent">Sent</p>
              </div>
            </div>
          </div>
          <div className="user-table-item">
            <div className="row">
              <div className="col-md">1</div>
              <div className="col-md-3">Rebaka Dewson</div>
              <div className="col-md">12 Jul 2019</div>
              <div className="col-md">07 Sep 2019</div>
              <div className="col-md">-</div>
              <div className="col-md">$ 240</div>
              <div className="col-md">$ 0.00</div>
              <div className="col-md">
                <p className="sent">Sent</p>
              </div>
            </div>
          </div>
          <div className="user-table-item">
            <div className="row">
              <div className="col-md">1</div>
              <div className="col-md-3">Rebaka Dewson</div>
              <div className="col-md">12 Jul 2019</div>
              <div className="col-md">07 Sep 2019</div>
              <div className="col-md">-</div>
              <div className="col-md">$ 240</div>
              <div className="col-md">$ 0.00</div>
              <div className="col-md">
                <p className="sent">Sent</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  invoice: state.invoice
});
export default connect(mapStateToProps)(Invoice);
