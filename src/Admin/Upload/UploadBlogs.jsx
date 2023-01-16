import React from 'react'
import AdminSidebar from '../AdminSidebar'
import "./UploadBlogs.css"

const UploadBlogs = () => {
    return (
        <>
            <AdminSidebar />
            <div>
                <form className='upload-blogs-form' action="">
                    <div className='uplode-blogs'>
                        <div className='form-body'>
                            <h3>Title Heading</h3>
                            <input className='title-input' type="text" placeholder='Title' />
                            <h4>Description</h4>
                            <textarea className='text-area-input' name="Description" placeholder='Description' id="" cols="30" rows="10"></textarea>
                            <label for="images" className="drop-container">
                                <span className="drop-title">Drop files here</span>
                                or
                                <input type="file" id="images" accept="image/*" required />
                            </label>
                            <center>
                                <button className="blogs-button">Upload</button>
                            </center>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )

}

export default UploadBlogs



