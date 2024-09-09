import React from 'react';
 // Custom styles for the header
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div className="container">
        <footer className="py-5">
          <div className="row">
            <div className="col-6 col-md-2 mb-3">
              <h5>Site Maps</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <Link to={'/'} style={{ textDecoration: 'none', color: 'grey' }}>Home</Link>
                </li>
                <li className="nav-item mb-2">
                <Link to={'/Sunglasses/mens'} style={{ textDecoration: 'none', color: 'grey' }}>Sunglasses Men</Link>
                </li>
                <li className="nav-item mb-2">
                <Link to={'/Sunglasses/womens'} style={{ textDecoration: 'none', color: 'grey' }}>Sunglasses Women</Link>
                </li>
                <li className="nav-item mb-2">
                <Link to={'/eyewear/men'} style={{ textDecoration: 'none', color: 'grey' }}>Frames Men</Link>
                </li>
                <li className="nav-item mb-2 ">
                <Link to={'/eyewear/womens'} style={{ textDecoration: 'none', color: 'grey' }}>Frames Women</Link>
                </li>
                <li className="nav-item mb-2">
                <Link to={'about us'} style={{ textDecoration: 'none', color: 'grey' }}>About us</Link>
                </li>
                <li className="nav-item mb-2">
                <Link to={'contact us'} style={{ textDecoration: 'none', color: 'grey' }}>Contact us</Link>
                </li>
              </ul>
            </div>

            <div className="col-6 col-md-2 mb-3">
              <h5>Social Media</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="https://www.instagram.com/13century_eyewear/" className="nav-link p-0 text-body-secondary">
                    Instagram
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="https://www.facebook.com/13centuryeywear" className="nav-link p-0 text-body-secondary">
                    Facebook
                  </a>
                </li>
              </ul>
            </div>

            

            <div className="col-md-5 offset-md-1 mb-3">
              <form>
                <h5>Subscribe to our newsletter</h5>
                <p>Monthly digest of what's new and exciting from us.</p>
                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                  <label htmlFor="newsletter1" className="visually-hidden">
                    Email address
                  </label>
                  <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
                  <button className="btn btn-primary" type="button">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
            <p>&copy; 13 Century All rights reserved 2024.</p>
            <ul className="list-unstyled d-flex">
              <li className="ms-3">
                <a className="link-body-emphasis" href=".">
                  <svg className="bi" width="24" height="24">
                    <use xlinkHref="#twitter"></use>
                  </svg>
                </a>
              </li>
              <li className="ms-3">
                <a className="link-body-emphasis" href=".">
                  <svg className="bi" width="24" height="24">
                    <use xlinkHref="#instagram"></use>
                  </svg>
                </a>
              </li>
              <li className="ms-3">
                <a className="link-body-emphasis" href=".">
                  <svg className="bi" width="24" height="24">
                    <use xlinkHref="#facebook"></use>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    );
};

export default Footer