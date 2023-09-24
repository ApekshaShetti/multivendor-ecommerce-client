import SideBar from "./Sidebar";
import { BsCheckCircleFill } from "react-icons/bs";
import { AiFillPlusCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

function AddressList() {
  return (
    <section className="container mt-4">
      <div className="row">
        <div className="col-md-3 col-12 mb-2">
          <SideBar />
        </div>
        <div className="col-md-9 col-12 mb-2">
          <div className="row">
            <div className="col-12">
              <Link to="/add-address" className="btn btn-outline-success mb-4 float-end">
                <AiFillPlusCircle
                  className="me-2 mb-1"
                  style={{ fontSize: "20px" }}
                />
                Add Address
              </Link>
            </div>
          </div>

          <div className="row">
            <div className="col-4 mb-4">
              <div className="card">
                <div className="card-body text-muted">
                  <h6>
                    Datta Meghe College of Engineering, Airoli, Mumbai
                    Maharashtra, 415530
                  </h6>
                  <BsCheckCircleFill
                    className="text-success me-2 mt-1"
                    style={{ fontSize: "20px" }}
                  />
                </div>
              </div>
            </div>
            <div className="col-4 mb-4">
              <div className="card">
                <div className="card-body text-muted">
                  <h6>
                    Datta Meghe College of Engineering, Airoli, Mumbai
                    Maharashtra, 415530
                  </h6>
                  <span className="badge bg-secondary">Mark Default</span>
                </div>
              </div>
            </div>
            <div className="col-4 mb-4">
              <div className="card">
                <div className="card-body text-muted">
                  <h6>
                    Datta Meghe College of Engineering, Airoli, Mumbai
                    Maharashtra, 415530
                  </h6>
                  <span className="badge bg-secondary">Mark Default</span>
                </div>
              </div>
            </div>
            <div className="col-4 mb-4">
              <div className="card">
                <div className="card-body text-muted">
                  <h6>
                    Datta Meghe College of Engineering, Airoli, Mumbai
                    Maharashtra, 415530
                  </h6>
                  <span className="badge bg-secondary">Mark Default</span>
                </div>
              </div>
            </div>
            <div className="col-4 mb-4">
              <div className="card">
                <div className="card-body text-muted">
                  <h6>
                    Datta Meghe College of Engineering, Airoli, Mumbai
                    Maharashtra, 415530
                  </h6>
                  <span className="badge bg-secondary">Mark Default</span>
                </div>
              </div>
            </div>
            <div className="col-4 mb-4">
              <div className="card">
                <div className="card-body text-muted">
                  <h6>
                    Datta Meghe College of Engineering, Airoli, Mumbai
                    Maharashtra, 415530
                  </h6>
                  <span className="badge bg-secondary">Mark Default</span>
                </div>
              </div>
            </div>
            <div className="col-4 mb-4">
              <div className="card">
                <div className="card-body text-muted">
                  <h6>
                    Datta Meghe College of Engineering, Airoli, Mumbai
                    Maharashtra, 415530
                  </h6>
                  <span className="badge bg-secondary">Mark Default</span>
                </div>
              </div>
            </div>
            <div className="col-4 mb-4">
              <div className="card">
                <div className="card-body text-muted">
                  <h6>
                    Datta Meghe College of Engineering, Airoli, Mumbai
                    Maharashtra, 415530
                  </h6>
                  <span className="badge bg-secondary">Mark Default</span>
                </div>
              </div>
            </div>
            <div className="col-4 mb-4">
              <div className="card">
                <div className="card-body text-muted">
                  <h6>
                    Datta Meghe College of Engineering, Airoli, Mumbai
                    Maharashtra, 415530
                  </h6>
                  <span className="badge bg-secondary">Mark Default</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AddressList;
