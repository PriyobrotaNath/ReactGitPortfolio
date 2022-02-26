import React from "react";
import logo from "../git logo2.png";
//react fontawesome Import  <FontAwesomeIcon icon={["feb","github"]}/>
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { fab, github } from "@fortawesome/fontawesome-svg-core";

const Navbar = () => {
  return (
    <div className="main">
      <div className="sidebar">
        <img className="logo" src={logo} alt="logo..." />
        <h4>GitHub Docs</h4>
      </div>
      <div className="nav-body">
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
          <div className="container">
            <a className="navbar-brand navbar-expand-lg" href="#"></a>
            <FontAwesomeIcon
              icon={["fab", "github"]}
              style={{ color: "rgb(187, 184, 184)" }}
            />

            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <FontAwesomeIcon
                icon={faBars}
                style={{ color: "rgb(187, 184, 184)" }}
              />
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#">
                    <small>Developers</small>
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Free,Pro & Team
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    English
                  </a>
                </li>
              </ul>
              <form className="form-inline my-2 my-lg-0">
                <div className="button">
                  <button
                    className="btn bg-dark btn-outline-success my-2 my-sm-0 "
                    type="submit"
                  >
                    Sign Up <br></br>
                  </button>
                </div>
                <div className="searchInput ">
                  <input
                    className="form-control mr-sm-2 bg-dark"
                    type="search"
                    placeholder="Search,topics,products..."
                    aria-label="Search"
                  />
                </div>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
