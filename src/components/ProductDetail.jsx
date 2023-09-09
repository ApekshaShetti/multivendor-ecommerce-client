import reactLogo from "../assets/react.svg";
import { BsFillCartPlusFill } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import { BiSolidPurchaseTagAlt } from "react-icons/bi";
import { BsFillCursorFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function ProductDetail() {
  return (
    <section className="container mt-4">
      <div className="row">
        <div className="col-4">
          <img src={reactLogo} className="card-img-top" alt="..." />
        </div>
        <div className="col-8">
          <h3>Product title</h3>
          <p>
            Product description : The standard chunk of Lorem Ipsum used since
            the 1500s is reproduced below for those interested. Sections 1.10.32
            and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also
            reproduced in their exact original form, accompanied by English
            versions from the 1914 translation by H. Rackham
          </p>
          <h5 className="card-title">Price : ₹ 500</h5>
          <p className="mt-3">
            <button title="Add to Cart" className="btn btn-primary">
              <div className="d-flex align-items-center">
                <BsFillCartPlusFill />
                <span className="ms-2">Add to Cart</span>
              </div>
            </button>

            <button title="Buy Now" className="btn btn-success ms-2">
              <div className="d-flex align-items-center">
                <BiSolidPurchaseTagAlt />
                <span className="ms-2">Buy Now</span>
              </div>
            </button>

            <button title="Add to Wishlist" className="btn btn-danger ms-2">
              <div className="d-flex align-items-center">
                <AiFillHeart />
                <span className="ms-2">Wishlist</span>
              </div>
            </button>

            <Link title="Demo" target="_blank" className="btn btn-dark ms-2">
              <div className="d-flex align-items-center">
                <BsFillCursorFill />
                <span className="ms-2">Demo</span>
              </div>
            </Link>
          </p>
          <hr />

          {/* Tags  */}
          <div className="product-tags mt-4">
            <h5>Tags</h5>
            <p className="mt-2">
              <Link
                to="#"
                className="badge bg-secondary text-white me-2"
                style={{ lineHeight: "2" }}
              >
                python
              </Link>

              <Link
                to="#"
                className="badge bg-secondary text-white me-2"
                style={{ lineHeight: "2" }}
              >
                django
              </Link>

              <Link
                to="#"
                className="badge bg-secondary text-white me-2"
                style={{ lineHeight: "2" }}
              >
                flask
              </Link>
              <Link
                to="#"
                className="badge bg-secondary text-white me-2"
                style={{ lineHeight: "2" }}
              >
                python
              </Link>

              <Link
                to="#"
                className="badge bg-secondary text-white me-2"
                style={{ lineHeight: "2" }}
              >
                django
              </Link>

              <Link
                to="#"
                className="badge bg-secondary text-white me-2"
                style={{ lineHeight: "2" }}
              >
                flask
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetail;
