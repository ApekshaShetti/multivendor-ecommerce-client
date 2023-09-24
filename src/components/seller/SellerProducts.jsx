import SellerSideBar from "./SellerSideBar";
import { Link } from "react-router-dom";
import { AiFillEye } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import { AiFillPlusCircle } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";

function SellerProducts() {
  return (
    <section className="container mt-4">
      <div className="row">
        <div className="col-md-3 col-12 mb-2">
          <SellerSideBar />
        </div>
        <div className="col-md-9 col-12 mb-2">
          <div className="row">
            <div className="col-12">
              <Link
                to="/add-product"
                className="btn btn-outline-success mb-4 float-end"
              >
                <AiFillPlusCircle
                  className="me-2 mb-1"
                  style={{ fontSize: "20px" }}
                />
                Add Products
              </Link>
            </div>
          </div>
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
                  <td>Django</td>
                  <td>₹ 500</td>
                  <td>Published</td>
                  <td>
                    <Link to="" className="btn btn-success">
                      <AiFillEye
                        className="me-2 mb-1"
                        style={{ fontSize: "20px" }}
                      />
                      View
                    </Link>
                  </td>
                  <td>
                    <Link to="" className="btn btn-secondary">
                      <FiEdit
                        className="me-2 mb-1"
                        style={{ fontSize: "20px" }}
                      />
                      Edit
                    </Link>
                  </td>
                  <td>
                    <Link to="" className="btn btn-danger">
                      <AiFillDelete
                        className="me-2 mb-1"
                        style={{ fontSize: "20px" }}
                      />
                      Delete
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SellerProducts;
