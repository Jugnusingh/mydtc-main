import React from 'react'
import AdminSidebar from '../../Admin/Dashboard/adminLeftBar/AdminSidebar'
import './Dashboard.css'
const AdminDashboard = () => {
    return (
        <div>
            <AdminSidebar />
            <section class="home-section">

                <div class="home-content">
                    <div class="overview-boxes">
                        <div class="box">
                            <div class="right-side">
                                <div class="box-topic">Total Order</div>
                                <div class="number">40,876</div>
                                <div class="indicator">
                                    <i class='bx bx-up-arrow-alt'></i>
                                    <span class="text">Up from yesterday</span>
                                </div>
                            </div>
                            < img className='bx bxs-cart-add cart two' src='./Images/order.png' alt='cart' />
                        </div>
                        <div class="box">
                            <div class="right-side">
                                <div class="box-topic">Total Sales</div>
                                <div class="number">38,876</div>
                                <div class="indicator">
                                    <i class='bx bx-up-arrow-alt'></i>
                                    <span class="text">Up from yesterday</span>
                                </div>
                            </div>
                            < img className='bx bxs-cart-add cart two' src='./Images/cart.png' alt='cart' />
                        </div>
                        <div class="box">
                            <div class="right-side">
                                <div class="box-topic">Total Earning </div>
                                <div class="number">₹12,876</div>
                                <div class="indicator">
                                    <i class='bx bx-up-arrow-alt'></i>
                                    <span class="text">Up from yesterday</span>
                                </div>
                            </div>
                            < img className='bx bxs-cart-add cart two' src='./Images/rupee.png' alt='cart' />
                        </div>
                        <div class="box">
                            <div class="right-side">
                                <div class="box-topic">Total View</div>
                                <div class="number">11,086</div>
                                <div class="indicator">
                                    <i class='bx bx-down-arrow-alt down'></i>
                                    <span class="text">Down From Today</span>
                                </div>
                            </div>
                            < img className='bx bxs-cart-add cart two' src='./Images/view.png' alt='cart' />
                        </div>
                    </div>
                    <div class="sales-boxes">
                        <div class="recent-sales box">
                            <div class="title">Recent Sales</div>
                            <div class="sales-details">
                                <ul class="details">
                                    <li class="topic">Date</li>
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
                                <ul class="details">
                                    <li class="topic">Customer</li>
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
                                <ul class="details">
                                    <li class="topic">Sales</li>
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
                                <ul class="details">
                                    <li class="topic">Total</li>
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
                            <div class="button">
                                <a href="#">See All</a>
                            </div>
                        </div>
                        <div class="top-sales box">
                            <div class="title">Top Seling Product</div>
                            <ul class="top-sales-details">
                                <li>
                                    <a href="#">
                                        <img src="images/sunglasses.jpg" alt="" />
                                        <span class="product">Vuitton Sunglasses</span>
                                    </a>
                                    <span class="price">₹1107</span>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="Images/user.jpg" alt="" />
                                        <span class="product">Hourglass Jeans </span>
                                    </a>
                                    <span class="price">₹1567</span>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="images/nike.jpg" alt="" />
                                        <span class="product">Nike Sport Shoe</span>
                                    </a>
                                    <span class="price">₹1234</span>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="images/scarves.jpg" alt="" />
                                        <span class="product">Hermes Silk Scarves.</span>
                                    </a>
                                    <span class="price">₹2312</span>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="images/blueBag.jpg" alt="" />
                                        <span class="product">Succi Ladies Bag</span>
                                    </a>
                                    <span class="price">₹1456</span>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="images/bag.jpg" alt="" />
                                        <span class="product">Gucci Womens's Bags</span>
                                    </a>
                                    <span class="price">₹2345</span>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="images/addidas.jpg" alt="" />
                                        <span class="product">Addidas Running Shoe</span>
                                    </a>
                                    <span class="price">₹2345</span>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="images/shirt.jpg" alt="" />
                                        <span class="product">Bilack Wear's Shirt</span>
                                    </a>
                                    <span class="price">₹1245</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>



        </div>
    )
}

export default AdminDashboard
