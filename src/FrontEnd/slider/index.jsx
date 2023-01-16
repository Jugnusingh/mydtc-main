import React from 'react'

const Slider = (props) => {
  const {data} = props
  console.log(data,"slider comp")
  return (
    <div>


      {
        data.map((item)=>{
         return <div>
            <img src={item.Image} className="slider-img" alt="dsafd" />
            </div>
        })
      }

    </div>
  )
}

export default Slider