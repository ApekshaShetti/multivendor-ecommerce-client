import reactLogo from "../assets/react.svg";
import { BsFillCartPlusFill } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

function SingleProduct(props) {
  return (
    <div className="col-12 col-md-3 mb-4">
      <div className="card">
        <Link to="/product/python-timer/123">
          <img src={reactLogo} className="card-img-top" alt="..." />
        </Link>

        <div className="card-body">
          <h4 className="card-title ">
            <Link to="/product/python-timer/123">{props.title}</Link>
          </h4>
          <h5 className="card-title text-muted">Price : ₹ 500</h5>
        </div>
        <div className="card-footer">
          <button
            title="Add to Cart"
            className="btn btn-success btn-sm align-items-center"
          >
            <BsFillCartPlusFill />
          </button>
          <button
            title="Add to Wishlist"
            className="btn btn-danger btn-sm ms-2 align-items-center"
          >
            <AiFillHeart />
          </button>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
