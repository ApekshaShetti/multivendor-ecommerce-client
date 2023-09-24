import SellerSideBar from "./SellerSideBar";

function AddProduct() {
  return (
    <section className="container mt-4">
      <div className="row">
        <div className="col-md-3 col-12 mb-2">
          <SellerSideBar />
        </div>
        <div className="col-md-9 col-12 ">
          <div className="card">
            <h4 className="card-header">Add Product</h4>
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label for="pname" className="form-label">
                    Product Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="pname"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="mb-3">
                  <label for="category" className="form-label">
                    Category
                  </label>
                  <select id="category" className="form-control">
                    <option>Python</option>
                    <option>PHP</option>
                    <option>JavaScript</option>
                    <option>Ruby</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label for="price" className="form-label">
                    Price
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="price"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="mb-3">
                  <label for="description" className="form-label">
                    Description
                  </label>
                  <textarea
                    type="text"
                    className="form-control"
                    id="description"
                    aria-describedby="emailHelp"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="productImage" className="form-label">
                    Product Images
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    id="productImage"
                    aria-describedby="fileHelp"
                  />
                  <div id="fileHelp" className="form-text">
                    Upload product images.
                  </div>
                </div>

                <button type="submit" className="btn btn-primary">
                  Add
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AddProduct;
