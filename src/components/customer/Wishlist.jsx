import SideBar from "./Sidebar";
import reactLogo from "../../assets/react.svg";
import { Link } from "react-router-dom";

function Wishlist() {
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
                      <button
                        className="text-white"
                        style={{ backgroundColor: "red", border: "none" }}
                      >
                        Remove
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
                      <button
                        className="text-white"
                        style={{ backgroundColor: "red", border: "none" }}
                      >
                        Remove
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
                      <button
                        className="text-white"
                        style={{ backgroundColor: "red", border: "none" }}
                      >
                        Remove
                      </button>
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
                      <button
                        className="text-white"
                        style={{ backgroundColor: "red", border: "none" }}
                      >
                        Remove
                      </button>
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

export default Wishlist;
