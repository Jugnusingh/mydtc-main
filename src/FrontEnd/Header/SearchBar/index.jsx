import React from 'react'
import "./index.css"

const SearchBar = () => {
  return (

    <>
      <form action=""className='search_bar' id='form'>
        <input type="search" placeholder="Search here ..."className='intput_bar' />
        <i className="fa fa-search"></i>
      </form>

    </>
  )
}

export default SearchBar