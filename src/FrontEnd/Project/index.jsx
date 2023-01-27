import React, { useState } from 'react'
import Card from '../Card'
import '../../../src/index.css'

const Project = ({ data, onAdd, cartMessage }) => {
  console.log(data,"Project component")
  const [product, setProduct] = useState(data)
  const searchProduct = (item) => {
    const result = data.filter((x) => {
      return x.Category === item
    })
    setProduct(result)
  }
  return (
    <div>
      <div className='cart-message'>
        {cartMessage} 
      </div>
      <div className='main-body'>
        <div className='card-body'>
          <div className='card-left-body'>
            <h2>Assignment</h2>
            <button className='btn-mca' onClick={() => { searchProduct("MCA Project") }}>MCA-NEW</button>
            <ul>
            <li>1st-Sem</li>
            <li>2nd-Sem</li>
            <li>3rd-Sem</li>
            <li>4th-Sem</li>
          
            </ul>
            <button className='btn-mca' onClick={() => { searchProduct("BCA Project") }}>BCA</button>
            <ul>
            <li>1st-Sem</li>
            <li>2nd-Sem</li>
            <li>3rd-Sem</li>
            <li>4th-Sem</li>
            <li>5th-Sem</li>
            <li>6th-Sem</li>
            </ul>
            <button className='btn-mca' onClick={() => { searchProduct("MBA Project") }}>PGDCA-NEW</button>
            <ul>
            <li>1st-Sem</li>
            <li>2nd-Sem</li>
          
            </ul>
            <button className='btn-mca' onClick={() => { searchProduct("MBA Project") }}>MBA</button>
            <ul>
            <li>1st-Sem</li>
            <li>2nd-Sem</li>
            <li>3rd-Sem</li>
            <li>4th-Sem</li>
            </ul>
            <button className='btn-mca' onClick={() => { setProduct(data) }}>All</button>
            <h2>Project</h2>
            <button className='btn-mca' onClick={() => { searchProduct("MCA Project") }}>MCA-Project</button>
            <ul>
            <li>PhP</li>
            <li>Java</li>
            <li>NodeJS</li>
            <li>C++</li>
            </ul>
          </div>
          <div className='card-right-body'>
            <Card data={data} onAdd={onAdd} product={product} cartMessage={cartMessage} />
          </div>
        </div>

      </div>
    </div>


  )
}

export default Project