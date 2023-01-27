import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import AdminSidebar from '../../Admin/Dashboard/adminLeftBar/AdminSidebar'
import "./UploadProduct.css"

const UploadProduct = () => {
    const [pdf, setPdf] = useState("")
    const [allUploadData, setallUploadData] = useState("")
    const handlechange = (e) => {
        console.log(e.target.files)
        setPdf(e.target.files)
    }

    const handlepdfapi = () => {
        const url = "http://localhost:4000/upload/"
        const formData = new FormData()
        console.log(formData)
        formData.append('pdf,pdf')
        axios.post(url, formData).then((res => {
            console.log(res)
        }))
    }

    return (
        <div >
            <AdminSidebar />
            <div className="upload_container">
                <form action=''>
                    <div className='fm-div'>
                        <div className="group">
                            <input type="text" required />
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Title</label>
                        </div>
                        <div className="group">
                            <input type="number" required />
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Price</label>
                        </div>
                        <div className="group">
                            <textarea className="textar" placeholder='your message'></textarea>
                            <span className="highlight"></span>
                            <span className="bar"></span>
                        </div>
                        <div className="select">
                            <select classname="format" id="format">
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
                        <div className='upload-div'>
                            <h3>Upload Images </h3>
                            <div className="group">
                                <input type="file" required />
                                <span className="highlight"></span>
                                <span className="bar"></span>

                            </div>
                            <h3>Upload Product Pdf </h3>
                            <div className="group">
                                <input type="file" onChange={handlechange} required />
                                <span className="highlight"></span>
                                <span className="bar"></span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <input className='button' type="submit" value="Submit" onClick={handlepdfapi} />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UploadProduct
