

import React from 'react'
import { useState } from 'react'
import AdminSidebar from '../../Admin/Dashboard/adminLeftBar/AdminSidebar'
import Upload from './Upload'
import axios from 'axios'
import "./UploadProduct.css"

const UploadProduct = () => {

    const submitHandler = (e) => {
e.preventDefault()
        const Title = e.target.Title.value;
        const Price = e.target.Price.value;
        const Description = e.target.Textarea.value;
        const Category = e.target.Category.value;
        const Image = e.target.Image.value
        console.log(Image,"myImage")
        const Pdf = e.target.Pdf.value
        axios.post("http://localhost:4000/product",
            {
                Title,
                Price,
                Description,
                Category,
                Image,
                Pdf

            })
            .then((res) => {
                console.log(res)
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div >
            <AdminSidebar />
            <Upload />
            <div className="upload_container">
                <center><h1> Product Upload</h1></center>
                <form name='sendformdata' id="uploaddata" onSubmit={submitHandler} >
                    <div className='dv-fm'>
                        <div className='fm-div'>
                            <div className="group">
                                <input type="text" name='Title' value="hello"  />
                                <span className="highlight"></span>
                                <span className="bar"></span>
                                <label>Title</label>
                            </div>
                            <div className="group">
                                <input type="number" name='Price' value="30"  />
                                <span className="highlight"></span>
                                <span className="bar"></span>
                                <label>Price</label>
                            </div>
                            <div className="group">
                                <textarea name='Textarea' className="textar" placeholder='Description' value="I am learning" ></textarea>
                                <span className="highlight"></span>
                                <span className="bar"></span>
                            </div>
                            <div className="select">
                                <select name='Category' classname="format" id="format">
                                    <option selected disabled>Select Your Category:</option>
                                    <option value="MCA_New">MCA_New</option>
                                    <option value="BCA">BCA</option>
                                    <option value="PGDCA_New">PGDCA_New</option>
                                    <option value="MBA">MBA</option>
                                    <option value="java">JAVA</option>
                                    <option value="PHP"> Php</option>
                                    <option value=".Net">.Net</option>
                                    <option value="C++">C++</option>
                                </select>
                            </div>
                        </div>
                        <div className='upload-div'>
                            <h3>Upload Images </h3>
                            <div className="group">
                                <input type="file" name="Image"  />
                                <span className="highlight"></span>
                                <span className="bar"></span>
                            </div>
                            <h3>Upload Product Pdf </h3>
                            <div className="group">
                                <input type="file" name="Pdf"  />
                                <span className="highlight"></span>
                                <span className="bar"></span>
                            </div>
                            <div>
                                <input className='button' type="submit" value="Submit" />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UploadProduct
