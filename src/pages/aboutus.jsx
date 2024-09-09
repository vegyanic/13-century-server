import React from 'react';
import {  Row, Col, Image } from 'react-bootstrap';
import Header from '../common/head';
import Footer from '../common/footer';
import '../aboutus.css';


const AboutUs = () => {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="text-center bg-light container-xxl">
        {/* Heading */}
        <Row>
          <Col>
            <h2 className="display-4">A CATEGORY OF ONE.</h2>
          </Col>
        </Row>

        {/* Subheading */}
        <Row className="mt-3">
          <Col>
            <h5>A DEFINITION YOU CAN’T OWN, YOU CAN ONLY EARN. AND 13 CENTURY HAS EARNING.</h5>
          </Col>
        </Row>

        {/* Image with Text Overlay */}
        <Row className="mt-5 position-relative">
          <Col>
            <Image 
              src="../files/mens/0759/C3.png" 
              fluid 
              alt="About Us Image" 
              className="mx-auto d-block position-relative"
            />
            {/* Text Overlay */}
            <div className="overlay-text">
              13 CENTURY LUXURY EYEWEAR BY TRANSCENDING ITS CONVENTIONS,
              CREATING A DISCREET LUXURY WITH PRODUCT RANGING FROM BOLD CHARACTER FRAMES 
              TO NEW INTERPRETATIONS OF TIMELESS SHAPES THROUGH INNOVATIVE TECHNOLOGY. 
              DESIGN AND PARTNERS AT THE HIGHEST LEVELS OF MANUFACTURING, 13 CENTURY'S 
              EXPERTISE IS UNPARALLELED, EARNING A COVETED REPUTATION AS A TRUE LEADER 
              IN OPTICAL INNOVATION.
            </div>
          </Col>
        </Row>
      </div>
      {/* Main Content */}
      <div className="container-xxl bg-light text-center">
      {/* Image with Text Overlay */}
      <Row className="mt-5">
        <Col md={6} className="d-flex align-items-center">
          <div>
            <h3>DESIGN THAT FINDS BEAUTY IN PURPOSE.</h3>
            <p>
              FOCUS. DISCIPLINE. TIME. SACRIFICE. FAILURE. SUCCESS. QUALITIES THAT MAKE THE ORDINARY EXTRAORDINARY, WHICH IS WHY EACH DESIGN IS TREATED INDEPENDENTLY, TAKING MONTHS FROM CONCEPTION TO PRODUCTION.
            </p>
          </div>
        </Col>
        <Col md={6} className="d-flex align-items-center justify-content-end">
          <div style={{ height: '300px', width: '100%', overflow: 'hidden' }}>
            <img
              src="../files/banner_img/A7_02730.jpeg" // Replace with your image URL
              alt="Description"
              style={{ height: '100%', width: 'auto', objectFit: 'cover' }}
            />
          </div>
        </Col>
      </Row>
    </div>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default AboutUs;
