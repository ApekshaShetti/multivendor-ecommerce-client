import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsFillCartPlusFill } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import Header from "./components/Header";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

function App() {
  return (
    <>
      <Header />
      <main className="mt-4">
        <div className="container">
          {/* Latest Projects  */}
          <h3 className="mb-4">
            Latest Products
            <a href="#" className="float-end btn btn-dark">
              View all Products <AiOutlineArrowRight />
            </a>
          </h3>
          <div className="row mb-4">
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
                    <AiFillHeart />
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
          {/* End Latest Products  */}
          {/* Popular Categories  */}
          <h3 className="mb-4">
            Popular Categories
            <a href="#" className="float-end btn btn-dark">
              View all Categories <AiOutlineArrowRight />
            </a>
          </h3>
          <div className="row mb-4">
            {/* Category Box  */}
            <div className="col-12 col-md-3 mb-4">
              <div className="card">
                <img src={reactLogo} className="card-img-top" alt="..." />

                <div className="card-body">
                  <h4 className="card-title ">Category title</h4>
                </div>
                <div className="card-footer">Product Downloads : 2345</div>
              </div>
            </div>
            {/* Category Box end  */}
            {/* Category Box  */}
            <div className="col-12 col-md-3 mb-4">
              <div className="card">
                <img src={reactLogo} className="card-img-top" alt="..." />

                <div className="card-body">
                  <h4 className="card-title ">Category title</h4>
                </div>
                <div className="card-footer">Product Downloads : 2345</div>
              </div>
            </div>
            {/* Category Box end  */}
            {/* Category Box  */}
            <div className="col-12 col-md-3 mb-4">
              <div className="card">
                <img src={reactLogo} className="card-img-top" alt="..." />

                <div className="card-body">
                  <h4 className="card-title ">Category title</h4>
                </div>
                <div className="card-footer">Product Downloads : 2345</div>
              </div>
            </div>
            {/* Category Box end  */}
            {/* Category Box  */}
            <div className="col-12 col-md-3 mb-4">
              <div className="card">
                <img src={reactLogo} className="card-img-top" alt="..." />

                <div className="card-body">
                  <h4 className="card-title ">Category title</h4>
                </div>
                <div className="card-footer">Product Downloads : 2345</div>
              </div>
            </div>
            {/* Category Box end  */}
          </div>
          {/* End Popular categories  */}
          {/* Popular Products */}
          <h3 className="mb-4">
            Popular Products
            <a href="#" className="float-end btn btn-dark">
              View all Products <AiOutlineArrowRight />
            </a>
          </h3>
          <div className="row mb-4">
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
          </div>
          {/* End Popular Products  */}
          {/* Popular Sellers  */}
          <h3 className="mb-4">
            Popular Sellers
            <a href="#" className="float-end btn btn-dark">
              View all Sellers <AiOutlineArrowRight />
            </a>
          </h3>
          <div className="row mb-4">
            {/* Seller Box  */}
            <div className="col-12 col-md-3 mb-4">
              <div className="card">
                <img src={reactLogo} className="card-img-top" alt="..." />

                <div className="card-body">
                  <h4 className="card-title ">Seller Name</h4>
                </div>
                <div className="card-footer">
                  Categories : <a href="#">Python</a> , <a href="#">PHP</a>
                </div>
              </div>
            </div>
            {/* Seller Box end  */}
            {/* Seller Box  */}
            <div className="col-12 col-md-3 mb-4">
              <div className="card">
                <img src={reactLogo} className="card-img-top" alt="..." />

                <div className="card-body">
                  <h4 className="card-title ">Seller Name</h4>
                </div>
                <div className="card-footer">
                  Categories : <a href="#">JavaScript</a> ,{" "}
                  <a href="#">VueJS</a>
                </div>
              </div>
            </div>
            {/* Seller Box end  */}
            {/* Seller Box  */}
            <div className="col-12 col-md-3 mb-4">
              <div className="card">
                <img src={reactLogo} className="card-img-top" alt="..." />

                <div className="card-body">
                  <h4 className="card-title ">Seller Name</h4>
                </div>
                <div className="card-footer">
                  Categories : <a href="#">ReactJS</a> ,{" "}
                  <a href="#">AngularJS</a>
                </div>
              </div>
            </div>
            {/* Seller Box end  */}
            {/* Seller Box  */}
            <div className="col-12 col-md-3 mb-4">
              <div className="card">
                <img src={reactLogo} className="card-img-top" alt="..." />

                <div className="card-body">
                  <h4 className="card-title ">Seller Name</h4>
                </div>
                <div className="card-footer">
                  Categories : <a href="#">WordPress</a> ,{" "}
                  <a href="#">Shopify</a>
                </div>
              </div>
            </div>
            {/* Seller Box end  */}
          </div>
          {/* End Popular Sellers */}

          {/* Rating and Reviews  */}

          <div
            id="carouselExampleIndicators"
            className="carousel slide my-4 border bg-dark text-white p-5"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                {/* Figure 1 */}
                <figure className="text-center">
                  <blockquote className="blockquote">
                    <p>
                      A well-known quote, contained in a blockquote element.
                    </p>
                  </blockquote>
                  <figcaption className="blockquote-footer">
                    <AiFillStar className="text-warning" />
                    <AiFillStar className="text-warning" />
                    <AiFillStar className="text-warning" />
                    <cite title="Source Title">Customer Name</cite>
                  </figcaption>
                </figure>
              </div>
              <div className="carousel-item">
                {/* figure 2  */}
                <figure className="text-center">
                  <blockquote className="blockquote">
                    <p>
                      A well-known quote, contained in a blockquote element.
                    </p>
                  </blockquote>
                  <figcaption className="blockquote-footer">
                    <AiFillStar className="text-warning" />
                    <AiFillStar className="text-warning" />
                    <AiFillStar className="text-warning" />
                    <cite title="Source Title">Customer Name</cite>
                  </figcaption>
                </figure>
              </div>
              <div className="carousel-item">
                {/* figure 3  */}
                <figure className="text-center">
                  <blockquote className="blockquote">
                    <p>
                      A well-known quote, contained in a blockquote element.
                    </p>
                  </blockquote>
                  <figcaption className="blockquote-footer">
                    <AiFillStar className="text-warning" />
                    <AiFillStar className="text-warning" />
                    <AiFillStar className="text-warning" />
                    <AiFillStar className="text-warning" />
                    <AiFillStar className="text-warning" />
                    <cite title="Source Title">Customer Name</cite>
                  </figcaption>
                </figure>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          {/* End Rating and Reviews */}

          {/* Footer Start  */}
          <footer className="d-flex flex-wrap justify-content-between align-items-center my-5 border-top">
            <p className="col-md-4 mb-0 text-body-secondary">
              PythonScripts &copy; 2023 Company, Inc
            </p>

            <a
              href="/"
              className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
            ></a>

            <ul className="nav col-md-4 justify-content-end pt-3">
              <li className="nav-item">
                <a href="#" className="nav-link px-2 text-body-secondary">
                  <BsFacebook className="fa-2x" />
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link px-2 text-body-secondary">
                  <AiOutlineInstagram className="fa-2x" />
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link px-2 text-body-secondary">
                  <AiOutlineTwitter className="fa-2x" />
                </a>
              </li>
            </ul>
          </footer>
          {/* Footer End */}
        </div>
      </main>
    </>
  );
}

export default App;
