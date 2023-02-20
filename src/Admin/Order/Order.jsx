import React from 'react'
import "../Dashboard/Dashboard.css"
import AdminSidebar from '../../Admin/Dashboard/adminLeftBar/AdminSidebar'

const Order = () => {
    return (
      <div>
         <AdminSidebar/>
                        <div className="title">All order</div>
                        <div className="sales-details">
                            <ul className="details">
                                <li className="topic">Date</li>
                                <li><a href="#">02 Jan 2021</a></li>
                                <li><a href="#">02 Jan 2021</a></li>
                                <li><a href="#">02 Jan 2021</a></li>
                                <li><a href="#">02 Jan 2021</a></li>
                                <li><a href="#">02 Jan 2021</a></li>
                                <li><a href="#">02 Jan 2021</a></li>
                                <li><a href="#">02 Jan 2021</a></li>
                                <li><a href="#">02 Jan 2021</a></li>
                                <li><a href="#">02 Jan 2021</a></li>
                            </ul>
                            <ul className="details">
                                <li className="topic">Customer</li>
                                <li><a href="#">Alex Doe</a></li>
                                <li><a href="#">David Mart</a></li>
                                <li><a href="#">Roe Parter</a></li>
                                <li><a href="#">Diana Penty</a></li>
                                <li><a href="#">Martin Paw</a></li>
                                <li><a href="#">Doe Alex</a></li>
                                <li><a href="#">Aiana Lexa</a></li>
                                <li><a href="#">Rexel Mags</a></li>
                                <li><a href="#">Tiana Loths</a></li>
                            </ul>
                            <ul className="details">
                                <li className="topic">Email Id</li>
                                <li><a href="#">abc@gmail.com</a></li>
                                <li><a href="#">abc@gmail.com</a></li>
                                <li><a href="#">abc@gmail.com</a></li>
                                <li><a href="#">abc@gmail.com</a></li>
                                <li><a href="#">abc@gmail.com</a></li>
                                <li><a href="#">abc@gmail.com</a></li>
                                <li><a href="#">abc@gmail.com</a></li>
                                <li><a href="#">abc@gmail.com</a></li>
                                <li><a href="#">abc@gmail.com</a></li>
                            </ul>
                            <ul className="details">
                                <li className="topic">Status</li>
                                <li><a href="#">Delivered</a></li>
                                <li><a href="#">Pending</a></li>
                                <li><a href="#">Returned</a></li>
                                <li><a href="#">Delivered</a></li>
                                <li><a href="#">Pending</a></li>
                                <li><a href="#">Returned</a></li>
                                <li><a href="#">Delivered</a></li>
                                <li><a href="#">Pending</a></li>
                                <li><a href="#">Delivered</a></li>
                            </ul>
                            <ul className="details">
                                <li className="topic">Total</li>
                                <li><a href="#">₹204.98</a></li>
                                <li><a href="#">₹24.55</a></li>
                                <li><a href="#">₹25.88</a></li>
                                <li><a href="#">₹170.66</a></li>
                                <li><a href="#">₹56.56</a></li>
                                <li><a href="#">₹44.95</a></li>
                                <li><a href="#">₹67.33</a></li>
                                <li><a href="#">₹23.53</a></li>
                                <li><a href="#">₹46.52</a></li>
                            </ul>
                        </div>
</div >

    )
}

export default Order