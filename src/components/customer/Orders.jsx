import SideBar from "./Sidebar";
import reactLogo from "../../assets/react.svg";
import { Link } from "react-router-dom";
import { BsCheckCircleFill } from "react-icons/bs";
import { FaSpinner } from "react-icons/fa";
import { RxCrossCircled } from "react-icons/rx";

function Orders() {
  return (
    <section className="container mt-4">
      <div className="row">
        <div className="col-md-3 col-12 mb-2">
          <SideBar />
        </div>
        <div className="col-md-9 col-12 mb-2">
          <div className="row">
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Status</th>
                    <th>Action</th>
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
                    <td>
                      <span className="text-success">
                        <BsCheckCircleFill className="me-2" />
                        Completed
                      </span>
                    </td>
                    <td>
                      <button className="btn btn-primary btn-sm">
                        Download
                      </button>
                    </td>
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
                    <td>
                      <span className="text-success">
                        <BsCheckCircleFill className="me-2" />
                        Completed
                      </span>
                    </td>
                    <td>
                      <button className="btn btn-primary btn-sm">
                        Download
                      </button>
                    </td>
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
                    <td>
                      <span className="text-secondary">
                        <FaSpinner className="me-2" />
                        Processing
                      </span>
                    </td>
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
                    <td>
                      <span className="text-danger">
                        <RxCrossCircled className="me-2" />
                        Cancelled
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Orders;
