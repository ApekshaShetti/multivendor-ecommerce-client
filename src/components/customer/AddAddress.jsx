import SideBar from "./Sidebar";

function AddAddress() {
  return (
    <section className="container mt-4">
      <div className="row">
        <div className="col-md-3 col-12 mb-2">
          <SideBar />
        </div>
        <div className="col-md-9 col-12 ">
          <div className="card">
            <h4 className="card-header">Add Address</h4>
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <textarea id="address" className="form-control"></textarea>
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

export default AddAddress;
