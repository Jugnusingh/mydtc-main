import React from 'react'
import AdminSidebar from '../../Admin/Dashboard/adminLeftBar/AdminSidebar'
import Upload from './Upload'
import "./UploadBlogs.css"

const UploadBlogs = () => {
    return (
        <>
            <AdminSidebar />
            <Upload/>
            <div className="upload_container">
               <center><h1> Blogs Upload</h1></center>
                <form action=''>
                    <div className='dv-fm'>
                        <div className='fm-div'>
                            <div className="group">
                                <input type="text" required />
                                <span className="highlight"></span>
                                <span className="bar"></span>
                                <label>Title</label>
                            </div>
                            {/* <div className="group">
                                <input type="number" required />
                                <span className="highlight"></span>
                                <span className="bar"></span>
                                <label>Price</label>
                            </div> */}
                            <div className="group">
                                <textarea className="textar" placeholder='your message'></textarea>
                                <span className="highlight"></span>
                                <span className="bar"></span>
                            </div>
                            <div className="select">
                                <select className="format" id="format">
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
                                <input type="file" required />
                                <span className="highlight"></span>
                                <span className="bar"></span>
                            </div>
                            <h3>Upload Product Pdf </h3>
                            <div className="group">
                                <input type="file"  required />
                                <span className="highlight"></span>
                                <span className="bar"></span>
                            </div>
                            <div>
                                <input className='button' type="submit" value="Submit"  />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
           
        </>
    )

}

export default UploadBlogs



