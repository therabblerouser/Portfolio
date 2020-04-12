import React, { Component } from 'react';
import $ from 'jquery';

if (typeof window !== 'undefined') {
  window.$ = $;
  window.jQuery = $;
  require('materialize-css');
}

class Navbar extends Component {
  componentDidMount = () => {
    $(document).ready(function() {
      $('.sidenav').sidenav();
    });
  };
  render() {
    return (
      <div>
        <div className="navbar-fixed">
          <nav>
            <div className="container">
              <div className="nav-wrapper">
                <a href="#" className="brand-logo">
                  Joe McCann
                </a>
                <a
                  href="#"
                  data-target="mobile"
                  className="right sidenav-trigger"
                >
                  <i className="material-icons">menu</i>
                </a>
                <ul className="right hide-on-lg-and-down">
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Projects</a>
                  </li>
                </ul>
              </div>

              <ul className="sidenav" id="mobile">
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Projects</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <style jsx>{`
          .container {
            width: 80%;
          }

          .navbar-fixed {
            z-index: 999;
          }

          nav {
            background: #fff;
            box-shadow: none;
          }

          .brand-logo {
            color: #191607;
          }

          ul li a {
            color: #191607;
            font-size: 1.25rem;
          }

          @media only screen and (max-width: 992px) {
            nav .brand-logo {
              left: 0%;
              -webkit-transform: translateX(-0%);
              transform: translateX(-0%);
            }
          }

          @media (max-width: 576px) {
            nav {
              background: #191607;
            }

            nav .brand-logo {
              -webkit-transform: translateX(50%);
              transform: translateX(50%);
            }

            .brand-logo {
              color: #fff;
            }
          }
        `}</style>
      </div>
    );
  }
}

export default Navbar;
