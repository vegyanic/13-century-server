import React, { useState, useEffect } from 'react';
import Flickity from 'react-flickity-component';
import 'flickity/css/flickity.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import '../mens.collection.css';
import { Link } from 'react-router-dom';
import Header from '../common/head';

const Meneye = () => {
  const [products, setProducts] = useState([]);
  const [hoveredImage, setHoveredImage] = useState({});

  useEffect(() => {
    const category = 'Eyewear';
    const gender = 'Male';

    fetch(`https://13-century.com/products?category=${category}&gender=${gender}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        const groupedProducts = data.reduce((acc, item) => {
          if (!acc[item.id]) {
            acc[item.id] = { ...item, variants: [] };
          }
          if (item.color && item.image_filename) {
            acc[item.id].variants.push({ color: item.color, image: item.image_filename });
          }
          return acc;
        }, {});

        setProducts(Object.values(groupedProducts));
      })
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  return (
    <>
      <Header />
      <div className="mens-benner" style={{ backgroundImage: 'url(../files/banner_img/A7_02626.jpeg)' }} loading="lazy">
        <div className="videoBoxInfo text-light" style={{ paddingBottom: 'z0px' }}>
          <h3>Mens</h3>
        </div>
      </div>

      <section className="collection">
        <div className="d-flex justify-content-between align-items-center border-bottom">
          {/* Filter and Sort Buttons */}
        </div>
      </section>

      <section className="collection-grid">
        <div className="row row-cols-1 p-1 g-2">
          {products.map((product) => (
            <div id="pdc" className="col-4" key={product.id}>
              <div className="card">
                <Link className='tpimg' to={`/men/${product.model_number}`} style={{ textDecoration: 'none' }}>
                  <img
                    src={
                      hoveredImage[product.id] || 
                      `https://13-century.com/files/men/${product.model_number}/${product.variants[0]?.color}.png`
                    }
                    className="card-img-top pd"
                    alt={product.model_number}
                    loading='lazy'
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
                          [product.id]: `https://13-century.com/files/men/${product.model_number}/${variant.color}.png`
                        }))}
                        onMouseLeave={() => setHoveredImage((prev) => ({
                          ...prev, 
                          [product.id]: `https://13-century.com/files/men/${product.model_number}/${product.variants[0]?.color}.png`
                        }))}
                      >
                        <img 
                          src={`https://13-century.com/files/men/${product.model_number}/${variant.color}.png`} 
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
    </>
  );
};

export default Meneye;
