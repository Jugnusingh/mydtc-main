import React, { useState,useEffect } from "react";
// import "./ImageSlider.css";

const ImageSlider = ({ images }) => {
  console.log(images,"jai shri ram ")
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div className="slider">
      {images.map((item) => (
        <img
          key={item._id }
          src={item.ImgUrl}
          className={item._id === currentSlide ? 'active' : ''}
        />
      ))}
    </div>
  );
}

export default ImageSlider;