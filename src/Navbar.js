import React from "react";

const Navbar = () => {
  return (
    <nav className="uk-navbar-container uk-margin" uk-navbar="true">
      <div className="uk-navbar-left">
        <a className="uk-navbar-item uk-logo" href="#">
          BoldyGo.to
        </a>

        <ul className="uk-navbar-nav">
          <li>
            <a href="#">
              <span className="uk-icon uk-margin-small-right"></span>
              Photos
            </a>
          </li>
          <li>
            <a href="#">
              <span className="uk-icon uk-margin-small-right"></span>
              About Me
            </a>
          </li>
        </ul>

        <div className="uk-navbar-item">
          <form action="javascript:void(0)">
            <button className="uk-button uk-button-default">Button</button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
