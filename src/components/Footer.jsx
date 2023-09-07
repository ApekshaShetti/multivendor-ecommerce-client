import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

function Footer() {
  return (
    <footer className="d-flex flex-wrap justify-content-between container align-items-center my-5 border-top">
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
  );
}

export default Footer;
