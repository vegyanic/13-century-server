import React, { useState, useEffect } from 'react';
import Flickity from 'react-flickity-component';
import 'flickity/css/flickity.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import '../mens.collection.css';
import { Link } from 'react-router-dom';
import Header from '../common/head';
import Footer from '../common/footer';

const Menseye = () => {
  const [products, setProducts] = useState([]);
  const [hoveredImage, setHoveredImage] = useState({});

  useEffect(() => {
    const category = 'Sunglasses';
    const gender = 'Male';

    const fetchProducts = async () => {
      try {
        const response = await fetch(`https://13-century.com/products?category=${category}&gender=${gender}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();

        // Group products by model
        const groupedProducts = data.reduce((acc, item) => {
          if (!acc[item.model_number]) {
            acc[item.model_number] = { model_number: item.model_number, variants: [] };
          }
          if (item.color) { // Make sure to use the correct property name here
            acc[item.model_number].variants.push({ color: item.color });
          }
          return acc;
        }, {});

        setProducts(Object.values(groupedProducts));
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <Header />
      <div className="mens-benner" style={{ backgroundImage: 'url(../files/banner_img/A7_02619.jpeg)' }}>
        <div className="videoBoxInfo text-light" style={{ paddingBottom: '50px' }}>
          <h3>Mens</h3>
        </div>
      </div>

      <section className="collection">
        <div className="d-flex justify-content-between align-items-center border-bottom">
          <div className="btn-group" role="group" aria-label="Filter and Sort">
            <button className="btn btn-light bt-chek" data-action="open-drawer" data-drawer-id="collection-filter-drawer" aria-label="Show filters">
              <i className="bi bi-funnel-fill"></i> Filter
            </button>
            <button className="btn btn-light bt-chek dropdown-toggle" aria-label="Show sort by" aria-haspopup="true" aria-expanded="false" aria-controls="collection-sort-popover">
              <i className="bi bi-sort-alpha-down"></i> Sort
            </button>
          </div>
          <div className="btn-group d-none d-lg-block bt-chek" role="group" aria-label="Layout switcher desktop">
            <button className="btn btn-light" id="desk1" aria-label="Show two products per row">
              <i className="bi bi-grid-3x3-gap-fill"></i>
            </button>
            <button className="btn btn-light bt-chek" id="desk2" aria-label="Show four products per row">
              <i className="bi bi-grid-fill"></i>
            </button>
          </div>
          <div className="btn-group d-lg-none" role="group" aria-label="Layout switcher mobile">
            <button className="btn btn-light bt-chek" id="desk4" aria-label="Show one product per row">
              <i className="bi bi-square-fill"></i>
            </button>
            <button className="btn btn-light bt-chek" id="desk3" aria-label="Show two products per row">
              <i className="bi bi-grid-fill"></i>
            </button>
          </div>
        </div>
      </section>

      <section className="collection-grid">
        <div className="row row-cols-1 p-1 g-2">
          {products.map((product) => (
            <div id="pdc" className="col-4" key={product.model_number}>
              <div className="card">
                <Link className='tpimg' to={`/mens/${product.model_number}`} style={{ textDecoration: 'none' }}>
                  <img
                    src={hoveredImage[product.model_number] || `https://13-century.com/files/mens/${product.model_number}/${product.variants[0]?.color}.png`}
                    className="card-img-top pd"
                    alt={product.model_number}
                  />
                </Link>
                <div className="card-body">
                  <h5 className="card-title justify-content-center d-flex">{product.model_number}</h5>
                  <Flickity className={'carousel carousel-nav'} options={{ pageDots: false }}>
                    {product.variants.map((variant) => (
                      <div
                        className="carousel-cell productlist"
                        key={variant.color}
                        onMouseEnter={() => setHoveredImage((prev) => ({
                          ...prev,
                          [product.model_number]: `https://13-century.com/files/mens/${product.model_number}/${variant.color}.png`
                        }))}
                        onMouseLeave={() => setHoveredImage((prev) => ({
                          ...prev,
                          [product.model_number]: `https://13-century.com/files/mens/${product.model_number}/${product.variants[0]?.color}.png`
                        }))}
                      >
                        <img
                          src={`https://13-century.com/files/mens/${product.model_number}/${variant.color}.png`}
                          alt={variant.color}
                          loading='lazy'
                        />
                      </div>
                    ))}
                  </Flickity>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Menseye;
