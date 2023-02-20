import React, { useState, useEffect } from 'react';
import Navbar from './FrontEnd/Header/Navbar';
import { Route, Routes } from 'react-router-dom'
import Home from './FrontEnd/Home';
import Blogs from './FrontEnd/Blogs';
import ContactUs from './FrontEnd/Contact';
import Cart from './FrontEnd/Cart';
import Project from './FrontEnd/Project';
import Login from './FrontEnd/login';
import Dashboard from './Admin/Dashboard/Dashboard';
import Order from './Admin/Order/Order';
import Upload from './Admin/Upload/Upload';
import Stock from './Admin/Stock/Stock';
import UploadProduct from './Admin/Upload/UploadProduct';
import UploadBlogs from './Admin/Upload/UploadBlogs';
import axios from 'axios';


function App() {
  const [cartItems, setCartItems] = useState([])
  const [countCartItems, setCountCartItems] = useState(0)
  const [cartMessage, setCartMessage] = useState()
  const [productData, setProductData] = useState([])
  const [sliderData, setSliderData] = useState([]);
  // console.log(sliderData,"sliderData")

  const onRemove = (curElemt) => {
    setCartItems((cartItems.filter((x) => x._id !== curElemt._id)))
    setCountCartItems(countCartItems - curElemt.qty)
  }
  const onAdd = (item) => {
    console.log(item,"item")
    const itemExist = cartItems.find((x) => x._id === item._id)
    console.log(itemExist,"itemExist")
    if (itemExist) {
      setCartItems(cartItems.map((x) => x._id === item._id ? { ...itemExist, qty: itemExist.qty + 1 } : x))
    }
    else {
      setCartItems([...cartItems, { ...item, qty: 1 }])
    }
    setCountCartItems(countCartItems + 1)
    setCartMessage("added to cart")
  }
  const getProductData = () => {
    axios.get("http://localhost:4000/Product")
      .then((result) => {
        setProductData(result.data.productData)
      }).catch(error => {
        console.log(error, "ProductData Error")
      })
  }
  useEffect(() => {
    getProductData()
    localStorage.setItem("localProductData", JSON.stringify(productData))
  }, [])

  const getSliderData = () => {
    axios.get("http://localhost:4000/image")
      .then((result) => {
        console.log(result,"sliderData")
        setSliderData(result.data.imageData)
      }).catch(error => {
        console.log(error, "slider Error")
      })
  }

  useEffect(() => {
    getSliderData()
    // localStorage.setItem("localProductData", JSON.stringify(sliderData))
  }, [])



  return (
    <div>
      <Navbar countCartItems={countCartItems} />
      <Routes>
        <Route exact path='/' element={<Home sliderData={sliderData}/>} />
        <Route exact path='/Blogs' element={<Blogs />} />
        <Route exact path='/Contact' element={<ContactUs/>} />
        <Route exact path="/cart" element={<Cart cartItems={cartItems} data={productData} onRemove={onRemove} countCartItems={countCartItems} />} />
        <Route exact path="/Project" element={<Project productData={productData} onAdd={onAdd} cartMessage={cartMessage} />} />
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/Dashboard" element={<Dashboard />} />
        <Route exact path="/All_Order" element={<Order />} />
        <Route exact path="/Upload" element={<Upload />} />
        <Route exact path="/Stock" element={<Stock />} />
        <Route exact path="/UploadProduct" element={<UploadProduct />} />
        <Route exact path="/UploadBlogs" element={<UploadBlogs />} />
      </Routes>
    </div>
  );
}
export default App;
