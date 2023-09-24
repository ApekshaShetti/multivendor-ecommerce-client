// import reactLogo from "../assets/react.svg";
// import { Link } from "react-router-dom";
import SideBar from "./Sidebar";

function ChangePassword() {
  return (
    <section className="container mt-4">
      <div className="row">
        <div className="col-md-3 col-12 mb-2">
          <SideBar />
        </div>
        <div className="col-md-9 col-12 ">
          <div className="card">
            <h4 className="card-header">Change Password</h4>
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label for="npass" className="form-label">
                    New Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="npass"
                    aria-describedby="emailHelp"
                  />
                </div>

                <div className="mb-3">
                  <label for="cpass" className="form-label">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="cpass"
                    aria-describedby="emailHelp"
                  />
                </div>

                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChangePassword;
