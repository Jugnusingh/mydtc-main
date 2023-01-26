import React from 'react'
import { useState } from 'react'
import AdminSidebar from '../../Admin/Dashboard/adminLeftBar/AdminSidebar'
import "./UploadProduct.css"

const UploadProduct = () => {
    const [image,setImage]=useState()

    const imageUpload = ()=>{
        setImage()
    }
    return (
        <div>
            <AdminSidebar />
            <center>
                <form>
                    <label>
                        Name:
                        <input type="text" placeholder='Title' />
                    </label>

                    <h3>Select Your Category:</h3>
                    <div className="select">
                        <select name="format" id="format">
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
                    <h3>price</h3>
                    <div className='number'>
                        <input className="input_number" type="number" id="tentacles" name="tentacles"
                            min="10" max="10000" />
                    </div>
                    <textarea className='text-area' name="Description" placeholder='Description' id="" cols="30" rows="10"></textarea>
                    <h3>Upload Image</h3>
                    <label for="images" className="drop-container">
                        <span className="drop-title">Drop files here</span>
                        or
                        <input type="file" id="images" accept="image/*" required name="image" />
                    </label>
                    <h3>Upload Product Pdf</h3>
                    <label for="images" className="drop-container">
                        <span className="drop-title">Drop files here</span>
                        or
                        <input type="file" id="pdf" accept="pdf/*" required />
                    </label>

                    <div>
                        <input className='button' type="submit" value="Submit"  />
                    </div>
                </form>

            </center>
        </div>
    )
}

export default UploadProduct
