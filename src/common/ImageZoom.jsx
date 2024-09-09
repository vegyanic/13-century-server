import React, { useState, useRef } from 'react';
import '../Imagezoom.css'; // Import your CSS

const ImageZoom = ({ src }) => {
  const [zoomStyle, setZoomStyle] = useState({});
  const imageRef = useRef(null);

  const handleMouseMove = (e) => {
    const { left, top, width, height } = imageRef.current.getBoundingClientRect();
    const x = e.pageX - left - window.pageXOffset;
    const y = e.pageY - top - window.pageYOffset;

    const backgroundX = (x / width) * 100;
    const backgroundY = (y / height) * 100;

    setZoomStyle({
      backgroundImage: `url(${src})`,
      backgroundPosition: `${backgroundX}% ${backgroundY}%`,
      backgroundSize: `${width * 2}px ${height * 2}px`,
      display: 'block',
      left: `${x - 50}px`,
      top: `${y - 50}px`,
    });
  };

  const handleMouseLeave = () => {
    setZoomStyle({ display: 'none' });
  };

  return (
    <div className="image-zoom-container">
      <img
        src={src}
        alt="Zoom"
        className="main-image"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        ref={imageRef}
      />
      <div className="zoom-lens" style={zoomStyle}></div>
    </div>
  );
};

export default ImageZoom;
