import React from "react";
import logo from "../git logo2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import dislike from "../dislike.png";
import like from "../like1.png";

const Header = () => {
  return (
    <div className="header-wraper bg-dark">
      <div className="side-nav side-border">
        <a className="side-link side-margin" href="#">
          <small class="des">All products</small>
        </a>
        <h6 side-margin>Developers</h6>
        <a
          className="side-link dropdown-toggle side-margin"
          href="#"
          id="navbarDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Overview
        </a>

        <a
          className="side-link dropdown-toggle side-margin"
          href="#"
          id="navbarDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Webhooks and events
        </a>
        <a
          className="side-link dropdown-toggle side-margin"
          href="#"
          id="navbarDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Apps
        </a>
        <a
          className="side-link dropdown-toggle side-margin"
          href="#"
          id="navbarDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          GitHub
        </a>
      </div>
      <div className="main-info">
        <div className="developer">
          <h4>Developers</h4>
          <h3>
            Go deeper with GitHub by integrating with our APIs, customizing your
            GitHub workflow, and building and sharing apps with the community.
          </h3>
        </div>
        <br></br>
        <div className="overview">
          <h5>Overview</h5>
          <h6>
            Learn about GitHub's APIs, secure your deployments, and join
            GitHub's Developer Program.
          </h6>
        </div>
        <br></br>
        <div className="webhook">
          <h5>Webhooks and events</h5>
          <h6>
            You can set up, test, and secure webhooks so your integrations can
            subscribe and react to events on GitHub.
          </h6>
        </div>
        <br></br>
        <div className="app">
          <h5>Apps</h5>
          <h6>
            You can automate and streamline your workflow by building your own
            apps.
          </h6>
        </div>
        <br></br>
        <div className="github">
          <h5>GitHub Marketplace</h5>
          <h6>
            List your tools in GitHub Marketplace for developers to use or
            purchase.
          </h6>
        </div>
        <br></br>
        <div className="gap">
          <h4> </h4>
          <h5> </h5>
        </div>
        <br></br>
        <div className="pre-footer">
          <div className="help">
            <h5>Did this doc help you?</h5>
            <div className="review">
              <img className="like" src={like} alt="logo..." />
              <img className="dislike" src={dislike} alt="logo..." />
            </div>
            <a className="privecy" href="#">
              Privacy policy
            </a>
          </div>
          <div className="great">
            <h5>Help us make these docs great!</h5>

            <p>
              All GitHub docs are open source. See something that's wrong or
              unclear? Submit a pull request.
            </p>
          </div>
          <div className="need">
            <h5>Still need help?</h5>

            <div className="support">
              <a className="community" href="#">
                Ask the GitHub community
              </a>
              <a className="community" href="#">
                Contact support
              </a>
            </div>
          </div>
        </div>
        <div className="footer">
          <p>© 2022 Priyobrota Nath</p>
          <a className="community" href="#">
            Terms
          </a>
          <a className="community" href="#">
            Privacy
          </a>
          <a className="community" href="#">
            Security
          </a>
          <a className="community" href="#">
            Status
          </a>
          <a className="community" href="#">
            Help
          </a>
          <img className="logo" src={logo} alt="logo..." />
          <a className="community" href="#">
            Contact Github
          </a>
          <a className="community" href="#">
            Pricing
          </a>
          <a className="community" href="#">
            Developer API
          </a>
          <a className="community" href="#">
            Training
          </a>
          <a className="community" href="#">
            Blog
          </a>
          <a className="community" href="#">
            About
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
