import React, { useState } from 'react'
import Card from '../Card'
import '../../../src/index.css'

const Project = ({ productData, onAdd, cartMessage }) => {
  const [product, setProduct] = useState(productData)
  const searchProduct = (item) => {
    const result = product.filter((x) => {
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
            <button className='btn-mca' onClick={() => { searchProduct("MCA") }}>MCA-NEW</button>
            <ul>
            <li  onClick={() => { searchProduct("MCA-NEW 1st-Sem") }}> 1st-Sem</li>
            <li  onClick={() => { searchProduct("MCA-NEW 2st-Sem") }}> 2nd-Sem</li>
            <li  onClick={() => { searchProduct("MCA-NEW 3rd-Sem") }}> 3rd-Sem</li>
            <li  onClick={() => { searchProduct("MCA-NEW 4th-Sem") }}> 4th-Sem</li>
            </ul>
            <button className='btn-mca' onClick={() => { searchProduct("BCA") }}>BCA</button>
            <ul>
            <li  onClick={() => { searchProduct("BCA 1st-sem") }} >1st-Sem</li>
            <li  onClick={() => { searchProduct("BCA 2st-sem") }} >2nd-Sem</li>
            <li  onClick={() => { searchProduct("BCA 3st-sem") }} >3rd-Sem</li>
            <li  onClick={() => { searchProduct("BCA 4th-sem") }} >4th-Sem</li>
            <li  onClick={() => { searchProduct("BCA 5th-sem") }} >5th-Sem</li>
            <li  onClick={() => { searchProduct("BCA 6th-sem") }} >6th-Sem</li>
            </ul>
            <button className='btn-mca' onClick={() => { searchProduct("PGDCA-NEW") }}>PGDCA-NEW</button>
            <ul>
            <li  onClick={() => { searchProduct("PGDCA-NEW 1st-sem") }} >1st-Sem</li>
            <li  onClick={() => { searchProduct("PGDCA-NEW 1st-sem") }} >2nd-Sem</li>
            </ul>
            <button className='btn-mca' onClick={() => { searchProduct("MBA") }}>MBA</button>
            <ul>
            <li  onClick={() => { searchProduct("MBA 1st-Sem") }}>1st-Sem</li>
            <li  onClick={() => { searchProduct("MBA 2nd-Sem") }} >2nd-Sem</li>
            <li  onClick={() => { searchProduct("MBA 3rd-Sem") }} >3rd-Sem</li>
            <li  onClick={() => { searchProduct("MBA 4th-Sem") }} >4th-Sem</li>
            </ul>
            <button className='btn-mca' onClick={() => { setProduct(product) }}>All</button>
            <h2>Project</h2>
            <button className='btn-mca' onClick={() => { searchProduct("Project") }}>All-Project</button>
            <ul>
            <li>PhP</li>
            <li>Java</li>
            <li>NodeJS</li>
            <li>C++</li>
            </ul>
            </div>
           <div className='card-right-body'>
            <Card data={productData} onAdd={onAdd} product={product} cartMessage={cartMessage} />
          </div>
        </div>

      </div>
    </div>


  )
}

export default Project