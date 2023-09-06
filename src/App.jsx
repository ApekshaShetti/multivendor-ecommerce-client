import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsFillCartPlusFill } from "react-icons/bs";

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a className="navbar-brand" href="#">
              Python Market Place
            </a>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Categories
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Latest Projects  */}
      <main className="mt-4">
        <div className="container">
          <h3 className="mb-4">
            Latest Products{" "}
            <a href="#" className="float-end btn btn-dark">
              View all Products <AiOutlineArrowRight />
            </a>
          </h3>
          <div className="row">
            {/* Product Box  */}
            <div className="col-12 col-md-3 mb-4">
              <div className="card">
                <img src={reactLogo} className="card-img-top" alt="..." />

                <div className="card-body">
                  <h4 className="card-title ">Product title</h4>
                  <h5 className="card-title text-muted">Price : ₹ 500</h5>
                </div>
                <div className="card-footer">
                  <button
                    title="Add to Cart"
                    className="btn btn-success btn-sm"
                  >
                    <BsFillCartPlusFill />
                  </button>
                  <button
                    title="Add to Wishlist"
                    className="btn btn-danger btn-sm ms-2"
                  >
                    <i className="fa-solid fa-heart"></i>
                  </button>
                </div>
              </div>
            </div>
            {/* Product Box end  */}
            {/* Product Box  */}
            <div className="col-12 col-md-3 mb-4">
              <div className="card">
                <img src={reactLogo} className="card-img-top" alt="..." />

                <div className="card-body">
                  <h4 className="card-title ">Product title</h4>
                  <h5 className="card-title text-muted">Price : ₹ 500</h5>
                </div>
                <div className="card-footer">
                  <button
                    title="Add to Cart"
                    className="btn btn-success btn-sm"
                  >
                    <i className="fa-solid fa-cart-plus"></i>
                  </button>
                  <button
                    title="Add to Wishlist"
                    className="btn btn-danger btn-sm ms-2"
                  >
                    <i className="fa-solid fa-heart"></i>
                  </button>
                </div>
              </div>
            </div>
            {/* Product Box end  */}
            {/* Product Box  */}
            <div className="col-12 col-md-3 mb-4">
              <div className="card">
                <img src={reactLogo} className="card-img-top" alt="..." />

                <div className="card-body">
                  <h4 className="card-title ">Product title</h4>
                  <h5 className="card-title text-muted">Price : ₹ 500</h5>
                </div>
                <div className="card-footer">
                  <button
                    title="Add to Cart"
                    className="btn btn-success btn-sm"
                  >
                    <i className="fa-solid fa-cart-plus"></i>
                  </button>
                  <button
                    title="Add to Wishlist"
                    className="btn btn-danger btn-sm ms-2"
                  >
                    <i className="fa-solid fa-heart"></i>
                  </button>
                </div>
              </div>
            </div>
            {/* Product Box end  */}
            {/* Product Box  */}
            <div className="col-12 col-md-3 mb-4">
              <div className="card">
                <img src={reactLogo} className="card-img-top" alt="..." />

                <div className="card-body">
                  <h4 className="card-title ">Product title</h4>
                  <h5 className="card-title text-muted">Price : ₹ 500</h5>
                </div>
                <div className="card-footer">
                  <button
                    title="Add to Cart"
                    className="btn btn-success btn-sm"
                  >
                    <i className="fa-solid fa-cart-plus"></i>
                  </button>
                  <button
                    title="Add to Wishlist"
                    className="btn btn-danger btn-sm ms-2"
                  >
                    <i className="fa-solid fa-heart"></i>
                  </button>
                </div>
              </div>
            </div>
            {/* Product Box end  */}
            {/* Product Box  */}
            <div className="col-12 col-md-3 mb-2">
              <div className="card">
                <img src={reactLogo} className="card-img-top" alt="..." />

                <div className="card-body">
                  <h4 className="card-title ">Product title</h4>
                  <h5 className="card-title text-muted">Price : ₹ 500</h5>
                </div>
                <div className="card-footer">
                  <button
                    title="Add to Cart"
                    className="btn btn-success btn-sm"
                  >
                    <i className="fa-solid fa-cart-plus"></i>
                  </button>
                  <button
                    title="Add to Wishlist"
                    className="btn btn-danger btn-sm ms-2"
                  >
                    <i className="fa-solid fa-heart"></i>
                  </button>
                </div>
              </div>
            </div>
            {/* Product Box end  */}
            {/* Product Box  */}
            <div className="col-12 col-md-3 mb-2">
              <div className="card">
                <img src={reactLogo} className="card-img-top" alt="..." />

                <div className="card-body">
                  <h4 className="card-title ">Product title</h4>
                  <h5 className="card-title text-muted">Price : ₹ 500</h5>
                </div>
                <div className="card-footer">
                  <button
                    title="Add to Cart"
                    className="btn btn-success btn-sm"
                  >
                    <i className="fa-solid fa-cart-plus"></i>
                  </button>
                  <button
                    title="Add to Wishlist"
                    className="btn btn-danger btn-sm ms-2"
                  >
                    <i className="fa-solid fa-heart"></i>
                  </button>
                </div>
              </div>
            </div>
            {/* Product Box end  */}
            {/* Product Box  */}
            <div className="col-12 col-md-3 mb-2">
              <div className="card">
                <img src={reactLogo} className="card-img-top" alt="..." />

                <div className="card-body">
                  <h4 className="card-title ">Product title</h4>
                  <h5 className="card-title text-muted">Price : ₹ 500</h5>
                </div>
                <div className="card-footer">
                  <button
                    title="Add to Cart"
                    className="btn btn-success btn-sm"
                  >
                    <i className="fa-solid fa-cart-plus"></i>
                  </button>
                  <button
                    title="Add to Wishlist"
                    className="btn btn-danger btn-sm ms-2"
                  >
                    <i className="fa-solid fa-heart"></i>
                  </button>
                </div>
              </div>
            </div>
            {/* Product Box end  */}
            {/* Product Box  */}
            <div className="col-12 col-md-3 mb-2">
              <div className="card">
                <img src={reactLogo} className="card-img-top" alt="..." />

                <div className="card-body">
                  <h4 className="card-title ">Product title</h4>
                  <h5 className="card-title text-muted">Price : ₹ 500</h5>
                </div>
                <div className="card-footer">
                  <button
                    title="Add to Cart"
                    className="btn btn-success btn-sm"
                  >
                    <i className="fa-solid fa-cart-plus"></i>
                  </button>
                  <button
                    title="Add to Wishlist"
                    className="btn btn-danger btn-sm ms-2"
                  >
                    <i className="fa-solid fa-heart"></i>
                  </button>
                </div>
              </div>
            </div>
            {/* Product Box end  */}
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
