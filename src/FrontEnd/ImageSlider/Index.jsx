import React from 'react'
import { useState, useEffect } from 'react';
import "./Index.css"



const ImageSlider=({sliderData}) =>{
  
  return (
    <div>
      {sliderData.map((image) => (
        <div key={image._id}>
          <img src={image.url} alt={image.label} />
          <div>{image.label}</div>
        </div>
      ))}
    </div>
  );
}
export default ImageSlider