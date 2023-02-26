import React from 'react'
import CardSlider from '../CardSlider'
import ImageSlider from '../ImageSlider'


const Home = ({image,productData}) => {
  return (
    <div>
      <ImageSlider images={image}/>
      <h2>New Arival </h2>
      {/* <CardSlider data={productData}/> */}
    </div>
  )
}

export default Home 