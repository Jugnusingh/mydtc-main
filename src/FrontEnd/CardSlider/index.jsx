import React, { useState, useEffect } from 'react';
import './CardSlider.css';
import "../../../src/index.css"

const CardSlider = ({productData}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevClick = () => {
    const index = activeIndex === 0 ? productData.length - 1 : activeIndex - 1;
    setActiveIndex(index);
  };

  const handleNextClick = () => {
    const index = activeIndex === productData.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(index);
  };

  return (
    <div className="card-slider">
      <div className="card-slider-items" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
        {productData.map((item) => (
          <div className='cards'  >
          <div className='card'>
              <img src={item.Image} alt="mypic" className='card_img' />
              <div className='card_info'>
                  <span className='card_cat'>{item.Category}</span>
                  <h3 className='card_titel'>{item.Title}</h3>
                  <span className='Project_price'>{item.Price}/-</span>
                  <span className='Project_price'>{item.Description}/-</span>
              </div>
          </div>
          </div>
        ))}
      </div>
      <button className="card-slider-prev" onClick={handlePrevClick}>
        Prev
      </button>
      <button className="card-slider-next" onClick={handleNextClick}>
        Next
      </button>
    </div>
  );
};

export default CardSlider;
