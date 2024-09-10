import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import only the necessary Bootstrap CSS
import Header from '../common/head';

import Footer from '../common/footer';
import Flickity from 'react-flickity-component';
import 'flickity/dist/flickity.min.css';
import '../home.css';
// Lazy loading for Bootstrap JavaScript
import 'bootstrap/dist/js/bootstrap.esm.min.js';

const HomePage = ({ products }) => {
  const [hoveredImage, setHoveredImage] = useState({}); // State to track hovered image

  const models = {
    '6351': ['C1', 'C2', 'C8'],
    '7005': ['C1', 'C10', 'C15'],
    '7436': ['C3', 'C4', 'C5'],
    '7479': ['C1', 'C2', 'C4', 'C9'],
    '8816': ['C1', 'C4', 'C5'],
    '2170': ['C54', 'C56', 'C106'],
    '2002': ['C1', 'C5'],
    '6337': ['C1', 'C2', 'C35', 'C36'],
    // Add more models with their respective color codes
  };

  return (
    <div>
      <Header />

      {/* Preload Key Resources */}
      <link rel="preload" href="../files/sunglasses.jpeg" as="image" />

      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="videoBox">
              {/* Lazy load video with fallback image */}
              <div className="fullscreen-video-wrap">
                <link>
                <img
                loading="lazy"
                src='../files/home.jpg'
                
                alt='bannerimg'
                />
                </link>
              </div>
              <div className="overlay"></div>
              <div className="videoBoxInfo" style={{ paddingBottom: '50px', paddingTop: '420px' }}>
                <p className='text-light'>SPRING SUMMER 2024</p>
                <a href="/collections/new-arrivals" className="videoBoxInfoBtn btn btn-outline-light">
                  SHOP NOW
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="main text-dark">

        <Flickity className={'carousel product-list'} options={{ pageDots: false }}>
          {Object.keys(models).map((model) => (
            <div className="carousel-cell products-list" key={model}>
              <div className="product-item" >
                {/* Lazy load images */}
                <link>
                <img
                  loading="lazy"
                  src={hoveredImage[model] || `https://13-century.com/files/mens/${model}/${models[model][0]}.png`}
                  className="card-img-top"
                  alt={model}
                />
                </link>
                
                
                <Flickity
                  className={'carousel carousel-nav'}
                  options={{
                    asNavFor: '.carousel-main',
                    contain: true,
                    pageDots: false,
                    prevNextButtons: true,
                    draggable: true,
                  }}
                >
                  {models[model].map((color) => (
                    <div
                      className="carousel-cell productlist"
                      key={color}
                      onMouseEnter={() =>
                        setHoveredImage((prev) => ({
                          ...prev,
                          [model]: `https://13-century/files/mens/${model}/${color}.png`,
                        }))
                      }
                      onMouseLeave={() =>
                        setHoveredImage((prev) => ({
                          ...prev,
                          [model]: `https://13-century/files/mens/${model}/${models[model][0]}.png`,
                        }))
                      }
                    >
                      {/* Lazy load thumbnail images */}
                      <img loading="lazy" src={`https://13-century/files/mens/${model}/${color}.png`} alt={model} />
                    </div>
                  ))}
                </Flickity>
                
                <p className="h6 justify-self-center align-content-center">{model}</p>
              </div>
            </div>
          ))}
        </Flickity>
      </section>

      <section>
        <div className="container-fluid ms-0 me-0 p-0">
          <div className="row ms-0 flex-lg-nowrap overflow-hidden text-light collection-gd">
            {[
              { img: 'A7_02553.jpeg', text: 'Eyeglasses For Women' },
              { img: 'A7_02626.jpeg', text: 'Eyeglasses For Men' },
              { img: 'A7_02602.jpeg', text: 'Sunglasses For women' },
              { img: 'A7_02607.jpeg', text: 'Sunglasses For men' },
            ].map((item, index) => (
              <div className="col-3 p-0 position-relative bg-black" key={index}>
                {/* Lazy load banner images */}
                <img
                  className="img-fluid banner-img"
                  style={{ width: '354.38px' }}
                  src={`../files/banner_img/${item.img}`}
                  alt=""
                  loading="lazy"
                />
                <div
                  className="position-absolute"
                  style={{
                    bottom: '50px',
                    padding: '0px 50px',
                    fontWeight: 100,
                    fontSize: '1.5rem',
                    textTransform: 'uppercase',
                  }}
                >
                  <p>{item.text}</p>
                  <a className="btn btn-outline-light" style={{ width: '145px', height: '35px', fontWeight: 100 }} href=".">
                    View Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div id="carouselExampleSlidesOnly" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-touch="true">
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="1000">
              {/* Lazy load about image */}
              <img src="../files/sunglasses.jpeg" className="d-block w-100" alt="..." loading="lazy" />
              <div className="carousel-caption d-md-block">
                <h3 className="text-dark">About</h3>
                <p className="text-dark">
                  At 13 Century, we've been crafting luxury eyewear and sunglasses for both men and women for the past 7 years. Our commitment is to
                  deliver durable, high-quality products that blend timeless style with modern elegance. We take pride in creating eyewear that
                  stands the test of time, offering our customers both fashion and function.
                </p>
                <a className="btn btn-outline-dark btn-lg" href="./about.html">
                  About
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
