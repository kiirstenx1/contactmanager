import React from "react";
import PropTypes from "prop-types";

const Header = props => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
      <div className="container">
        <a href="/" className="navbar-brand">
          {props.branding}
        </a>
        <div>
          <ul className="navbar-nav mr-auto" />
          <li className="nav-item">
            <a href="/" className="nav-link">
              Home
            </a>
          </li>
        </div>
      </div>
    </nav>
  );
};

Header.defaultProps = {
  branding: "My app"
};

Header.propTypes = {
  branding: PropTypes.string.isRequired
};

export default Header;
