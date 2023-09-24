import { Link } from "react-router-dom";

function SellerSideBar() {
  return (
    <div className="list-group">
      <Link
        to="/seller-dashboard"
        className="list-group-item list-group-item-action"
        aria-current="true"
      >
        Dashboard
      </Link>
      <Link
        to="/seller-products"
        className="list-group-item list-group-item-action"
      >
        Products
      </Link>
      <Link
        to="/seller-orders"
        className="list-group-item list-group-item-action"
      >
        Orders
      </Link>
      <Link
        to="/seller-customers"
        className="list-group-item list-group-item-action"
      >
        Customers
      </Link>
      <Link
        to="/seller-reports"
        className="list-group-item list-group-item-action"
      >
        Reports
      </Link>

      <Link
        to="/seller-login"
        className="list-group-item list-group-item-action text-danger"
      >
        Logout
      </Link>
    </div>
  );
}

export default SellerSideBar;
