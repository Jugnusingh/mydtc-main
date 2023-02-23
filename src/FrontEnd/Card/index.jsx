import React from 'react'
import "../../../src/index.css"
function Card({ onAdd, product }) {
    return (
        <>
            {product.map((item) => {
                return (
                    <>
                        <div className='cards'  >
                            <div className='card'>
                                <img src={item.Image} alt="mypic" className='card_img' />
                                <div className='card_info'>
                                    <span className='card_cat'>{item.Category}</span>
                                    <h3 className='card_titel'>{item.Title}</h3>
                                    <span className='Project_price'>{item.Price}/-</span>
                                    <span className='Project_price'>{item.Description}/-</span>
                                    <br>
                                    </br>
                                    <button className='bttn-card' onClick={() => onAdd(item)}>
                                        Add To Cart
                                    </button>
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