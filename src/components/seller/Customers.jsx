import SellerSideBar from "./SellerSideBar";
import { AiFillDelete } from "react-icons/ai";

function Customers() {
  return (
    <section className="container mt-4">
      <div className="row">
        <div className="col-md-3 col-12 mb-2">
          <SellerSideBar />
        </div>
        <div className="col-md-9 col-12 mb-2">
          <div className="row">
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Apeksha Shetti</td>
                    <td>apekshashetti1012@gmail.com</td>
                    <td>8999480460</td>
                    <td>
                      <button className="btn btn-danger btn-sm">
                        <AiFillDelete
                          className="me-2 mb-1"
                          style={{ fontSize: "20px" }}
                        />
                        Remove
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Vinay Sarda</td>
                    <td>vinaysarda2812@gmail.com</td>
                    <td>8999480460</td>
                    <td>
                      <button className="btn btn-danger btn-sm">
                        <AiFillDelete
                          className="me-2 mb-1"
                          style={{ fontSize: "20px" }}
                        />
                        Remove
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Zaid Odam</td>
                    <td>zaidodam@gmail.com</td>
                    <td>8999480460</td>
                    <td>
                      <button className="btn btn-danger btn-sm">
                        <AiFillDelete
                          className="me-2 mb-1"
                          style={{ fontSize: "20px" }}
                        />
                        Remove
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Neha Patil</td>
                    <td>patilneha0206@gmail.com</td>
                    <td>8999480460</td>
                    <td>
                      <button className="btn btn-danger btn-sm">
                        <AiFillDelete
                          className="me-2 mb-1"
                          style={{ fontSize: "20px" }}
                        />
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

export default Customers;
