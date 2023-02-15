import React from 'react'
import { useState, useEffect } from 'react';
import "./Index.css"
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ImageSlider=({sliderData}) =>{
  console.log(sliderData,"yahoo")

  return (
    <div>
      <Carousel>
      {sliderData.map((image) => (
        <div key={image._id}>
          <img src={image.ImgUrl} alt={image.Title} />
          <div>{image.Title}</div>
          <div>{image.Description}</div>
        </div>
      ))}
      </Carousel>
    </div>
  );
}
export default ImageSlider