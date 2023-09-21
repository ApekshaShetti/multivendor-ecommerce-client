import reactLogo from "../assets/react.svg";
import { Link } from "react-router-dom";

function Checkout() {
  return (
    <section className="container mt-4">
      <h3 className="mb-4">All Items (4)</h3>
      <div className="row">
        <div className="col-md-8 col-12">
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Product</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>
                    <Link>
                      <img
                        src={reactLogo}
                        className="img-thumbnail"
                        width="80"
                        alt="..."
                      />
                    </Link>
                    <p>
                      <Link>Django</Link>
                    </p>
                  </td>
                  <td>₹ 500</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    <Link>
                      <img
                        src={reactLogo}
                        className="img-thumbnail"
                        width="80"
                        alt="..."
                      />
                    </Link>
                    <p>
                      <Link>Flask</Link>
                    </p>
                  </td>
                  <td>₹ 500</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    <Link>
                      <img
                        src={reactLogo}
                        className="img-thumbnail"
                        width="80"
                        alt="..."
                      />
                    </Link>
                    <p>
                      <Link>Web Scripts</Link>
                    </p>
                  </td>
                  <td>₹ 500</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>
                    <Link>
                      <img
                        src={reactLogo}
                        className="img-thumbnail"
                        width="80"
                        alt="..."
                      />
                    </Link>
                    <p>
                      <Link>Tkinter</Link>
                    </p>
                  </td>
                  <td>₹ 500</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <th></th>
                  <th>Total</th>
                  <th>₹ 2000</th>
                </tr>
                <tr>
                  <td colSpan="3" align="right">
                    <Link
                      to="/"
                      className="btn  btn-success align-items-center  ms-2 mt-3 mb-3"
                    >
                      Continue Shopping
                    </Link>
                    <Link
                      to="order/success"
                      className="btn  btn-primary align-items-center  ms-2 mt-3 me-2 mb-3"
                    >
                      Proceed to Payment
                    </Link>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Checkout;
