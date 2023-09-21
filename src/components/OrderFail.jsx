import { RxCrossCircled } from "react-icons/rx";
import { Link } from "react-router-dom";

function OrderFail() {
  return (
    <section className="container mt-4">
      <div className="row">
        <div className="col-md-8 offset-2">
          <div className="card">
            <div className="card-body text-center">
              <p className="text-danger" style={{ fontSize: "40px" }}>
                <RxCrossCircled />
              </p>
              <h3 className="text-danger">Oops... Something wrong occured.</h3>
              <p className="mt-4">
                <Link to="/" className="btn btn-primary ">
                  Home
                </Link>
                <Link to="/dashboard" className="btn btn-secondary ms-2">
                  Dashboard
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OrderFail;
