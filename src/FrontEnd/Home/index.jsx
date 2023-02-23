import React from 'react'
import ImageSlider from '../ImageSlider'

const Home = ({images}) => {
  return (
    <div>
      {/* <ImageSlider   /> */}
      <ImageSlider images={images}/>
    </div>
  )
}

export default Home 