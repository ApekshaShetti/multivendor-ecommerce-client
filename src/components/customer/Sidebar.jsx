import { Link } from "react-router-dom";

function SideBar() {
  return (
    <div className="list-group">
      <Link
        to="/dashboard"
        className="list-group-item list-group-item-action"
        aria-current="true"
      >
        Dashboard
      </Link>
      <Link to="/orders" className="list-group-item list-group-item-action">
        Orders
      </Link>
      <Link to="/wishlist" className="list-group-item list-group-item-action">
        Wishlist
      </Link>
      <Link to="/address" className="list-group-item list-group-item-action">
        Address
      </Link>
      <Link
        to="/update-profile"
        className="list-group-item list-group-item-action"
      >
        Profile
      </Link>
      <Link
        to="/change-password"
        className="list-group-item list-group-item-action"
      >
        Change Password
      </Link>
      <Link
        to="/login"
        className="list-group-item list-group-item-action text-danger"
      >
        Logout
      </Link>
    </div>
  );
}

export default SideBar;
