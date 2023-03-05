import React from 'react'
import '../Card/Card.css'

function Card({ onAdd, productData, jugnu }) {
    return (
        <>
            {productData.map((item) => {
                return (
                    <>  
                    <div className='main-div-con'>          
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <img className="srcimg" src={item.Image}  />
                                </div>
                                <div className="flip-card-back">
                                    <h2>{item.Title}</h2>
                                    <p>{item.Category}</p>
                                    <p className="product-price">{item.price}</p>
                                    <button onClick={() => onAdd(item)} className="buy-button">Buy Now</button>
                                </div>
                            </div>
                        </div>
                        </div>  
                    </>
                )
            })}
        </>
    )
}

export default Card;