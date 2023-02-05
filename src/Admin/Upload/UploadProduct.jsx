import axios from 'axios'
// import e from 'cors'
import React from 'react'
import { useState } from 'react'
import AdminSidebar from '../../Admin/Dashboard/adminLeftBar/AdminSidebar'
import Upload from './Upload'
import "./UploadProduct.css"

const UploadProduct = () => {

    // const [title, setTitle] = useState("")
    // const [num, setNum] = useState("")
    // const [textarea, setTextarea] = useState("")
    // const [category, setCategory] = useState("")
    // const [image, setImage] = useState("")
    // const [pdf, setPdf] = useState("")


    // function addProduct() 
    // {
    //     console.warn(title, num, textarea, category, image, pdf);
    // }

    // const addProduct = (e) => {
    //     console.log(e.target.title)
    //     const value = e.target.value;
    //     const title = e.target.title

    //     setUploadData([name]=value)
    //     console.log(uploaddata)
    // }

    const submitHandler = (e) => {
        

        const title = e.target.title.value;
        const price = e.target.num.value;
        const textarea = e.target.textarea.value;
        const category = e.target.category.value;
        const image = e.target.image.value
        const pdf = e.target.image.value
        axios.post("https://localhost:4000/product",
            {
                title,
                price,
                textarea,
                category,
                image,
                pdf

            })
            .then((res) => {
                console.log(res)
            })
        e.target.reset()
            .catch(error => {
                console.log(error)
            })

        // const url = ""
        // const formData = new FormData()
        // // console.log(formData)
        // formData.append('uploaddata,uploaddata')
        // console.log(formData)


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
                                <input type="text" name='title' required />
                                <span className="highlight"></span>
                                <span className="bar"></span>
                                <label>Title</label>
                            </div>
                            <div className="group">
                                <input type="number" name='num' required />
                                <span className="highlight"></span>
                                <span className="bar"></span>
                                <label>Price</label>
                            </div>
                            <div className="group">
                                <textarea name='textarea' className="textar" placeholder='Description' ></textarea>
                                <span className="highlight"></span>
                                <span className="bar"></span>
                            </div>
                            <div className="select">
                                <select name='category' classname="format" id="format">
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
                                <input type="file" name="image" required />
                                <span className="highlight"></span>
                                <span className="bar"></span>
                            </div>
                            <h3>Upload Product Pdf </h3>
                            <div className="group">
                                <input type="file" name="pdf" required />
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
