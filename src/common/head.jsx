// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.esm.min.js';

const Header = () => {
  return (
    <section className="head">
      <nav className="navbar navbar-expand-lg navbar-light" aria-label="Offcanvas navbar large">
        <div className="container">
          <div className="d-flex justify-content-center align-items-center py-3">
            <div className="text-center justify-content-center">
              <Link to="/">
                <img src="/logo.png" alt="Logo" width="280" />
              </Link>
            </div>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2" aria-controls="offcanvasNavbar2" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="offcanvas offcanvas-end text-bg-light d-flex" tabIndex="-1" id="offcanvasNavbar2" aria-labelledby="offcanvasNavbar2Label">
            <div className="offcanvas-header">
              <div className="text-center justify-content-start">
                <Link to="/">
                  <img src="/logo.png" alt="Logo" width="280" />
                </Link>
              </div>
              <button type="button" className="btn-close btn-close-black" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="." id="sunglassesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Sunglasses
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="sunglassesDropdown">
                    <li><Link className="dropdown-item" to="/Sunglasses/mens">For Men</Link></li>
                    <li><Link className="dropdown-item" to="/Sunglasses/womens">For Women</Link></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="." id="eyeglassesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Eyeglasses
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="eyeglassesDropdown">
                    <li><Link className="dropdown-item" to="/eyewear/men">For Men</Link></li>
                    <li><Link className="dropdown-item" to="/eyewear/womens">For Women</Link></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className="nav-link disabled" to="/pages/Newarrivals">New Arrivals</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " to="/pages/Bestseller">Best Seller</Link>
                </li>
                {/* <li className="nav-item">
                  <Link className="nav-link " to="/pages/contact">Contact us</Link>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Header;
